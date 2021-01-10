import React from "react";
import Header from "../layouts/Header.jsx";


const NotFoundPage = () => {
  return (
    <div>
      <Header>
      </Header>
      <div style={{textAlign:"Center", color: "white"}}>
      <h2> Incorrect user login!</h2>
      </div>
    </div>
  )
}

export default NotFoundPage;