export const getAPIPath = () => {
  return `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/`;
};
