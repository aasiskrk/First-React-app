import React , {useEffect} from "react";
import { testApi2 } from "../../apis/Api2";

const Loginpage = () => {
  //print hello after page load, automatic
  useEffect(() => {
    console.log("Print")

    testApi2().then((res) => {
      console.log(res)
    })
  })

  return <div>Loginpage</div>;
};

export default Loginpage;
