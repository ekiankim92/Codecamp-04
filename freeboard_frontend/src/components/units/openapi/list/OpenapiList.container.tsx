import axios from "axios";
import { useEffect, useState } from "react";
import OpenAPIPageUI from "./OpenapiList.presenter";

export default function OpenAPIPage() {
  const [dogUrl, setDogUrl] = useState<string[]>([]);
  const [serviceDog, setServiceDog] = useState<string[]>([]);

  useEffect(() => {
    async function fetchDog() {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    }
    fetchDog();
  }, []);

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

  const [doggies, setDoggies] = useState<string[]>([]);
  // const [breeds, setBreeds] = useState<string>([]);

  useEffect(() => {
    function FoodFacts() {
      new Array(10).fill(10).map(async (_) => {
        const result = await axios.get(
          "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
        );
        setDoggies(result.data[0].url);
        // setBreeds(result.data.breeds.bred_for);
        // console.log(result.data.breeds.bred_for);
        // console.log(result.data[0].breeds[0].bred_for);
      });
    }
    FoodFacts();
  }, []);

  return (
    <OpenAPIPageUI
      doggies={doggies}
      // breeds={breeds}
      dogUrl={dogUrl}
      serviceDog={serviceDog}
    />
  );
}
