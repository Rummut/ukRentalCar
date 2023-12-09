import axios from "axios";

export const FetchCars = async () => {
  const response = await axios.get(
    `https://6574d9a1b2fbb8f6509cb88b.mockapi.io/Adverts`
  );
  return response.data;
};
FetchCars();
