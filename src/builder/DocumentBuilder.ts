export class DocumentBuilder {
    private header: string = "";
    private body: string = "";
    private footer: string = "";
  
    addHeader(text: string): DocumentBuilder {
      this.header = text;
      return this;
    }
  
    addBody(text: string): DocumentBuilder {
      this.body = text;
      return this;
    }
  
    addFooter(text: string): DocumentBuilder {
      this.footer = text;
      return this;
    }
  
    build(): string {
      let result = "";
  
      if (this.header) {
        result += "=== " + this.header + " ===";
        result += "\n\n";
      }
  
      if (this.body) {
        result += this.body;
        result += "\n\n";
      }
  
      if (this.footer) {
        result += this.footer;
      }
  
      return result;
    }
  }