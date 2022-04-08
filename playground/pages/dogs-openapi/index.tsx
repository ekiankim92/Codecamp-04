import axios from "axios";
import { useEffect, useState } from "react";

const DogOpenAPIPage = () => {
  const [dogImg, setDogImg] = useState([]);

  useEffect(() => {
    const DogImg = async () => {
      const result = await axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((response) => console.log("response:", response))
        .catch((error) => console.log("error:", error));
      setDogImg((prev) => [...prev]);
      console.log(result);
    };
    DogImg();
  }, []);

  return (
    <>
      <span>{dogImg}</span>
      <button>Dogs</button>
    </>
  );
};
export default DogOpenAPIPage;
