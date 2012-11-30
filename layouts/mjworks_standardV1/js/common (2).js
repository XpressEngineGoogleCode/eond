
function autoBlur(){ 
  if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG") 
  document.body.focus(); 
} 
  document.onfocusin=autoBlur; 
  

function addfavorites(favoriteurl, favoritetitle){
 if (document.all)
 window.external.AddFavorite(favoriteurl,favoritetitle)
  }

