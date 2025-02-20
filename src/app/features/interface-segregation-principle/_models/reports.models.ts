export interface generate {
  generateReport(data: any): string;
}

export interface print {
  printReport(data: any): void;
}

export interface Reports {
  generateReport(data: any): string;
  printReport(data: any): void;
}
