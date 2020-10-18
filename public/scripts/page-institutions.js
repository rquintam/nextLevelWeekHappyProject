// CREATE MAP
const map = L.map("mapid").setView([-21.1752832, -47.7924577], 12);

// CREATE AND ADD TITLELAYER
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// CREATE ICON
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({id, name, lat, lng}) {
  // CREATE POPUP OVERLAY
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/institution?id=${id}"> <img src="/images/arrow-white.svg" ></a>`
  );

  // CREATE AND ADD MARKER
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const institutionsSpan = document.querySelectorAll('.institutions span')
institutionsSpan.forEach( span => {
  const institution = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat, 
    lng: span.dataset.lng
  }

  addMarker(institution)
})
