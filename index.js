// this file will contain the initial GET request
// and the function to create the cards for each of the pieces of art 
const artCards = document.getElementById("art-cards");

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
        console.log(id);
        //img
        let imgId = element.image_id;
        let lqipImg = element.thumbnail.lqip;
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


        // let title = 
        // let artistID = 
        //let title = element.title
        // let altText = element.alt_text
        // let img = 
        // let desc = 

    
        // breedOption.textContent = breed;
        // breedOption.setAttribute("id", idValue);
        // breedSelect.appendChild(breedOption);
    });
}
initialLoad()