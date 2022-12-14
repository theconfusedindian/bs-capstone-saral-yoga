// import of dependencies
import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

  const [value, setValue] = React.useState(dayjs());

  return (
    <div className="book">
      <h2 className="book__title">Book Now</h2>

      {/* Date & time pickers */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={4}>
          {/* responsive date picker */}
          <DatePicker
            className="book__mobile"
            disablePast
            // label="Pick a date"
            openTo="day"
            views={["year", "month", "day"]}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
      <h2 className="book__time--title">Pick a time</h2>
      <div className="book__time">
        <div className="book__time--slot">
          <input type="radio" name="timeSlot"></input>
          <label htmlFor="input">6.00AM - 6.50AM</label>
        </div>
        <div className="book__time--slot">
          <input type="radio" name="timeSlot"></input>
          <label htmlFor="">7.00AM - 7.50AM</label>
        </div>
        <div className="book__time--slot">
          <input type="radio" name="timeSlot"></input>
          <label htmlFor="">8.00AM - 8.50AM</label>
        </div>
      </div>

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
