import { CreateFeedBackDto } from '../dto/feedback.dto';

export interface IFeedbackService {
  getAllFeedBack(): Promise<any>; // fix this later
  getEnumProblems(): Promise<any>;
  createFeedback(createFeedBackInput: CreateFeedBackDto): Promise<boolean>;
}
