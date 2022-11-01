function selectImg(img) {
    saveSpace += img.innerHTML;
    console.log(saveSpace);    
  }
 
  let saveSpace = "";

  function display() {
    document.getElementById("displayArea").innerHTML = saveSpace;
  }

function clearDisplay(){
    saveSpace = "";
    document.getElementById("displayArea").innerHTML = saveSpace;
}

