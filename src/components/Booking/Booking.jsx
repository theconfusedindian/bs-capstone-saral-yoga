// import of dependencies
import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

// import of styling
import "./Booking.scss";

export default function ResponsiveDatePickers() {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));

  return (
    <div className="book">
      <h1 className="book__title">Book Now</h1>
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
        </Stack>
      </LocalizationProvider>
    </div>
  );
}

{
  /* mobile date picker */
}
{
  /* <MobileDatePicker
className="book__mobile"
label="For mobile"
value={value}
onChange={(newValue) => {
  setValue(newValue);
}}
renderInput={(params) => <TextField {...params} />}
/> */
}
{
  /* <DesktopDatePicker
label="For desktop"
value={value}
minDate={dayjs("2017-01-01")}
onChange={(newValue) => {
  setValue(newValue);
}}
renderInput={(params) => <TextField {...params} />}
/> */
}
