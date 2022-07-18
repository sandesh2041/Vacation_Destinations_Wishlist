//Listen to click on AddtoList button
const addToList = document.getElementById("add");
addToList.addEventListener("click", (addClick) => {
  addClick.preventDefault();
  let destinationName = document.getElementById("destination_name").value;
  let locationName = document.getElementById("location_name").value;
  let photoURL = document.getElementById("photo_url").value;
  let description = document.getElementById("details").value;

  //Calling a fucntion to create new card
  let newCard = createCard(
    destinationName,
    locationName,
    photoURL,
    description
  );
  document.getElementById("destination_display").appendChild(newCard);

  document.getElementById("wishlist_heading").innerText = "My WishList";
});

//Function to create a card for every new information
function createCard(destinationName, location, photoURL, description) {
  //Div to cover the complete card
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  //Added the image to the card
  let photo = document.createElement("img");
  photo.setAttribute("class", "card-top-image");
  photo.setAttribute("src", photoURL);
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

  //Div to cover Edit and Remove buttons
  let cardBtns = document.createElement("div");
  cardBtns.setAttribute("class", "card-buttons");

  //Added Edit button
  let editBtn = document.createElement("button");
  editBtn.setAttribute("class", "btn btn-edit");
  editBtn.innerHTML = "Edit";
  editBtn.addEventListener("click", (editClick) => {
    let newPhoto = editClick.target.parentElement.parentElement.children[0];
    let newDestination =
      editClick.target.parentElement.parentElement.children[1].children[0];
    let newLocation =
      editClick.target.parentElement.parentElement.children[1].children[1];
    let newDescription =
      editClick.target.parentElement.parentElement.children[1].children[2];
    newDestination.innerHTML = prompt("Enter new destination");
    newLocation.innerHTML = prompt("Enter new location");
    newPhoto.setAttribute("src", prompt("Enter new photo URL"));
    newDescription.innerHTML = prompt("Enter new description");
  });
  cardBtns.appendChild(editBtn);

  //Added Remove button
  let removeBtn = document.createElement("button");
  removeBtn.setAttribute("class", "btn btn-remove");
  removeBtn.innerHTML = "Remove";
  removeBtn.addEventListener("click", (removeClick) => {
    removeClick.target.parentElement.parentElement.remove();
  });
  cardBtns.appendChild(removeBtn);

  card.appendChild(cardBtns);

  return card;
}
