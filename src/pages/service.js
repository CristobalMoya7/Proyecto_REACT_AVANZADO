import {
  client,
  setAuthorizationHeader,
  removeAuthorizationHeader,
} from "../api/client";
import storage from "../utils/storage";

export const login = (credentials, persist = true) => {
  return client.post("api/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    if (persist) {
      storage.set("auth", accessToken);
    }
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove("auth");
  });
};

export const getAdverts = () => {
  return client.get("/api/v1/adverts");
};

export const getUniqueAdvert = (advertId) => {
  return client.get(`/api/v1/adverts/${advertId}`);
};

export const newAd = (advert) => {
  const dataNewAdd = {
    name: advert.name,
    sale: advert.sale,
    price: advert.price,
    tags: [advert.tags],
    photo: advert.photo || null,
  };
  return client.post("/api/v1/adverts", dataNewAdd, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const tagsAdvert = () => {
  return client.get("/api/v1/adverts/tags");
};

export const deleteAd = (advertId) => {
  return client.delete(`/api/v1/adverts/${advertId}`);
};
