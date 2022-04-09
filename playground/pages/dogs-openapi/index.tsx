import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  border: 1px solid black;
`;

const DogOpenAPIPage = () => {
  const [dogImg, setDogImg] = useState([]);

  useEffect(() => {
    const DogImg = async () => {
      new Array(10).fill(1).forEach(async (_) => {
        const result = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        // .then((response) => console.log("response:", response))
        // .catch((error) => console.log("error:", error));
        setDogImg((prev) => [...prev, result.data?.message]);
        console.log(result);
      });
    };
    DogImg();
  }, []);

  return (
    <Wrapper>
      <span>{dogImg}</span>
      <div>Sponsor a Dog!</div>
      <div>
        {dogImg.map((el, index) => (
          <>
            <img key={el} src={el} />
            {(index + 1) % 3 === 0 && <br />}
          </>
        ))}
      </div>
    </Wrapper>
  );
};
export default DogOpenAPIPage;
