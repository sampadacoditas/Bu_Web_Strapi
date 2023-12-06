import { ReactNode } from "react";

export interface IHowWeWorkCard {
  logo: string;
  title: string;
  description: string;
}

export interface IHowWeWorkDetails {
  title: string;
  description: string;
  howWeWorkCard: IHowWeWorkCard[];
}

export interface IHowWeWork {
  contentContainerStyle: string;
  customCardStyle?: string;
  howWeWorkDetails: IHowWeWorkDetails;
}
