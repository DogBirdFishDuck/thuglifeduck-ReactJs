import { useEffect, useState } from "react";
export default function Play1 () {

  const [num1, setNum1] = useState(0);

  useEffect(() => {
    console.log("going in, the interval");
  }, []);

  let setTimer0;
  if (!setTimer0) {
    setTimer0 = window.setInterval(
      () => {
        console.log("tick");
        // setNum1(v => v + 1);
      },
      3000,
      0
    );
  }
  console.log("torender", num1);
  return <div>{num1}</div>;
}