export interface IReportService {
  getAllReports(): Promise<any>;
  createReport(createReportInput: any): Promise<boolean>;
}
