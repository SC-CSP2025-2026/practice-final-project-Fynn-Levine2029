// const definitionInput = document.querySelector(".definition-input");
const inputSearchWord = document.querySelector(".input-search-word");
const searchButton = document.querySelector(".btn-search-word");
const listGroup = document.querySelector(".list-group");

const searchWords = async (searchTerm) => {
  // if (!searchTerm) {
  //     alert("Please enter a word");
  //     return;
  // }

  const url = `https://student-api-proxy.onrender.com/api/wordsapiv1.p.rapidapi.com/words/${searchTerm}/definitions`;

  const options = {
    method: "GET",
    headers: {
      "X-API-Key":
        "f8d1b8d388767999535d45be00b23f41f27285d2d3a650e7d4ca63658e62f75a",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
  const words = result.data;

  //   const response = await fetch(url, options);
  //   const result = await response.json();
  //   console.log(result);
  //   const word = result.data.word;

  //   console.log(result.data.word);
  //   const listItem = `
  //               <li class="list-group-item">${word}`;
  //   listGroup.insertAdjacentHTML("beforeend", listItem);

  //   fetch(url, options)
  //     .then((response) =>
  //       response.json().then((result) => {
  //         console.log(result.data); // Your API data
  //         console.log(`Cost: $${result.meta.cost}`);
  //         console.log(`Remaining: $${result.meta.remaining_budget}`);
  //       })
  //     )
  //     .catch((error) => {
  //       console.log(error);
  //     });

  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const searchTerm = inputSearchWord.value.trim();
    searchWords(searchTerm);
  });
};

searchWords();
