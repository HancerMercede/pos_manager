import { useEffect, useState } from "react";

export const Clock = () => {
  // Here I get the current state of the timeline.
  const [date, setDate] = useState(new Date().toLocaleString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return <p>{date}</p>;
};
