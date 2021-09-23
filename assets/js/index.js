const APIKEY = "5895d6f1aa65ad4fbf8f2e49c3db79dd&hash=5b0f850b5bd90b5b2f5b2028c4b3be34"
const APIURL = "https://gateway.marvel.com/v1/public/characters"

$( document ).ready(function() {

  $('#search-btn').click(function(){
    let SearchingValue = jQuery('#search-input').val();
    if(SearchingValue){
      getHeroes(SearchingValue);
      $('#search-btn').attr('disabled',true);
      $('#spinner-modal').modal('show');
      $('#data').html('');
    }
    return; 
   });

   $('#show-all-btn').click(function(){
    $('#spinner-modal').modal('show'); 
    $('#data').html('');
    
     getHeroes();
 
    
  });
 
   const getHeroes = (SearchingValue)=>{
     let apiURL = `${APIURL}?apikey=${APIKEY}&ts=1&limit=100`
     if(SearchingValue) apiURL + `&name=${SearchingValue}`
   fetch(apiURL)
   .then(res=>res.json())
   .then(data=>getSearchResult(data.data.results))
   .then(result=>showResults(result))
   .catch(error=>console.log(error));
 
 };
 
   const getSearchResult = (character) => {
   return character.map(item =>{
     
     return {
       id: item.id,
       name: item.name,
       description: item.description,
       imageURL: `${item.thumbnail.path}`+'/portrait_incredible'+`.${item.thumbnail.extension}`.replace(/^http:W/i,'https://')
     };
   
   });
 }; 
   
 }); 
 
 const showResults = (results) => {
  if (results.length<=0){
    let html = `
    <h2>Sorry, we couldn't find any superheroes with the given character name.</h2>
    <p>Please check if any of the issues below is occurring:</p>
    <ul>
      <li>Incorrect spelling.</li>
      <li>No given searching parameter.</li>
      <li>Given character is not a Marvel superhero.</li>
    </ul>
    `;
    $('#data').html(html);
  }
   
   results.forEach(element => {
     let html = `
      <div class='col col-md-4 col-lg-3 col-xl-2'>
        <div class='box'>
          <a href='javascript:getCharacter(${element.id})'>
            <img src='${element.imageURL}' alt=''>
            <div class='box__title'>
              <h2>${element.name}</h2>
            </div>
          </a>
        </div>
      </div>`;
     $('#data').append(html);
   });
   $('#search-btn').attr('disabled',false);
   $('#spinner-modal').modal('hide');
   
 };

 function getCharacter(id) {
  fetch(`${APIURL}/${id}'?apikey=${APIKEY}&ts=1`)
  .then(res=>res.json())
  .then(result=>singleResult(result));
}

const singleResult = (results) => {
  let character = results.data.results[0];
  let html = `
    <div class='col col-md-4 col-lg-3 col-xl-2'>
    <div class='box'>
      <img src='${character.imageURL}' alt=''>
      <div class='box__title'>
        <h2>${character.name}</h2>
      </div>
      <h4>Description:</h4>
      <p>${character.description}</p>
    </div>
  </div>`;
  $('#data').html(html);
};