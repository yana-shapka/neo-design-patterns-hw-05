import { ReportAdapter } from "./ReportAdapter";
import { DirectoryReport } from "./DirectoryReport";

export class XmlReportAdapter implements ReportAdapter {
  export(report: DirectoryReport): string {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<report>\n';
    xml += `  <files>${report.files}</files>\n`;
    xml += `  <directories>${report.directories}</directories>\n`;
    xml += `  <totalSize>${report.totalSize}</totalSize>\n`;
    xml += '  <extensions>\n';
    

    const sortedExtensions = Object.entries(report.extensions)
      .sort(([,a], [,b]) => b - a);
    
    for (const [extension, count] of sortedExtensions) {

      const escapedExtension = this.escapeXml(extension);
      xml += `    <extension name="${escapedExtension}" count="${count}"/>\n`;
    }
    
    xml += '  </extensions>\n';
    xml += '</report>';
    
    return xml;
  }

  private escapeXml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }
}