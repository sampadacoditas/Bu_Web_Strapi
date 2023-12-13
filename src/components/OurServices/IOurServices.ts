export interface cardDataType {
  icon: string;
  title: string;
  desc: string;
  link: string;
  showBullets?: true;
  modalData?: modalDataType;
}

export interface cardType {
  data: cardDataType;
  hasCardButton?: boolean;
  customClass?: string;
  customCardContentClass?: string;
  openModal?: (data: any) => any;
  buttonText?: string;
}

export interface modalDataType {
  icon: string;
  title: string;
  desc: string;
  descLists?: string[];
}

export interface modalType {
  data: modalDataType;
  closeModal: () => any;
  isModalOpen: boolean;
  commonSvgs?: {[key: string]: string};
}

export interface HeaderType {
  header: string;
  desc: string;
}
export interface OurServicesType {
  headerData: HeaderType;
  cardsArray: Array<cardDataType>;
  hasCardButton: boolean;
  hasViewMoreButton?: boolean;
  cardCustomClass?: string;
  bottomContainerCustomClass?: string;
  bottomContainerDynamicClass?: string;
  customCardBoxStyle?: string;
  showAllCards?: boolean;
  customCardContentClass?: string;
  customButtonContainer?: string;
  showDarkHeaderTheme?: boolean;
  buttonLabel?: {
    viewMoreBtn?: string;
    viewLessBtn?: string;
    cardBtnText?: string;
  };
  commonSvgs?: {[key: string]: string};
}
