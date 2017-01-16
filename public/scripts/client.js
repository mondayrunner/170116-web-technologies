
function changeBackgroundColor(color) {
  console.log(color);
  docum
}


window.onload = function() {

  var buttons = document.getElementsByTagName('button');
  
  for(var i = 0; i < buttons.length; i++) {
    
    buttons[i].onclick = function() {
      changeBackgroundColor(buttons[i].id);
    };
    
  }
  
};