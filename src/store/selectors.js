export const getIsLogged = (state) => state.auth;
export const getListAds = (state) => state.ads.data;
console.log(getListAds());

export const getAd = (adId) => (state) => {
  const adsArray = Object.values(state.ads);
  console.log(state);
  console.log(state.ads);
  console.log(adsArray);
  const ad = adsArray.find((ad) => ad.id === adId);
  console.log(ad);
  return ad;
};

export const getUi = (state) => state.ui;
