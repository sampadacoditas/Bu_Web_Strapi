export interface ICalendar {
  handleDate: (date: Date | null) => void;
  value?: Date | null;
  label: string;
  name: string;
  isRequired: boolean;
  commonSvgs?: { [key: string]: string };
}
export interface IField {
  name: string;
  value: Date;
  onChange: () => void;
}

export interface ICalendarBody {
  decreaseMonth: () => void;
  increaseMonth: () => void;
  date: Date;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}
