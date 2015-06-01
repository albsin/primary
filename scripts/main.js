window.onload = function(){

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lightoff.png') {
      myImage.setAttribute ('src','images/lighton.png');
    } else {
      myImage.setAttribute ('src','images/lightoff.png');
    }
}
};