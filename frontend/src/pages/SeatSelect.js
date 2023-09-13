import React, { useState } from "react";
import NavBar from "../components/navigation/NavBar";
import ProgressBar from "../components/progressbar/progressbar";
import vibes from "../assets/vibes.png";
import "./SeatSelect.css";
import { Resizable } from "re-resizable";
import BasicTable from "../components/BasicTable"


function SeatSelect() {
  const [state, setState] = useState({ width: 320, height: 200 });
  return (
    <>
      <NavBar></NavBar>
      <ProgressBar></ProgressBar>
     
      <div class="date-selection">
        <div class="side">
          <img alt="vibes" width="100%" src={vibes} />
        </div>
        <div class="side side-content-center">
          <div>
            <p style={{ fontSize: 20 }}>Vibes</p>
            <div class="movie-container">
              <label>Pick a time:</label>
              <select id="movie">
                <option value="10">today</option>
                <option value="12">tmr</option>
                <option value="8">yesterday</option>
                <option value="9">NOW</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="Section">
        <p>Choose your section</p>
      </div>

      <div className="seat-selection">
        <ul class="showcase">
          <li>
            <div class="seat"></div>
            <small>N/A</small>
          </li>

          <li>
            <div class="seat selected"></div>
            <small>Selected</small>
          </li>

          <li>
            <div class="seat occupied"></div>
            <small>Occupied</small>
          </li>
        </ul>

        <div class="container">
          <div class="screen"></div>
          <div class="row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
          </div>
          <div class="row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
          </div>

          <div class="row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
          </div>

          <div class="row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
          </div>

          <div class="row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
          </div>

          <div class="row">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
            <div class="seat occupied"></div>
            <div class="seat"></div>
          </div>

          <p className="text">
            You have selected <span id="count">0</span> seats for a price of $
            <span id="count">0</span>{" "}
          </p>
        </div>
      </div>

      <div className="extra-info">
        <li className="cat-prices">
          <ul>CAT 1: $55</ul>
          <ul>CAT 2: $46</ul>
          <ul>CAT 3: $32</ul>
        </li>
        <li className="side-note">
          <ul>- Seat plan is not drawn to scale</ul>
          <ul>- Colour indicates price category</ul>
          <ul>- Ticket prices exclude booking fees</ul>
          <ul>- Seating layout subject to change</ul>
        </li>
      </div>

      <div className="checkout">
        <div className="Section">
          <p>Choose your Tickets</p>
        </div>
        <div className="selection">
          <p>The section that you have selected is CAT 2 - GRAND CIRCLE</p>
        </div>
     <BasicTable></BasicTable>
      </div>
    </>
  );
}

export default SeatSelect;
