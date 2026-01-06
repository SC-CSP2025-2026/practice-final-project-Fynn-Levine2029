const url =
  "https://student-api-proxy.onrender.com/api/wordsapiv1.p.rapidapi.com/random/word";
const options = {
  method: "GET",
  headers: {
    "X-API-Key":
      "e76d0dc39f73ebfee7899fdbdc6410b3c1078ae519dd47b4d3ae33b2900b7d8d",
  },
};

fetch(url, options)
  .then((response) =>
    response.json().then((result) => {
      console.log(result.data); // Your API data
      console.log(`Cost: $${result.meta.cost}`);
      console.log(`Remaining: $${result.meta.remaining_budget}`);
    })
  )
  .catch((error) => {
    console.log(error);
  });
