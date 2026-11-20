import { useEffect, useState } from "react";

// Current time in Suriname. Starts as a placeholder so the server render and
// the first client render match.
function useLocalTime() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const format = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "America/Paramaribo",
        }).format(new Date())
      );
    format();
    const id = setInterval(format, 15_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default useLocalTime;
