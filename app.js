
const apiKey = "Klqn9Wv3t86YFT0jv0SId7QY2H5sTqqMdf3Hw6x5"
const dateInput = document.getElementById("date")
const btnGet = document.getElementById("get")
const btnRandom = document.getElementById("random")
const container = document.getElementById("container")
let currentData = null

async function getData(date = "") {
  container.innerHTML = "Loading..."
  let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  if (date) {
    url += `&date=${date}`
  }
  try {
    let res = await fetch(url)
    let data = await res.json()
    currentData = data
    showData(data)
  } catch (err) {
    console.log("error in fetch block", err)
  }
}
function showData(data) {
  container.style.display = "block"
  let shortText = data.explanation.slice(0, 150)
  container.innerHTML = `
    <h2>${data.title}</h2>
    <img src="${data.url}" style="max-width: 500px;" />
    <p id="text">${shortText}...</p>
    <button id="toggleBtn">Read More</button>
  `
    let expanded = false
    document.getElementById("toggleBtn").onclick = () => {
      let text = document.getElementById("text")

      if (!expanded) {
        text.innerText = data.explanation
        document.getElementById("toggleBtn").innerText = "Read Less"
      } else {
        text.innerText = shortText + "..."
        document.getElementById("toggleBtn").innerText = "Read More"
      }
      expanded = !expanded
    }
}
function getRandomDate() {
  let start = new Date(2015, 0, 1).getTime()
  let end = new Date().getTime()

  let randomTime = start + Math.random() * (end - start)
  let randomDate = new Date(randomTime)

  let year = randomDate.getFullYear()
  let month = String(randomDate.getMonth() + 1).padStart(2, "0")
  let day = String(randomDate.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
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
function saveFav() {
  if (!currentData) return
  let favs = JSON.parse(localStorage.getItem("favs")) || []
  if (!favs.some(f => f.date === currentData.date)) {
    favs.push(currentData)
  }
  localStorage.setItem("favs", JSON.stringify(favs))
}
function showFavs() {
  container.style.display = "grid"
  container.innerHTML = "<h2>Favorites</h2>"
  let favs = JSON.parse(localStorage.getItem("favs")) || []
  container.innerHTML = ""
  favs.forEach(item => {
    let div = document.createElement("div")
    div.innerHTML = `
      <h3>${item.title}</h3>
      <img src="${item.url}" style="max-width:200px;" />
      <p>${item.date}</p>
    `
  div.onclick = () => {
    currentData = item
    showData(item)
  }
    container.appendChild(div)
  })
}
document.getElementById("favBtn").addEventListener("click", saveFav)
document.getElementById("showFav").addEventListener("click", showFavs)

getData(getRandomDate()) // called because when loaded there should be a preloaded image