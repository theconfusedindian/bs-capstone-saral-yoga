// import of dependencies
import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

// import of styling
import "./Booking.scss";

export default function ResponsiveDatePickers() {
  const nav = useNavigate();
  // handle change
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // Cancel button func
  const CancelButton = (e) => {
    e.preventDefault();
    nav("/");
  };

  // confirm button
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("AM I WORKING");
  };

  const [value, setValue] = React.useState(dayjs("2022-04-07"));

  return (
    <div className="book">
      <h1 className="book__title">Book Now</h1>

      {/* Date & time pickers */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={4}>
          {/* responsive date picker */}
          <DatePicker
            className="book__mobile"
            disableFuture
            label="Pick a date"
            openTo="day"
            views={["year", "month", "day"]}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          {/* <TimePicker
            label="Pick a time slot"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          /> */}
        </Stack>
      </LocalizationProvider>

      {/* buttons */}
      <div className="book__button">
        <button className="book__button--cancel" onClick={CancelButton}>
          <h3>Cancel</h3>
        </button>
        <button type="submit" className="book__button--confirm">
          <h3>Confirm</h3>
        </button>
      </div>
    </div>
  );
}

// {
//   /* mobile date picker */
// }
// {
//   /* <MobileDatePicker
// className="book__mobile"
// label="For mobile"
// value={value}
// onChange={(newValue) => {
//   setValue(newValue);
// }}
// renderInput={(params) => <TextField {...params} />}
// /> */
// }
// {
//   /* <DesktopDatePicker
// label="For desktop"
// value={value}
// minDate={dayjs("2017-01-01")}
// onChange={(newValue) => {
//   setValue(newValue);
// }}
// renderInput={(params) => <TextField {...params} />}
// /> */
// }
