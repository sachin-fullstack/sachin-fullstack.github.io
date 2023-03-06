function initMap() {
  // Create a map object and center it on the specified location
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 8,
  });

  // Create a marker object and place it on the map
  const marker = new google.maps.Marker({
    position: { lat: 37.7749, lng: -122.4194 },
    map: map,
    title: "San Francisco",
  });
}
