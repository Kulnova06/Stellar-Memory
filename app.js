const apiKey = "Klqn9Wv3t86YFT0jv0SId7QY2H5sTqqMdf3Hw6x5"
const dateInput = document.getElementById("date")
const btnGet = document.getElementById("get")
const btnRandom = document.getElementById("random")
const container = document.getElementById("container")


async function getData(date = "") {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

  if (date) {
    url += `&date=${date}`
  }

  try {
    let res = await fetch(url)
    let data = await res.json()
    showData(data)
  } catch (err) {
    console.log("error in fetch block", err)
  }
}

function showData(data) {
  container.innerHTML = `
    <h2>${data.title}</h2>
    <img src="${data.url}" style="max-width: 500px;" />
    <p>${data.explanation}</p>
  `;
}

btnGet.addEventListener("click", () => {
  let date = dateInput.value;
  if (date) {
    getData(date)
  }
})
btnRandom.addEventListener("click", () => {
  let randomDate = getRandomDate()
  getData(randomDate)
});

getData(getRandomDate()) // called because when loaded there should be a preloaded image