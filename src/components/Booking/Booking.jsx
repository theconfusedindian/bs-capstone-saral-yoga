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
import axios from "axios";

export default function ResponsiveDatePickers() {
  const API_URL = "http://localhost:3001";
  const nav = useNavigate();
  // timeslot
  const [timeslot, setTimeslot] = useState("");

  const handleTimeslot = (e) => {
    setTimeslot(e.target.value);
  };

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
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("AM I WORKING");
    const booking = {
      date: value,
      time_slot: timeslot,
    };
    axios.post(`${API_URL}/bookings`, booking);
    console.log(booking);
  };

  const [value, setValue] = React.useState(dayjs());

  return (
    <div className="book">
      <h3 className="book__title">Book Now</h3>

      {/* Date & time pickers */}
      <form onSubmit={handleOnSubmit}>
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
        {/* select timeslot */}
        <h2 className="book__time--title">Pick a time</h2>
        <div className="book__time">
          <div className="book__time--slot">
            <input
              type="radio"
              name="timeSlot"
              onChange={handleTimeslot}
              value="6.00AM - 6.50AM"
            />
            6.00AM - 6.50AM
          </div>
          <div className="book__time--slot">
            <input
              type="radio"
              name="timeSlot"
              onChange={handleTimeslot}
              value="7.00AM - 7.50AM"
            />
            7.00AM - 7.50AM
          </div>
          <div className="book__time--slot">
            <input
              type="radio"
              name="timeSlot"
              onChange={handleTimeslot}
              value="8.00AM - 8.50AM"
            />
            8.00AM - 8.50AM
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
      </form>
    </div>
  );
}
