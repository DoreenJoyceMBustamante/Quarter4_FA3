// problem 1
function isNumeric(value) {
  return !isNaN(value) && value.trim() !== "";
}

function getNumber() {
  let num;
  do {
    num = prompt("Enter a number:");
    if (num === null) {
      return;
    }
  } while (!isNumeric(num));

  num = parseInt(num);
  let result = "Number inputted: " + num + "<br><br>";

  if (num % 2 !== 0) {
    for (let i = num; i >= 1; i--) {
      for (let j = 0; j < num; j++) {
        result += i + " ";
      }
      result += "<br>";
    }
  } else {
    for (let i = num; i >= 1; i--) {
      for (let j = 0; j < i; j++) {
        result += i + " ";
      }
      result += "<br>";
    }
  }

  document.getElementById("output").innerHTML = result;
}

// problem 2
const maxContacts = 7;
let contacts = [];

function updateDisplay() {
  document.getElementById('contacts').textContent = contacts.join(' ');
}

function addContact() {
  let name = document.getElementById('contactInput').value.trim();
  if (name) {
    if (contacts.length < maxContacts) {
      contacts.push(name);
    } else {
      contacts.shift();
      contacts.push(name);
    }
    updateDisplay();
    document.getElementById('contactInput').value = "";
  }
}

function removeContact() {
  if (contacts.length > 0) {
    contacts.pop();
    updateDisplay();
  }
}
