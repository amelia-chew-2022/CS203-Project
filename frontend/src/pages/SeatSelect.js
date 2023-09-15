import React, { useState } from "react";
import NavBar from "../components/navigation/NavBar";
import ProgressBar from "../components/seatselect/StepperComponent";
import FieldsRow from "../components/form/FieldsRow";
import vibes from "../assets/vibes.png"; // with import
import Dropdown from "../components/seatselect/DropDown";
import ButtonGrid from "../components/seatselect/ButtonGrid";

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

//Progress bar
const steps = ["Seat Selection", "Payment Details", "Order Summary"];

function SeatSelect() {
  return (
    <>
      <NavBar></NavBar>
      <FieldsRow />
      <ProgressBar steps={steps} />

      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Image on the left */}
        <div style={{ marginRight: "20px" }}>
          <img src={vibes} alt="Your Image" width="350" height="150" />
        </div>

        {/* Text box and dropdown to the right */}
        <div>
          {/* Text box */}
          <p style={{ fontSize: "40px" }}>
            <b>Vibes</b>
          </p>

          {/* Dropdown box */}
          <Dropdown></Dropdown>
        </div>
      </div>
      {/*Seat Select component*/}
      <div className="SeatSelect-Component">

        <ButtonGrid></ButtonGrid>
      </div>
    </>
  );
}

export default SeatSelect;
