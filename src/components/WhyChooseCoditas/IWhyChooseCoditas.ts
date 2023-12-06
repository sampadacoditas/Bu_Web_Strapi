export interface cardDataType {
  id: number;
  title?: string;
  data?: string;
  icon?: string;
}

export interface cardType {
  data: cardDataType;
}

export interface HeaderType {
  header: string;
  desc: string;
}
export interface WhyCooseCoditasType {
  headerData: HeaderType;
  cardsArray: Array<cardDataType>;
  customTitleContainer?: string;
  cardAlignment?: string;
  buttonLabel?: {
    viewMoreBtn?: string;
    viewLessBtn?: string;
    cardBtnText?: string;
  };
}
