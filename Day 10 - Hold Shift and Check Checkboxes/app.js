

const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
console.log(checkBoxes);

function handleCheck(e) {
  let inBetween = false; // Flag variable
  let _this = this
  //check if shift key is pressed down
  // and check if they are checking it
  if(e.shiftKey && this.checked) {
    //loop every checkbox
    checkBoxes.forEach(function(checkbox) {
      console.log(checkBoxes);
      if(checkbox === _this || checkbox === lastChecked) {
        inBetween = !inBetween; 
        console.log('Starting to check boxes inbetween');
      }
      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkBoxes.forEach(function(checkbox){
  checkbox.addEventListener('click', handleCheck);
});




