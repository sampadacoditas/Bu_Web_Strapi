interface ILogoArray {
  id: number;
  customLogoClass: string;
  imageSrc: string;
}
export interface IDigitallyTranformed {
  titleText: string;
  subTitle: string;
  hasImagesArray: boolean;
  imagesArray?: Array<ILogoArray>;
  customLogoClass?: string;
  customLogoContainerClass?: string;
}
