import { ReportAdapter } from "./ReportAdapter";
import { JsonReportAdapter } from "./JsonReportAdapter";
import { CsvReportAdapter } from "./CsvReportAdapter";
import { XmlReportAdapter } from "./XmlReportAdapter";
import { AnalyzerFacade } from "./AnalyzerFacade";
import * as fs from "fs";
import * as path from "path";

export class ReportManager {
  private static readonly REPORTS_DIR = "reports";
  private adapter: ReportAdapter;
  private fileExtension: string;
  private facade: AnalyzerFacade;

  constructor(format: string = "json") {
    this.initReportsDirectory();
    [this.adapter, this.fileExtension] = this.getAdapter(format);
    this.facade = new AnalyzerFacade(this.adapter);
  }

  generateReport(targetPath: string): void {
    try {

      if (!fs.existsSync(targetPath)) {
        console.error(`Error: Path "${targetPath}" does not exist.`);
        return;
      }


      const stats = fs.statSync(targetPath);
      if (!stats.isDirectory()) {
        console.error(`Error: Path "${targetPath}" is not a directory.`);
        return;
      }

  
      const reportContent = this.facade.generateReport(targetPath);
      

      const now = new Date();
      const timestamp = now.toISOString().replace(/\./g, '-').replace(/:/g, '-');
      const filename = `report-${timestamp}.${this.fileExtension}`;
      const filepath = path.join(ReportManager.REPORTS_DIR, filename);
      

      fs.writeFileSync(filepath, reportContent, 'utf8');
      
      console.log(`Report generated successfully: ${filepath}`);
      
    } catch (error) {
      console.error(`Error generating report: ${error}`);
    }
  }

  private initReportsDirectory(): void {
    try {
      if (!fs.existsSync(ReportManager.REPORTS_DIR)) {
        fs.mkdirSync(ReportManager.REPORTS_DIR, { recursive: true });
      }
    } catch (error) {
      console.error(`Error creating reports directory: ${error}`);
    }
  }

  private getAdapter(format: string): [ReportAdapter, string] {
    const normalizedFormat = format.toLowerCase().trim();
    
    switch (normalizedFormat) {
      case 'json':
        return [new JsonReportAdapter(), 'json'];
      case 'csv':
        return [new CsvReportAdapter(), 'csv'];
      case 'xml':
        return [new XmlReportAdapter(), 'xml'];
      default:
        console.warn(`Warning: Unknown format "${format}". Using JSON as default.`);
        return [new JsonReportAdapter(), 'json'];
    }
  }
}