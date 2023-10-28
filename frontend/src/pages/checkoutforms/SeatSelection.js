import React, { useState } from "react";
import vibes from "../../assets/vibes.png";
import Dropdown from "../../components/seatselect/DropDown";
import ButtonGrid from "../../components/seatselect/ButtonGrid";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
function SeatSelect() {
  const [displayText, setGridTable] = useState(""); // State for the text to be displayed

  const [clickCount, setClickCount] = useState(""); // State for the text to be displayed
  const handleButtonClick = (data) => {
    setClickCount(data.clickCount);
    setGridTable(data.gridTable);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Image on the left */}
        <div style={{ marginRight: "20px" }}>
          <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                margin: "1rem 0",
            }}
          >
            <img src={vibes} alt="img" width="flex" height="110" />
          </div>
        </div>

        {/* Text box and dropdown to the right */}
        <div>
          {/* Text box */}
          <p>
            <Typography variant="h4">
              <b>Vibes</b>
            </Typography>
          </p>

          {/* Dropdown box */}
          <p>
            <div>
              <Dropdown />
            </div>
          </p>
        </div>
      </div>

      <div
        className="divider"
        style={{
          width: "100%",
          backgroundColor: "#5522CC", // Background color (gold)
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          margin: "20px 0",
          display: "flex",
          alignItems: "center",
          height: "40px", // Height of the rectangular background
          borderRadius: "4px", // Rounded corners for the rectangle
        }}
      >
        <Container>
          <p
            style={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#FFF",
              textAlign: "center",
            }}
          >
            Choose Your Seat
          </p>
        </Container>
      </div>

      {/*Seat Select component*/}
      <div
        className="SeatSelect-Component"
        style={{
          backgroundColor: "#222222",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "10vh", // Use minHeight to cover the entire viewport height
          flexDirection: "column",
        }}
      >
        <div
          className="Stage"
          style={{
            backgroundColor: "#fff",
            height: "100px",
            width: "600px",
            margin: "5px 0",
            transform: "rotateX(-30deg) scale(1.1)",
            boxShadow: "0 3px 10px rgba(255, 255, 255, 0.75)",
            display: "flex", // Use Flexbox
            alignItems: "center", // Center vertically
            justifyContent: "center", // Center horizontally
            borderRadius: "0 0 50% 50%", // This creates a semi-circle
          }}
        >
          <Typography variant="h4">STAGE</Typography>
        </div>

        <ButtonGrid
          onButtonClick={handleButtonClick}
          style={{ marginBottom: "20px" }}
        />
        {clickCount > 0 && (
          <div
            style={{
              backgroundColor: "lightgray",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50px",
              fontSize: "18px", // Set the font size
              fontWeight: "bold", // Set the font weight to bold
            }}
          >
            You selected &nbsp; <b>{clickCount} </b>&nbsp;<p>tickets</p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div
        className="legend"
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#626262",
              marginRight: "5px",
            }}
          ></div>
          <span>Available</span>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#222222",
              marginRight: "5px",
            }}
          ></div>
          <span>Occupied</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#7bc47f",
              marginRight: "5px",
            }}
          ></div>
          <span>Selected</span>
        </div>
      </div>

      {/*Cat Prices not sure if we including this */}
      <div className="Cat-Price">

        <Container>
          <div>
            <p>
              <Typography variant="h5" fontWeight="bold">
                Additional Information
              </Typography>
              <li>Seat plan is not drawn to scale</li>
              {/* <li>Colour indicates price category</li> */}
              <li>Ticket prices exclude booking fees</li>
              <li>Seating layout subject to change</li>
            </p>
          </div>
        </Container>
        <Container>
          <div className="Price-table">
            {displayText && (
              <div>
                <Typography variant="h5" fontWeight="bold">
                  Ticket Price
                </Typography>
                <p>{displayText}</p>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}

export default SeatSelect;
