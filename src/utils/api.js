import axios from "axios";

const adGamesApi = axios.create({
  baseURL: "https://ad-games-api.herokuapp.com/api",
});

export const getReviews = () => {
  return adGamesApi.get("/reviews").then((res) => {
    return res.data;
  });
};
