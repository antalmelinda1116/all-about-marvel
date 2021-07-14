$( document ).ready(function() {
  
    $('#search-btn').click(function(){
        var text=jQuery('#search-input').val();
        var url = 'https://gateway.marvel.com/v1/public/characters?apikey=5895d6f1aa65ad4fbf8f2e49c3db79dd&hash=5b0f850b5bd90b5b2f5b2028c4b3be34&ts=1&name='+text;
        $.ajax({
          url: url,
          success: function(result){
            if (result.status=='Ok'){
                var character=result.data.results;
                $(character).each(function(){
                    var html='<span>'+this.name+'</span>';
                    html+='<img>'+this.thumbnail.path;
    
                    $('#data').append(html);
                })
            }
            console.log(result.code);
          }
        });
        });
    
    });