$( document ).ready(function() {
  
  $('#search-btn').click(function(){
     $('#data').html('');
     let text=jQuery('#search-input').val();
     if(text != ''){
      getSingleHeroe(text);
  }
     
   });
 
   const getSingleHeroe = (text)=>{
   fetch('https://gateway.marvel.com/v1/public/characters?apikey=5895d6f1aa65ad4fbf8f2e49c3db79dd&hash=5b0f850b5bd90b5b2f5b2028c4b3be34&ts=1&limit=100&name='+text)
   .then(res=>res.json())
   .then(data=>extractCorrectData(data.data.results))
   .then(result=>showResults(result))
   .catch(error=>console.log(error))
 
 }
 
   const extractCorrectData = (character) => {
   return character.map(item =>{
     
     return {
       id: item.id,
       name: item.name,
       description: item.description,
       imageURL: `${item.thumbnail.path}`+'/portrait_incredible'+`.${item.thumbnail.extension}`.replace(/^http:W/i,'https://')
     }
   
   })
 } 
   
 }); 
 
 const showResults = (results) => {

  if (results.length==0){
    let html = `
    <h2>Sorry, we couldn't find any superheroes with the given character name. Please check if the spelling is right.</h2>`
    $('#data').html(html);
  }
   
   results.forEach(element => {
     let html = `
      <div class='col col-md-6 col-lg-3'>
        <div class='box'>
          <a href='javascript:getCharacter(${element.id})'>
            <img src='${element.imageURL}' alt=''>
            <div class='box__title'>
              <h2>${element.name}</h2>
            </div>
          </a>
          <p>${element.description}</p>
        </div>
      </div>`
     $('#data').append(html);
   });
   
 }