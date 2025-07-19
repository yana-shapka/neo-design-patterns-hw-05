import * as fs from "fs";
import * as path from "path";
import { DirectoryReport } from "./DirectoryReport";

export class DirectoryAnalyzer {
  analyze(dirPath: string): DirectoryReport {
    const result: DirectoryReport = {
      files: 0,
      directories: 0,
      totalSize: 0,
      extensions: {}
    };

    this.analyzeRecursive(dirPath, result);
    return result;
  }

  private analyzeRecursive(dirPath: string, result: DirectoryReport): void {
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
          result.directories++;
          this.analyzeRecursive(fullPath, result);
        } else if (stats.isFile()) {
          result.files++;
          result.totalSize += stats.size;
          
          const ext = path.extname(item);
          if (ext) {
            result.extensions[ext] = (result.extensions[ext] || 0) + 1;
          } else {
            result.extensions['(no extension)'] = (result.extensions['(no extension)'] || 0) + 1;
          }
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not access ${dirPath}: ${error}`);
    }
  }
}