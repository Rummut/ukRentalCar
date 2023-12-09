import React, { useState, useEffect } from "react";
import makes from "./makes.json";
import {
  ContainerForm,
  Lable,
  StyledOption,
  StyledSelect,
} from "./CarSelect.styled";

export const CarSelect = ({ onSelectCar }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(makes);
  }, []);

  const handleSelectChange = (e) => {
    const selectedCar = e.target.value;
    onSelectCar(selectedCar);
  };

  return (
    <ContainerForm>
      <Lable htmlFor="carSelect">Car brand:</Lable>
      <StyledSelect id="carSelect" onChange={handleSelectChange}>
        <StyledOption value="">Enter the text</StyledOption>
        {cars.map((car, index) => (
          <option key={index} value={car}>
            {car}
          </option>
        ))}
      </StyledSelect>
    </ContainerForm>
  );
};
