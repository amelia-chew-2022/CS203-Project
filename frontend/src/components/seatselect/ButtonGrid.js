import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function ButtonGrid() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "10vh",
    padding: "0 20px",
  };

  const buttonStyle = {
    width: "40px",
    height: "40px",
    margin: "5px",
    borderRadius: "50%",
    backgroundColor: "lightgray",
    border: "1px solid #ccc",
  };

  const selectedButtonStyle = {
    ...buttonStyle,
    backgroundColor: "green", // Change the color for selected buttons
  };

  // Create a 2D array to represent the button grid
  const [buttons, setButtons] = useState(
    Array.from({ length: 6 }, () => Array(8).fill(false))
  );

  const handleButtonClick = (row, col) => {
    const updatedButtons = [...buttons];
    updatedButtons[row][col] = !updatedButtons[row][col];
    setButtons(updatedButtons);
  };

  return (
    <div style={containerStyle}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Grid container spacing={2}>
            {Array.from({ length: 6 }).map((_, rowIndex) => (
              <Grid container item key={rowIndex} justifyContent="center">
                <Grid item xs={2}>
                  {" "}
                  {/* Create a space */}
                  &nbsp;
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item>
          <Grid container spacing={2}>
            {buttons.map((row, rowIndex) => (
              <Grid container item key={rowIndex} justifyContent="center">
                {row.map((isButtonSelected, colIndex) => (
                  <Grid item key={colIndex}>
                    <Button
                      variant="contained"
                      sx={isButtonSelected ? selectedButtonStyle : buttonStyle}
                      onClick={() => handleButtonClick(rowIndex, colIndex)}
                    >
                      {String.fromCharCode(65 + rowIndex)}
                      {colIndex + 1}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item>
          <Grid container spacing={2}>
            {Array.from({ length: 6 }).map((_, rowIndex) => (
              <Grid container item key={rowIndex} justifyContent="center">
                <Grid item xs={2}>
                  {" "}
                  {/* Create a space */}
                  &nbsp;
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ButtonGrid;
