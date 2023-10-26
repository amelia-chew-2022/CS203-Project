
/* const containerStyle = {
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
}; */
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";

// export selectedSeats;

function ButtonGrid({ onButtonClick }) {
  const [buttons, setButtons] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  let revertTimeout; // Declare a variable to store the timeout ID

  useEffect(() => {
    axios
      .get("http://localhost:8080/tickets")
      .then((res) => {
        const data = res.data;
        // Ensure that data is correctly structured as a 2D array with 6 rows
        const formattedData = [];
        for (let i = 0; i < 6; i++) {
          formattedData.push(data.slice(i * 6, (i + 1) * 6));
        }
        setButtons(formattedData);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdateClick = (rowIndex, colIndex) => {
    const updatedButtons = [...buttons]; // Create a copy of the buttons array
    const updatedSeat = updatedButtons[rowIndex][colIndex];

    // Toggle the 'available' property for the selected seat
    updatedSeat.available = !updatedSeat.available;


    // Send a PUT request to update the seat's 'available' property in the database
    axios
      .put(
        `http://localhost:8080/tickets/updateAvailability/${updatedSeat.id}`,
        updatedSeat.available,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        // If the update is successful, update the state with the new button data
        setButtons(updatedButtons);

        // Set a timer to revert the update after 5 seconds
        revertTimeout = setTimeout(() => {
          updatedSeat.available = !updatedSeat.available;
          axios
            .put(
              `http://localhost:8080/tickets/updateAvailability/${updatedSeat.id}`,
              updatedSeat.available,
              {
                headers: { "Content-Type": "application/json" },
              }
            )
            .then((res) => {
              setButtons(updatedButtons);
            })
            .catch((err) => console.log(err));
        }, 10000); // 5000 milliseconds = 5 seconds
      })
      .catch((err) => console.log(err));
  };
  const updateSelectedSeats = () => {
    // Loop through selected seats and trigger handleUpdateClick for each
    selectedSeats.forEach((seat) => {
      handleUpdateClick(seat.row, seat.col);
    });
  };

  const handleButtonClick = (rowIndex, colIndex) => {
    toggleSeatSelection(rowIndex, colIndex);
  };

  const isSeatSelected = (rowIndex, colIndex) => {
    return selectedSeats.some(
      (seat) => seat.row === rowIndex && seat.col === colIndex
    );
  };

  const toggleSeatSelection = (rowIndex, colIndex) => {
    if (isSeatSelected(rowIndex, colIndex)) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter(
          (seat) => seat.row !== rowIndex || seat.col !== colIndex
        )
      );
    } else {
      setSelectedSeats((prevSelectedSeats) => [
        ...prevSelectedSeats,
        { row: rowIndex, col: colIndex },
      ]);
    }
  };

  return (
    <div>
      <Grid container>
        {buttons.map((row, rowIndex) => (
          <Grid container item key={rowIndex} justifyContent="center">
            {row.map((seat, colIndex) => (
              <Grid item key={colIndex} style={{ margin: "5px" }}>
                <Button
                  variant="contained"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: isSeatSelected(rowIndex, colIndex)
                      ? "red" // Change the background color when selected
                      : "green", // Default background color
                  }}
                  onClick={() => handleButtonClick(rowIndex, colIndex)}
                  disabled={!seat.available} // Adjust based on your logic
                >
                  {seat.seat_number}
                </Button>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
      <div>
        <h3>Selected Seats:</h3>
        <ul>
          {selectedSeats.map((seat, index) => (
            <li key={index}>
              Row: {seat.row + 1}, Col: {seat.col + 1}
            </li>
          ))}
        </ul>
      </div>

      {/* Create a button to update the seat availability for selected seats */}
      <Button
        variant="contained"
        color="primary"
        onClick={updateSelectedSeats} // Call the updateSelectedSeats function
      >
        Update Selected Seats
      </Button>

      
    </div>
  );
}

// export {selectedSeats};
export default ButtonGrid;
