import React from "react";

export const DisplayBoard = ({ numberOfMovies, getAllMovies }) => {
  return (
    <div style={{ backgroundColor: "#4bcc5e", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "10px", border: "3px solid rgba(0, 0, 0, 0.2)" }} className="display-board">
      <h2 className="display-title" style={{ color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Movies Created</h2>
      <div className="stroke linear-hstripes rainbow-text">{numberOfMovies}</div>
      <div className="btn">
        <button
          type="button"
          onClick={(e) => getAllMovies()}
          className="btn btn-warning"
        >
          Get all Movies
        </button>
      </div>
    </div>
  );
};
