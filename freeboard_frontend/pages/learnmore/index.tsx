import axios from "axios";
import { useEffect, useState } from "react";

export default function LearnMorePage() {
  const [dogUrl, setDogUrl] = useState("");
  //   const [dogInfo, setDogInfo] = useState("");
  const [serviceDog, setServiceDog] = useState("");

  useEffect(() => {
    async function fetchDog() {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    }
    fetchDog();
  }, []);

  //   useEffect(() => {
  //     async function fetchDogInfo() {
  //       const result = await axios.get(
  //         "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all"
  //       );
  //       console.log(result);
  //     }
  //     fetchDogInfo();
  //   }, []);

  //   useEffect(() => {
  //     async function fetchServiceDog() {
  //       const result = axios.get(
  //         "https://thecatapi.com/v1/images?api_key=db136ebe-6869-4c1c-b7cd-cb8b99138ce9"
  //       );
  //       setServiceDog(result);
  //     }
  //     fetchServiceDog();
  //   }, []);

  useEffect(() => {
    async function DogBreed() {
      const result = await axios.get(
        "https://api.thedogapi.com/v1/images/search"
      );
      setServiceDog(result.data[0].url);
      console.log(result);
    }
    DogBreed();
  }, []);

  return (
    <>
      <div>강아지!</div>
      <div>
        <img src={dogUrl} width={450} height={310} />
      </div>
      <div>
        <img src={serviceDog} width={450} height={310} />
      </div>
      <div>멍멍이!</div>
    </>
  );
}
