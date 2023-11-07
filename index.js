const numbers = document.getElementsByTagName('p');
const generateBtn = document.getElementById('generate-numbers');



generateBtn.addEventListener('click', function() {

  for (let i = 0; i < numbers.length; i++) {

  const generatedNumbers = Math.floor(Math.random() * 55) + 1;

  numbers[i].textContent = generatedNumbers;


  }
});