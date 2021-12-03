export interface FormValues {
  name: string;
  remarks: string;
  contents: string | number;
  price: number;
  tags: string[];
  // images: strings[]:
}

export interface IMyButtonsProps {
  isValid: boolean;
}
