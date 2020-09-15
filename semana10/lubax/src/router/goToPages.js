export const goBack = (history) => {
  history.goBack();
};

export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goToTripPage = (history) => {
  history.push("/trips/list");
};
