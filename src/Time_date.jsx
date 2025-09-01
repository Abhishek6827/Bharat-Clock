import { useState, useEffect } from "react";

let Time_date = () => {
  const [time, setTime] = useState(new Date());

  // हर सेकंड टाइम अपडेट करने के लिए
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p className="text-4xl font-bold tracking-wide">
      {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  );
};

export default Time_date;
