export interface listDataType {
  id: number;
  position: string;
  redirectTo: string;
}

export interface listType {
  listItem: listDataType;
  rightArrow?: string;
}

export interface HeaderType {
  header: string;
  desc?: string;
}
export interface OpenPositionsType {
  headerData: HeaderType;
  positionsArray: Array<listDataType>;
  openPositions?: string;
  viewAllBtn?: string;
  rightArrow?: string;
}
