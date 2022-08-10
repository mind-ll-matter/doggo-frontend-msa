import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const createBreedList = (data: any) => {
  const allBreeds: string[] = [];

  return allBreeds;
}

type DoggoPayload = {
  message: string,
  status: string,
}

const Dashboard = () => {
  const [breedList, setBreedList] = useState([]);
  const [chosenDoggo, setChosenDoggo] = useState<DoggoPayload | null>(null);

  const DOGGO_BASE_URL = "https://dog.ceo/api/";

  useEffect(() => {
    axios.get(DOGGO_BASE_URL + "breeds/list/all").then((res) => {
      console.log(res.data);
      console.log(createBreedList(res.data.message))
      // setChosenDoggo(res.data);
    });
  }, []);

  const handleOnChange = (event: any) => {
    console.log(event.target.value);
    axios.get(DOGGO_BASE_URL + "breed/" + event.target.value + "/images/random").then((res) => {
      console.log(res.data);
      setChosenDoggo(res.data);
    });
  }

  return (
    <div className="d-flex p-4 flex-column align-items-center">
      <h1 className="font-weight-bold">
        Search a Doggo
      </h1>
      <div className='m-2' style={{ width:"50%" }}>
        <Form.Control as="select" size="lg" aria-label="Default select example" onChange={handleOnChange}>
          <option>Pick a breed!</option>
          <option value="affenpinscher">affenpinscher</option>
          <option value="akita">akita</option>
          <option value="briard">briard</option>
        </Form.Control>
      </div>

      {chosenDoggo &&
      <div className="d-flex flex-column align-items-center p-3">
        <Image src={chosenDoggo.message} roundedCircle={true} fluid={true}/>
        <h3 className="p-5">
          This is DOGGO
        </h3>
      </div>
      }
    </div>
  )
}

export default Dashboard;