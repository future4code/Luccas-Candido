export const goToLoginPage = (history) => {
  history.push("/");
};

export const goToSignUpPage = (history) => {
  history.push("/signup");
};

export const goToFeed = (history) => {
  history.push("/feed");
};

export const goToComments = (history, id) => {
  history.push(`/feed/${id}`);
};
