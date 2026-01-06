const url =
  "https://student-api-proxy.onrender.com/api/wordsapiv1.p.rapidapi.com/words/fish";
const options = {
  method: "GET",
  headers: {
    "X-API-Key":
      "c355fe65e937daae839c9c7858abc50a20f4109f72d7902de404b853c6c7cdfc",
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
