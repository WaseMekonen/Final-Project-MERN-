import React from "react";

function Booking({ bookingResult }) {
  const bookingElemments = bookingResult.map((ticket) => {
    return <h1>{ticket.flightNumber}</h1>;
  });

  return (
    <div>
      <header></header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default Booking;
