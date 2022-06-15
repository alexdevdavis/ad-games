import axios from "axios";

const adGamesApi = axios.create({
  baseURL: "https://ad-games-api.herokuapp.com/api",
});

export const getReviews = (category_slug) => {
  return adGamesApi
    .get(`/reviews${category_slug ? `?category=${category_slug}` : ""}`)
    .then((res) => {
      return res.data;
    });
};

export const getReviewById = (review_id) => {
  return adGamesApi.get(`reviews/${review_id}`).then((res) => {
    return res.data;
  });
};

export const getCategories = () => {
  return adGamesApi.get("/categories").then((res) => {
    return res.data;
  });
};
