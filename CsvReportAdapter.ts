import { ReportAdapter } from "./ReportAdapter";
import { DirectoryReport } from "./DirectoryReport";

export class CsvReportAdapter implements ReportAdapter {
  export(report: DirectoryReport): string {
    let csv = "Metric,Value\n";
    csv += `Total Files,${report.files}\n`;
    csv += `Total Directories,${report.directories}\n`;
    csv += `Total Size (bytes),${report.totalSize}\n`;
    csv += "\n";
    csv += "Extension,Count\n";
    

    const sortedExtensions = Object.entries(report.extensions)
      .sort(([,a], [,b]) => b - a);
    
    for (const [extension, count] of sortedExtensions) {
      csv += `${extension},${count}\n`;
    }
    
    return csv;
  }
}