export interface IOurOfffices {
  title: string;
  addressData?: {
    location: string;
    addresses: string[];
    flagIcon: string;
  }[];
  map?: string;
  commonSvgs?: {[key:string]: string};
  mappedSvgs?: {[key:string]: string};
}
