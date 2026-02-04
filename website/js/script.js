// const definitionInput = document.querySelector(".definition-input");
const searchInput = document.querySelector(".input-search-word");
const searchButton = document.querySelector(".btn-search-word");
const listGroup = document.querySelector(".list-group");
const wordCardDiv = document.querySelector(".word-card");

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

  getWordAndGiveDefinition(url, options);
};

const getWordAndGiveDefinition = async (url, options) => {
  const response = await fetch(url, options);
  const result = await response.json();
  const data = getSampleSearchWordTrace();

  console.log(data);
  const words = data.definitions;

  words.forEach((word) => {
    console.log(word.definitions);
  });
};

// wordCardDiv.innerHTML = "";
// words.forEach((word) => {
//   const listItem = `
//         <li class="list-group-item">
//             ${word.words}
//         </li>
//         `;
//   wordCardDiv.insertAdjacentHTML("beforeend"), listItem;
// });

// const getDefinition = async (searchTerm) => {
//   fetch(url, options)
//     .then((response) => response.json())
//     .then((result) => {
//       const definition = result.searchWords;
//       wordCardDiv.innerHTML = "";
//       definition.forEach((wordResult) => {
//         let card = `
//             <li class="card">
//                 <h4>Word: ${wordResult.words}</h4>
//             `;
//         card = card.concat(`</li>`);
//         wordCardDiv.insertAdjacentHTML("beforeend"), card;
//       });
//     });
// };

// searchButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   const searchTerm = searchInput.value.trim();
//   searchWords(searchTerm);
// });

searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    searchWords(searchTerm);
  }
});
