import { useEffect, useState } from "react";

const Other = () => {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setData([7, 7, 8, 8]);
    }, 3000);
  }, []);

  return <>这是other-{data.toString()}</>;
};
export default Other;
