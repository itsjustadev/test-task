let elements = document.querySelectorAll('.button.key');
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');

for (let element of elements) {
  element.onclick = function() {
    console.log(element);
    display.textContent += element.textContent;
  }
};

clear.onclick = function() {
  display.textContent = '';
};


