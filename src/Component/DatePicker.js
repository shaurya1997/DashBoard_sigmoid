import { useDispatch, useSelector } from "react-redux";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import { setDateRange } from "../Store/Action/DateAction";

const DatePicker = () => {
  const { minDate, maxDate } = useSelector((state) => state.date);

  const [value, setValue] = useState([
    new Date(parseInt(minDate)),
    new Date(parseInt(maxDate)),
  ]);

  const dispatch = useDispatch();

  const handleChange = (newValue) => {
    setValue(newValue);
    dispatch(setDateRange(newValue[0].valueOf(), newValue[1].valueOf()));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Start-date"
        endText="End-date"
        value={value}
        minDate={new Date(parseInt(minDate))}
        maxDate={new Date(parseInt(maxDate))}
        onChange={(newValue) => handleChange(newValue)}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Typography className="calendar-typo"> To </Typography>
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
