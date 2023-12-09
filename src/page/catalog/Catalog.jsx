import { useEffect, useState } from "react";
import { CarSelect } from "../../components/car-select/CarSelect";
import {
  ButtonForm,
  ContainerForm,
  Form,
  InputTo,
  InputFrom,
  Lable,
  Select,
  Main,
} from "./Catalog.styled";
import { FetchCars } from "../../components/api-request/car-data-base";

const Catalog = () => {
  const [selectedCar, setSelectedCar] = useState("");
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const result = await FetchCars();
        setImages((prevState) => [...prevState, ...result]);
      } catch (error) {
        throw new Error();
      }
    };
    fetchCars();
  }, []);
  const handleCarSelect = () => {
    setSelectedCar(selectedCar);
  };
  return (
    <Main>
      <Form>
        <CarSelect onSelectCar={handleCarSelect} />
        <ContainerForm>
          <Lable for="price">Price/ 1 hour:</Lable>
          <Select id="price" name="price">
            <option value="" disabled selected hidden>
              To $
            </option>
            <option value="usa">10</option>
            <option value="canada">20</option>
            <option value="uk">30</option>
          </Select>
        </ContainerForm>
        <ContainerForm>
          <Lable for="mileageFrom">Сar mileage / km</Lable>
          <InputFrom
            type="text"
            id="mileageFrom"
            name="mileageFrom"
            placeholder="From"
          ></InputFrom>
        </ContainerForm>
        <div>
          <label for="mileageTo"></label>
          <InputTo
            type="text"
            id="mileageTo"
            name="mileageTo"
            placeholder="To"
          ></InputTo>
        </div>
        <ButtonForm type="submit">Search</ButtonForm>
      </Form>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img src={image.img} alt={image.make} />
          </li>
        ))}
      </ul>
    </Main>
  );
};

export default Catalog;
