import DatePicker from "react-datepicker";
import { useFormContext, Controller } from "react-hook-form";
import CalendarBody from "./CalendarBody";
import { DATE_FORMAT } from "@/constants/constants";
import { ICalendar, IField } from "./ICalendar";
import "react-datepicker/dist/react-datepicker.css";
import style from "./Calendar.module.scss";
import { CustomImage } from "..";

const Calendar = (props: ICalendar) => {
  const { label, name, isRequired = false, commonSvgs = {} } = props;
  const { control } = useFormContext();

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(minDate.getDate() + 90);

  const calendarBody = (field: IField) => {
    return (
      <DatePicker
        customInput={
          <div className={style.dateInput}>
            <span className={field?.value ? style.value : style.placeholder}>
              {!field?.value
                ? DATE_FORMAT?.DATE_FORMAT_PLACEHOLDER
                : field?.value?.toLocaleDateString(DATE_FORMAT?.LOCAlE_TO_STRING_FORMAT)}
            </span>
            <CustomImage src={commonSvgs?.calendar} alt="Calendar" />
          </div>
        }
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <CalendarBody
            decreaseMonth={decreaseMonth}
            increaseMonth={increaseMonth}
            date={date}
            prevMonthButtonDisabled={prevMonthButtonDisabled}
            nextMonthButtonDisabled={nextMonthButtonDisabled}
          />
        )}
        wrapperClassName="custom-datepicker-wrapper"
        popperClassName="custom-popper-container"
        className="form-control"
        dateFormat={DATE_FORMAT?.DATE_FORMAT_VALUE}
        selected={field?.value}
        onChange={field.onChange}
        calendarStartDay={1}
        required={isRequired}
        minDate={minDate}
        maxDate={maxDate}
        disabledKeyboardNavigation
      />
    );
  };
  return (
    <div className={style.container}>
      <div className={style.label}>
        {label} {isRequired ? <span className={style.required}>*</span> : ""}
      </div>
      <div>
        <Controller name={name} control={control} render={({ field: { ...field } }) => calendarBody(field)} />
      </div>
    </div>
  );
};
export default Calendar;
