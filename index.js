// this file will contain the initial GET request
// and the function to create the cards for each of the pieces of art 
const artCards = document.getElementById("art-cards");

async function initialLoad(){
    const response = await fetch("https://api.artic.edu/api/v1/artworks")
    const jsonData = await response.json(); 
    console.log(jsonData) //it is an object 
    await jsonData.data.forEach(element => {
        let id = element.id
        console.log(id)
        // let artistID = 
        // let img = 
        // let desc = 

    
        // breedOption.textContent = breed;
        // breedOption.setAttribute("id", idValue);
        // breedSelect.appendChild(breedOption);
    });
}
initialLoad()