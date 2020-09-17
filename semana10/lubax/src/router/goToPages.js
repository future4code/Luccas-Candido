export const goBack = (history) => {
  history.goBack();
};

export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goToTripPage = (history) => {
  history.push("/trips/list/");
};

export const goToPanelPage = (history) => {
  history.push("/panel");
};

export const goToHome = (history) => {
  history.push("/");
};

export const goToCreateTripPage = (history) => {
  history.push("/trips/create");
};

export const goToTripDetailPage = (history, id) => {
  history.push(`/trips/details/${id}`);
};

export const goToFormPage = (history, id) => {
  history.push(`/trips/list/${id}`);
};
