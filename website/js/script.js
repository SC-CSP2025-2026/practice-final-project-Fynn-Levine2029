const definitionInput = document.querySelector(".definition-input");
const searchButton = document.querySelector(".search-btn");
const listGroup = document.querySelector(".list-group");

const loadRandomWord = async () => {
  const url =
    "https://student-api-proxy.onrender.com/api/wordsapiv1.p.rapidapi.com/words/?random=true"; //?random=true
  const options = {
    method: "GET",
    headers: {
      "X-API-Key":
        "c355fe65e937daae839c9c7858abc50a20f4109f72d7902de404b853c6c7cdfc",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
  const word = result.data.word;
  //   console.log(result.data.word);
  const listItem = `
          <li class="list-group-item">${word}`;
  listGroup.insertAdjacentHTML("beforeend", listItem);

  //   words.forEach((word) => {
  //     const listItem = `
  //         <li class="list-group-item">${word.definition} - ${word.partOfSpeech} - ${word.synonyms} - ${word.pronunciation}`;
  //     listGroup.insertAdjacentHTML("beforeend", listItem);
  //   });

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
};

loadRandomWord();
