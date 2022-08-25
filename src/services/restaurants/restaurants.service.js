import { mocks, mockImages } from "./mock";
// import { camelize } from "camelize";

export const restaurantService = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("No Mock");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results }) => {
  const mockResults = results.map((item) => {
    item.photos = item.photos.map(
      (_) => mockImages[Math.ceil(Math.random() * mockImages.length - 1)]
    );
    return {
      ...item,
      isOpenNow: item.opening_hours && item.opening_hours.open_now,
      isClosedTemporarily: item.business_status === "CLOSED_TEMPORARILY",
      address: item.vicinity,
    };
  });
  return mockResults;
};
