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
            <img src={vibes} alt="img" width="350" height="150" />
          </div>
  
          {/* Text box and dropdown to the right */}
          <div style={{ margin: "10px 0" }}>
            {/* Text box */}
            <p style={{ fontSize: "40px" }}>
              <b>Vibes</b>
            </p>
  
            {/* Dropdown box */}
            <div style={{ margin: "36px 0" }}>
              <Dropdown></Dropdown>
            </div>
          </div>
        </div>
  
        <div
          className="divider"
          style={{
            width: "100%",
            backgroundColor: "lightgrey", // Background color (gold)
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            margin: "20px 0",
            display: "flex",
  
            alignItems: "center",
            height: "40px", // Height of the rectangular background
            borderRadius: "4px", // Rounded corners for the rectangle
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Choose Your Seat
          </p>
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
            <p style={{ fontSize: "20px" }}>Stage</p>
          </div>
  
          <ButtonGrid
            onButtonClick={handleButtonClick}
            style={{ marginBottom: "20px" }}
          ></ButtonGrid>
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
  
        <div className="Cat-Price">
          <div>
            <h2>Ticket Categories and Prices</h2>
            <table>
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: "red",
                      width: "30px",
                      height: "5px",
                    }}
                  ></td>
                  <td>CAT 1</td>
                  <td>$55</td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "green",
                      width: "30px",
                      height: "5px",
                    }}
                  ></td>
                  <td>CAT 2</td>
                  <td>$46</td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "blue",
                      width: "30px",
                      height: "5px",
                    }}
                  ></td>
                  <td>CAT 3</td>
                  <td>$32</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2>Additional Information</h2>
            <ul>
              <li>Seat plan is not drawn to scale</li>
              <li>Colour indicates price category</li>
              <li>Ticket prices exclude booking fees</li>
              <li>Seating layout subject to change</li>
            </ul>
          </div>
          <div className="Price-table">
            {displayText && (
              <div>
                <h2>Ticket Price</h2>
  
                <p>{displayText}</p>

              </div>
            )}
          </div>
        </div>
      </>
    );
  }
  
  export default SeatSelect;
  