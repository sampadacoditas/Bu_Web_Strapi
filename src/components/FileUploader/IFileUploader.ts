export interface IFileUploader {
  handleFile: (file: React.BaseSyntheticEvent) => void;
  value?: File | null;
  deleteFile: () => void;
  error?: { err: boolean; msg: string };
  name: string;
  label: string;
  commonSvgs?: { [key: string]: string };
}
