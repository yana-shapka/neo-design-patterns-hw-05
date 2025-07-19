export class AppConfigService {
  private static instance: AppConfigService | null = null;
  
  public readonly companyName: string;
  public readonly footer: string;

  private constructor(companyName: string, footer: string) {
    this.companyName = companyName;
    this.footer = footer;
  }


  public static getInstance(companyName?: string, footer?: string): AppConfigService {
    if (AppConfigService.instance === null) {
      if (companyName === undefined || footer === undefined) {
        throw new Error("Для першого виклику getInstance потрібні параметри companyName та footer");
      }
      AppConfigService.instance = new AppConfigService(companyName, footer);
    }
    
    return AppConfigService.instance;
  }

  public static resetInstance(): void {
    AppConfigService.instance = null;
  }
}