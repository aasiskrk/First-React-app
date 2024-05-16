import React, { useEffect } from "react";
import { testApi } from "../../apis/Api";

const Homepage = () => {


  //print hello after page load, automatic
  useEffect(() => {
    console.log("hello!!")

    testApi().then((res) => {
      console.log(res)
    })
  })


  return (<div>Homepage</div>);
};

export default Homepage;
