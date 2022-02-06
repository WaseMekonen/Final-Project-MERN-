import React from "react";
import styles from "./RoundTripTickets.module.css";

// import { Redirect } from "react-router-dom";
// import { useState } from "react";

const RoundTripTickets = ({
  roundTripTickests,
  oneWayTickests,
  setBookingResult,
  search,
}) => {
  const passTicketToBooking = (oneWayTicketId, roundTripTicketId) => {
    const roundTripTicketForBooking = [];
    const foundOneWayTicket = oneWayTickests.find((ticket) => {
      return oneWayTicketId === ticket.id;
    });
    const foundRoundTripTicket = roundTripTickests.find((ticket) => {
      return roundTripTicketId === ticket.id;
    });
    roundTripTicketForBooking.push(foundOneWayTicket);
    roundTripTicketForBooking.push(foundRoundTripTicket);
    setBookingResult(roundTripTicketForBooking);
  };

  const roundTripElements = oneWayTickests
    ? oneWayTickests.map((ticket, i) => {
        const secondTicket = Object.values(roundTripTickests);
        return (
          <>
            <div className={styles.roudTripticket} key={ticket.id}>
              <div className={styles.roundTicketTripDataContainer}>
                <section className={styles.roundTicketTripflightDetails}>
                  <div className={styles.roundTicketTripInnerContainer}>
                    <div className="flight num">
                      <h4>{ticket.flightNumber}</h4>
                    </div>
                    <div className="depArvTime">
                      <h4>
                        {ticket.departure} - {ticket.arrival}
                      </h4>
                    </div>
                    <div className="fromTo">
                      <h4>{ticket.origin}</h4>
                      <h4>{ticket.destination}</h4>
                    </div>
                    <div className="total">
                      <h4>{ticket.terminal}</h4>
                    </div>
                  </div>
                </section>
                {secondTicket && (
                  <section
                    className={styles.roundTicketTripflightDetails}
                    key={secondTicket[i].id}
                  >
                    <div className={styles.roundTicketTripInnerContainer}>
                      <div className="flightnum">
                        <h4>{secondTicket[i].flightNumber}</h4>
                      </div>
                      <div className="depArvTime">
                        <h4>
                          {secondTicket[i].departure} -{" "}
                          {secondTicket[i].arrival}
                        </h4>
                      </div>
                      <div className="fromTo">
                        <h4>{secondTicket[i].origin}</h4>
                        <h4>{secondTicket[i].destination}</h4>
                      </div>
                      <div className="total">
                        <h4>{secondTicket[i].terminal}</h4>
                        <h4>06h 00m</h4>
                      </div>
                    </div>
                  </section>
                )}
              </div>
              <section className={styles.roundTicketTripFlightPrice}>
                <div className="icon">
                  <span></span>
                </div>
                <div className="price">
                  <span>{"$" + ticket.price * 3}</span>
                </div>
                <div className="button">
                  <button
                    onClick={() => {
                      passTicketToBooking(ticket.id, secondTicket[i].id);
                      
                    }}
                  >
                    Book
                  </button>
                </div>
              </section>
            </div>
          </>
        );
      })
    : null;

  return <>{roundTripElements}</>;
};

export default RoundTripTickets;
