import React, { useEffect } from "react";

const Homepage = () => {


  //print hello after page load, automatic
  useEffect(() => {
    console.log("hello!!")
  })

  return (<div>Homepage</div>);
};

export default Homepage;
