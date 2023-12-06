import { ICalendarBody } from "./ICalendar";
import leftArrow from "@/assets/icons/leftArrow.svg";
import rightArrow from "@/assets/icons/rightArrow.svg";
import { MONTHS } from "@/constants/constants";
import style from "./Calendar.module.scss";
import { CustomImage } from "..";

const CalendarBody = (props: ICalendarBody) => {
  const { decreaseMonth, increaseMonth, date, prevMonthButtonDisabled, nextMonthButtonDisabled } = props;
  const handleIncreaseMonth = (increaseMonth: () => void) => (e: React.SyntheticEvent) => {
    e.preventDefault();
    increaseMonth();
  };
  const handleDecreaseMonth = (decreaseMonth: () => void) => (e: React.SyntheticEvent) => {
    e.preventDefault();
    decreaseMonth();
  };
  return (
    <div className={style.customHeaderContainer}>
      <div className={style.monthHeader}>
        <button
          onClick={handleDecreaseMonth(decreaseMonth)}
          disabled={prevMonthButtonDisabled}
          className={style.btn}
          type="button"
        >
          <CustomImage src={leftArrow} alt="Arrow" />
        </button>
        <div className={style.monthName}>
          {MONTHS[date.getMonth()]} {date.getFullYear()}
        </div>
        <button onClick={handleIncreaseMonth(increaseMonth)} className={style.btn} disabled={nextMonthButtonDisabled}>
          <CustomImage src={rightArrow} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};
export default CalendarBody;
