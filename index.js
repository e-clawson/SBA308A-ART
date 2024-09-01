// this file will contain the initial GET request
// and the function to create the cards for each of the pieces of art 
const artCardContainer = document.getElementById("card-container");


async function initialLoad(){
    const response = await fetch("https://api.artic.edu/api/v1/artworks")
    const jsonData = await response.json(); 
    console.log(jsonData) //it is an object 
    let licenseInfo = jsonData.info.license_text;
    let licenseLinks = jsonData.info.license_links;
    let websiteInfo = jsonData.config.website_url;
    console.log(licenseInfo)
    console.log(licenseLinks)
    console.log(websiteInfo)
    await jsonData.data.forEach(element => {
        let id = element.id;
        console.log(element);
        //img
        let imgId = element.image_id;
        // let lqipImg = element.thumbnail.lqip;
        let altText = element.alt_text;
        //artist info
        let artist = element.artist_title;
        let artistId = element.artist_id;
        let artistDisplay = element.artist_display;
        //art info 
        let title = element.title;
        let refNum = element.main_reference_number;
        let date = element.date_display;
        let placeOfOrg = element.place_of_origin;
        let artType = element.artwork_type_title;
        let artDescription = element.description; 
      

        //creating art cards
        let artCard = document.createElement("div");
        artCard.setAttribute("id", id);
        artCard.setAttribute("class", artistId);
        artCard.classList.add("card");
        let cardTitle = document.createElement("h3");
        cardTitle.innerHTML = title;
        let cardArtist = document.createElement("h4");
        cardArtist.innerHTML = artist;
        let cardDate = document.createElement("p");
        cardDate.innerHTML = date;
        let cardDescription = document.createElement("p");
        cardDescription.innerHTML = artDescription

        artCardContainer.appendChild(artCard);
        artCard.appendChild(cardTitle);
        artCard.appendChild(cardArtist);
        artCard.appendChild(cardDate);
        artCard.appendChild(cardDescription);

     
    });
}
initialLoad()

//  Nav bar 

let navBarTabs = [
    { text: "home", class:"", class:"home"},
    { text: "about", class:"", class:"about" },
    { text: "favorites", class:"", class:"favorites"},
]

//created a nav element, created a query for the header, 
// and appended the navBar to the header element 
let navBar = document.createElement("nav")
let headerEl = document.getElementById("header")
headerEl.appendChild(navBar);
navBar.classList.add("flex-around")

//used forEach to make an <a> element for each tab
navBarTabs.forEach((link) => {
    const navTabs = document.createElement("a");
    navTabs.textContent = link.text;
    navTabs.classList = link.class
    navBar.appendChild(navTabs)
})

let navTabs = document.querySelectorAll("a")

navBar.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target !== "a"){
        navTabs.forEach((link) => {
          let isCurrentEvent = link == event.target;
          if (link !== event.target) {
            link.classList.remove("active");
          }
          if (isCurrentEvent) {
            if (link.classList == "active") {
              link.classList.remove("active"); 
            } else {
              link.classList.add("active");
              let info = link.classList;
              let otherInfo = Array.from(info);
              console.log(otherInfo);
              itemDisplay(otherInfo);
              
            } 
          }
        });
    }
});

function itemDisplay(otherInfo) {
    let homeDiv = document.getElementById("home");
    // let homeDivId = homeDiv.id;
    let homeDivArray = homeDiv.classList
    let realHomeDivArray = Array.from(homeDivArray)
    let aboutDiv = document.getElementById("about");
    // let aboutDivId = aboutDiv.id;
    let aboutDivArray = aboutDiv.classList
    let realAboutDivArray = Array.from(aboutDivArray)

    let favoriteDiv = document.getElementById("favorites");
    let favoriteDivArray = favoriteDiv.classList
    let realFavoriteDivArray = Array.from(favoriteDivArray)

    if (otherInfo.includes("home") && otherInfo.includes("active")) {
        homeDiv.classList.remove("default")
        aboutDiv.classList.add("default");
        favoriteDiv.classList.add("default");
    } 
    if (otherInfo.includes("about") == true && realAboutDivArray.includes("default")) {
        homeDiv.classList.add("default");
        aboutDiv.classList.remove("default");
        favoriteDiv.classList.add("default");
    } 
    if (otherInfo.includes("favorite") == true && realFavoriteDivArray.includes("default")) {
        homeDiv.classList.add("default");
        aboutDiv.classList.add("default");
        favoriteDiv.classList.remove("default");
    }
  }
