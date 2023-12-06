import { StaticImageData } from "next/image";

export interface cardDataType {
  id: number;
  imgSrc: string;
  name: string;
  about: string;
  desc: string;
  position: string;
}

export interface cardType {
  data: cardDataType;
  handleClick: (data: cardDataType) => void;
  onModalClose: () => void;
  isModalOpen?: boolean;
  buttonText?: string;
}

export interface HeaderType {
  header: string;
  desc: string;
}
export interface OurLeadershipType {
  headerData: HeaderType;
  cardsArray: Array<cardDataType>;
  buttonLabel?: {
    viewMoreBtn?: string;
    viewLessBtn?: string;
    cardBtnText?: string;
  };
  commonSvgs: {[key: string]: string};
}
