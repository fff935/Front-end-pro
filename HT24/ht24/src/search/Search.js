import React from "react";
import "./search.css";

export function Search() {
  return (

      <div className="container">
        <div className="search link">https//swapi.dev/api/</div>
        <input className="search searchBar" placeholder="people/1"></input>
        <button className="search">Get info</button>
      </div>
   
  );
}
