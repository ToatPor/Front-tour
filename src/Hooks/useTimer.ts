import { useEffect, useState } from "react";

function useTimer() {
  const [time, setTime] = useState<number>(1800);
  const min = Math.floor(time / 60);
  const sec = time % 60;

  useEffect(() => {
    const timer = setInterval(function () {
      setTime((val) => val - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return { min, sec };
}

export default useTimer;
