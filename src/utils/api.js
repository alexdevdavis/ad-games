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

export const patchUpvote = (review_id, inc_votes) => {
  return adGamesApi
    .patch(`/reviews/${review_id}`, { inc_votes })
    .then((res) => {});
};

export const getComments = (review_id) => {
  return adGamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data;
  });
};

export const postComment = (review_id, username, body) => {
  return adGamesApi
    .post(`/reviews/${review_id}/comments`, { username, body })
    .then((res) => {
      return res.data;
    });
};
