import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import GridTable from "./BasicTable";

export let newClickCount = 0;

function ButtonGrid({ onButtonClick }) {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "10vh",
    padding: "0 20px",
    width: "800px", // Set a fixed width for the grid container
  };

  const buttonStyle = {
    width: "60px",
    height: "60px",
    margin: "5px",
    borderRadius: "20px 20px 0 0",
    borderBottom: "none",
    backgroundColor: "#626262",
    border: "1px solid #ccc",
  };

  const selectedButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#7bc47f",
  };

  // Create a 2D array to represent the button grid
  const [buttons, setButtons] = useState(
    Array.from({ length: 6 }, () => Array(8).fill(false))
  );

  const [displayText, setDisplayText] = useState("");
  const [clickCount, setClickCount] = useState(0);

  // Define a 2D array to indicate which buttons should be initially disabled
  const initialDisabledButtons = [
    [false, false, true, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, true, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
  ];

  const [disabledButtons, setDisabledButtons] = useState(
    initialDisabledButtons
  );

  const handleButtonClick = (row, col) => {
    const updatedButtons = [...buttons];
    updatedButtons[row][col] = !updatedButtons[row][col];
    setButtons(updatedButtons);

    // Update the click count
    newClickCount = updatedButtons
      .flat()
      .filter((isButtonSelected) => isButtonSelected).length;
    setClickCount(newClickCount);

    if (newClickCount > 0) {
      onButtonClick({ clickCount: newClickCount, gridTable: <GridTable /> });
    } else {
      onButtonClick({ clickCount: 0, gridTable: "" });
    }
  };

  return (
    <div style={containerStyle}>
      <Grid container spacing={0} justifyContent="center">
        <Grid item>
          <Grid container spacing={0}>
            {Array.from({ length: 6 }).map((_, rowIndex) => (
              <Grid container item key={rowIndex} justifyContent="center">
                <Grid item xs={2}>
                  &nbsp;
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item>
          <Grid container spacing={0}>
            {buttons.map((row, rowIndex) => (
              <Grid container item key={rowIndex} justifyContent="center">
                {row.map((isButtonSelected, colIndex) => (
                  <Grid item key={colIndex}>
                    <Button
                      variant="contained"
                      sx={
                        isButtonSelected
                          ? selectedButtonStyle
                          : disabledButtons[rowIndex][colIndex]
                          ? { ...buttonStyle, backgroundColor: "pink" }
                          : buttonStyle
                      }
            
                      onClick={() => handleButtonClick(rowIndex, colIndex)}
                      disabled={disabledButtons[rowIndex][colIndex]}
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
          <Grid container spacing={0}>
            {Array.from({ length: 6 }).map((_, rowIndex) => (
              <Grid container item key={rowIndex} justifyContent="center">
                <Grid item xs={2}>
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
