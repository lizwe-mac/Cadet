export enum SkillType {
  Behavioural = 1,
  Technical = 2,
  Other = 3,
  Combined = 4,
  Knowledge = 5,
  Competence = 6,
}

export interface SkillReport {
  list: [string, List[]][];
  averages: [string, number][];
  categories: Category[];
}

interface Category {
  key: string;
  reportData: ReportData;
}

interface ReportData {
  color: string;
  name: string;
  id: string;
  semanticName: string;
}

interface List {
  id: number;
  slug: string;
  name: string;
  description: string;
  amount: number;
  skillGap: number;
  technicalAmount: number;
  behavioralAmount: number;
  combinedAmount: number;
  previousAmount?: any;
  previousTechnicalAmount?: any;
  previousBehavioralAmount?: any;
  previousCombinedAmount?: any;
  skillSubTypeAmount: number;
  previousSkillSubTypeAmount?: any;
  skillSubTypeName: string;
  skillSubTypeId: number;
  skillSetAmount: number;
  previousSkillSetAmount?: any;
  skillSetName?: any;
  skillSetId?: any;
  skillType: number;
  dateCreated: string;
  recordCount: number;
  keplerPoints: number;
}

