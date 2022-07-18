//Listen to click on Add to List button
const addToList = document.getElementById("add");
addToList.addEventListener("click", (obj) => {
  obj.preventDefault();
  const destinationName = document.getElementById("destination_name").value;
  const location = document.getElementById("location_name").value;
  const photo = document.getElementById("photo_url").value;
  const description = document.getElementById("details").value;
  const card = `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${photo}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${destinationName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${location}</h6> 
            <p class="card-text">${description}.</p>
        </div>
    </div>`;
  document.getElementById("bootstrap_card").innerHTML = card;
});
