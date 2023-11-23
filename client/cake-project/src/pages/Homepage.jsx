import "../style/Homepage.css";
import { useEffect, useState } from "react";
const Homepage = () => {
  const texts = [
    "Skinny People Are Easier To Kidnap.Stay Safe, EAT CAKe",
    "Cake Is Not a Food, It’s a Way Of Life",
    "SomeTimes You Just Need Cake",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [texts.length]);
  return (
    <div className="home">
      <p>{texts[currentIndex]}</p>
    </div>
  );
};

export default Homepage;
