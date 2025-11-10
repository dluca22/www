export interface SvFood {
  id: number;
  name: string;
  description?: string;
  temperature?: number;
  time?: number;
  extraPrep: boolean;
}