const getData = apiUrl => {
  return fetch(apiUrl)
    .then(response => response.json())
    .catch(err => console.log(err));
};

export default getData;
