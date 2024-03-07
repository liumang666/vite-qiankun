import { useEffect, useState } from "react";
import reactSvg from "../../assets/react.svg";

const Home = () => {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setData([1, 2, 3, 4]);
    }, 3000);
  }, []);

  return (
    <>
      这是home-{data.toString()}
      <img src={reactSvg} alt="" />
    </>
  );
};
export default Home;
