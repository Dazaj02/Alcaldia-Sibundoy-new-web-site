export type CategoryType = 
  | 'all'
  | 'info_instruments'
  | 'procedures'
  | 'contracting' 
  | 'control'
  | 'planning'
  | 'budget' 
  | 'regulations' 
  | 'entity_info'
  | 'participation'
  | 'open_data';

export type FileFormatType = 'PDF' | 'XLSX' | 'ZIP' | 'DOCX';
export type DocumentStatusType = 'all' | 'active' | 'archived' | 'review';
export type ViewModeType = 'grid' | 'list';
export type LanguageType = 'es' | 'kams' | 'en';

export interface CategoryInfo {
  id: CategoryType;
  labelKey: string;
  number: string;
  icon: string;
  color: string;
  count?: number;
}

export interface TransparencyDocument {
  id: string;
  title: string;
  description: string;
  category: CategoryType;
  year: number;
  datePublished: string;
  fileFormat: FileFormatType;
  fileSize: string;
  status: DocumentStatusType;
  radicationCode: string;
  department: string;
  downloadUrl: string;
  featured?: boolean;
}
