import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./styles.css";

export default function SelectDays({ days, handleDaysChange, noPTag }) {
  return (
    <div className="select-days">
      {!noPTag && <p>Price Change In</p>}

      <p className="select-p">Days:</p>

      <Select
        sx={{
          width:"auto",
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
          "& .MuiSelect-select": {
            fontSize: {
              xs: "60%",
              sm: "70%",
              md: "70%",
              lg: "90%",
              xl: "100%"
      
            }
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Days"
        onChange={handleDaysChange}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}
