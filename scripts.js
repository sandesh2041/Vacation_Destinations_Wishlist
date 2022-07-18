//Listen to click on Add to List button
const addToList = document.getElementById("add");
addToList.addEventListener("click", (addClick) => {
  addClick.preventDefault();
  let destinationName = document.getElementById("destination_name").value;
  let locationName = document.getElementById("location_name").value;
  let photoURL = document.getElementById("photo_url").value;
  let description = document.getElementById("details").value;

  let newCard = createCard(
    destinationName,
    locationName,
    photoURL,
    description
  );
  document.getElementById("bootstrap_card").appendChild(newCard);
});

function createCard(destinationName, location, photoURL, description) {
  //Div to cover the complete card
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  //Added the image to the card
  let photo = document.createElement("img");
  photo.setAttribute("class", "card-top-image");
  photo.setAttribute("src", "photoURL");
  photo.setAttribute("alt", "Picture of Destination");
  card.appendChild(photo);

  //Div to cover body of card
  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  //Added the destination to the card
  let dName = document.createElement("h5");
  dName.setAttribute("class", "card-title");
  dName.innerHTML = destinationName;
  cardBody.appendChild(dName);

  //Added the location to the card
  let lName = document.createElement("h6");
  lName.setAttribute("class", "card-subtitle mb-2 text-muted");
  lName.innerHTML = location;
  cardBody.appendChild(lName);

  //Added the description to the card
  let desc = document.createElement("p");
  desc.setAttribute("class", "card-text");
  desc.innerHTML = description;
  cardBody.appendChild(desc);

  card.appendChild(cardBody);

  return card;
}
