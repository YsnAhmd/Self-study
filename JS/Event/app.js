//HTML has different events and javascript can listen and react according to these events. HTML allows event handler attributes with JS code to be added to a HTML element.

//Normal syntax for JS event handler
//<element eventName= 'JS code'></element>

//Example
// function displayDate() {
//     document.getElementById('p').innerHTML = Date();
//   }

  const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', changeBackground);

let x =`rgb( ${random(100)} , ${random(100)} , ${random(100)} )`;
console.log(x);

  // Web events are not part of the core JavaScript language — they are defined as part of the APIs built into the browser..