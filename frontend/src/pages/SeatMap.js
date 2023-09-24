import React, { useState } from 'react';
import './SeatMap.css';

function SeatMap() {
  // Define the initial seat data
  const [seats, setSeats] = useState([]);

  // Function to handle seat clicks
  const handleSeatClick = (row, column) => {
    // Toggle the state of the clicked seat (selected/unselected)
    const updatedSeats = [...seats];
    updatedSeats[row][column] = !updatedSeats[row][column];
    setSeats(updatedSeats);
  };

  // Render the seat map
  return (
    <div className="seat-map">
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} className="seat-row">
          {row.map((seat, columnIndex) => (
            <div
              key={columnIndex}
              className={`seat ${seat ? 'selected' : ''}`}
              onClick={() => handleSeatClick(rowIndex, columnIndex)}
            >
              {rowIndex + 1}-{columnIndex + 1}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SeatMap;
