// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

// export default function SeatSelection() {
//   return (
//     <React.Fragment>
//       <Typography variant="h6" gutterBottom>
//         Choose your seats
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="firstName"
//             name="firstName"
//             label="First name"
//             fullWidth
//             autoComplete="given-name"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="lastName"
//             name="lastName"
//             label="Last name"
//             fullWidth
//             autoComplete="family-name"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             required
//             id="address1"
//             name="address1"
//             label="Address line 1"
//             fullWidth
//             autoComplete="shipping address-line1"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             id="address2"
//             name="address2"
//             label="Address line 2"
//             fullWidth
//             autoComplete="shipping address-line2"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="city"
//             name="city"
//             label="City"
//             fullWidth
//             autoComplete="shipping address-level2"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             id="state"
//             name="state"
//             label="State/Province/Region"
//             fullWidth
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="zip"
//             name="zip"
//             label="Zip / Postal code"
//             fullWidth
//             autoComplete="shipping postal-code"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="country"
//             name="country"
//             label="Country"
//             fullWidth
//             autoComplete="shipping country"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControlLabel
//             control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
//             label="Use this address for payment details"
//           />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }

import React, { useState } from "react";
// import NavBar from "../components/navigation/NavBar";
// import ProgressBar from "../components/seatselect/StepperComponent";
// import FieldsRow from "../components/form/FieldsRow";
import vibes from "../../assets/vibes.png"; // with import
import Dropdown from "../../components/seatselect/DropDown";
import ButtonGrid from "../../components/seatselect/ButtonGrid";

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box
} from "@mui/material";

//Progress bar
// const steps = ["Seat Selection", "Confirmation", "Payment"];

function SeatSelect() {
  return (
    <>
      {/* <NavBar></NavBar>
      <FieldsRow />
      <ProgressBar steps={steps} /> */}

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
      <Box>
        <div className="SeatSelect-Component">

            <ButtonGrid></ButtonGrid>
        </div>
      </Box>
    </>
  );
}

export default SeatSelect;
