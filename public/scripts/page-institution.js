const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

// GET VALUES FROM HTML
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// CREATE MAP
const map = L.map('mapid', options).setView([lat,lng], 15)

// CREATE AND ADD TITLELAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// CREATE ICON
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

// CREATE AND ADD MARKER
L
  .marker([lat, lng], { icon })
  .addTo(map)

// IMAGE GALLERY

function selectImage(event) {
  const button = event.currentTarget

  // REMOVE ALL .active CLASS
  const buttons = document.querySelectorAll('.images button')
  buttons.forEach((button) => {
    button.classList.remove("active")
  })

  // SELECT THE CLIKED IMAGE
  const image = button.children[0]
  const imageContainer = document.querySelector(".institution-details > img")
  
  // REFRESH THE IMAGE CONTAINER
  imageContainer.src = image.src;

  // ADD .active CLASS TO THE BUTTON
  button.classList.add('active')
}