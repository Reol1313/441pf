//Shangwenmin Reol 190624
const addButton = document.querySelectorAll('.add')
const cartTable = document.getElementById('cart-table')
const cartTotal = document.getElementById('cart-total')
let totalPrice = 0

function updateTotalPrice() {
  const tr = cartTable.getElementsByTagName('tr')
  var total = 0
  if (tr.length === 0) {
    cartTotal.innerHTML = total.toFixed(2)
    return total.toFixed(2)
  }
  for (let index = 0; index < tr.length; index++) {
    const element = tr[index]
    const currentPrice = element
      .getElementsByTagName('td')[2]
      .innerHTML.replace('$', '')
    total += Number(currentPrice)

    cartTotal.innerHTML = total.toFixed(2)
  }
  return total.toFixed(2)
}

addButton.forEach((button, index) => {
  button.addEventListener('click', function () {
    const course = this.parentNode.querySelector('h2').textContent
    const price = parseInt(this.parentNode.querySelector('p').textContent)
    const quantity = parseInt(
      this.parentNode.querySelector('.quantity-input').value
    )
    const total = price * quantity

    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${course}</td>
      <td>${quantity}</td>
      <td>$${total.toFixed(2)}</td>
      <td class="remove" data-index="${index}">remove</td>
    `
    cartTable.appendChild(row)

    updateTotalPrice()

    const removes = cartTable.getElementsByClassName('remove')

    for (let index = 0; index < removes.length; index++) {
      const remove = removes[index]
      remove.addEventListener('click', function (event) {
        cartTable.removeChild(this.parentNode)

        updateTotalPrice()
      })
    }
  })
})

function checkout() {
  alert(`Total amount to pay: $${updateTotalPrice()}`)
  // Additional checkout logic can be added here
}

function clearCart() {
  cartTable.innerHTML = ''
  totalPrice = 0
  cartTotal.textContent = totalPrice.toFixed(2)
}

document.getElementById('login-btn').addEventListener('click', function () {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  if (username && password) {
    window.location.href = 'https://reol1313.github.io/441pf/courseware.html' 
  } else {
    alert('Invalid username or password')
  }
})

// set cookie
function setCookie(name, value, days) {
  var expires = ''
  if (days) {
    var date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie =
    name + '=' + (value || '') + expires + '; path=/; Secure; HttpOnly'
    document.cookie = name + "=" + (value || "") + expires + "; path=/; ";
}

// read cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// delete cookie
function eraseCookie(name) {
  document.cookie = name + '=; max-age=0'
}

function addTask() {
  const taskInput = document.getElementById('new-task')
  const newTask = taskInput.value.trim()

  if (newTask) {
    const taskList = document.getElementById('task-list')
    const listItem = document.createElement('li')
    listItem.textContent = newTask
    listItem.onclick = function () {
      this.classList.toggle('completed')
    }
    taskList.appendChild(listItem)
    taskInput.value = '' // Clear the input after adding task
  } else {
    alert('Please enter a task.')
  }
}

// Optional: Add a way to delete tasks
document
  .getElementById('task-list')
  .addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
      event.target.parentNode.remove()
    }
  })

// Optional: Add a button to each task for deletion
function addDeleteButton(taskItem) {
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete'
  deleteButton.onclick = function () {
    taskItem.remove()
  }
  taskItem.appendChild(deleteButton)
}

const display = document.getElementById('display')
const buttons = document.querySelectorAll('.buttons button')

let currentInput = ''
let operator = null
let firstOperand = null

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent

    if (isNaN(value) && value !== '.') {
      handleOperator(value)
    } else {
      handleNumber(value)
    }
  })
})

function handleNumber(value) {
  currentInput += value
  display.value = currentInput
}

function handleOperator(value) {
  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput)
  } else {
    const result = performCalculation(
      operator,
      firstOperand,
      parseFloat(currentInput)
    )
    display.value = result
    firstOperand = result
  }

  operator = value
  currentInput = ''
}

function performCalculation(operator, a, b) {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return a / b
    default:
      return
  }
}

// Add your JavaScript here for form validation
function validateForm() {
  var hasError = false
  var errorMessages = ''

  var name = document.forms['enquiryForm']['name'].value
  if (name == '') {
    hasError = true
    errorMessages += 'Please enter your name.\n'
  }

  var email = document.forms['enquiryForm']['email'].value
  if (email == '') {
    hasError = true
    errorMessages += 'Please enter your email.\n'
  } else {
    // Simple email validation regex
    var emailPattern = /\S+@\S+\.\S+/
    if (!emailPattern.test(email)) {
      hasError = true
      errorMessages += 'Please enter a valid email address.\n'
    }
  }

  // More validation checks can be added here for other fields

  if (hasError) {
    alert(errorMessages)
    return false
  }
  return true
}
var loginBtn = document.getElementById('login-btn')
console.log(loginBtn) 
if (loginBtn) {
  loginBtn.addEventListener('click', function () {
  })
} else {
  console.error('Element with ID "login-btn" not found')
}

function updateCartTable() {
  const cartTable = document.getElementById('cart-table')
  cartTable.innerHTML = '' 
  Object.values(cartItems).forEach((item) => {
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>$${(item.price * item.quantity).toFixed(2)}</td>
      <td><button class="remove" data-id="${item.id}">Remove</button></td>
    `
    cartTable.appendChild(row)
  })
}
function junpFun (){
  console.log(getCookie('username'))
  var username = getCookie('username');
  if (username) {
    // Assuming successful login, redirect to the test. html page
    window.location.href = 'courseware.html';
  } else {
    alert('Not logged in yet, please log in first');
    setTimeout(function(){
      window.location.href = 'login.html';
    },500)
  }
}
//Shangwenmin Reol 190624
 // Add your JavaScript here for form validation
    function validateForm() {
        var hasError = false;
        var errorMessages = "";

        var name = document.forms["enquiryForm"]["name"].value;
        if (name == "") {
            hasError = true;
            errorMessages += "Please enter your name.\n";
        }

        var email = document.forms["enquiryForm"]["email"].value;
        if (email == "") {
            hasError = true;
            errorMessages += "Please enter your email.\n";
        } else {
            // Simple email validation regex
            var emailPattern = /\S+@\S+\.\S+/;
            if (!emailPattern.test(email)) {
                hasError = true;
                errorMessages += "Please enter a valid email address.\n";
            }
        }

        // More validation checks can be added here for other fields

        if (hasError) {
            alert(errorMessages);
            return false;
        }
        return true;
    }
  function submitForm(event) {
    event.preventDefault(); 
    if (validateForm()) { 
      window.location.href = 'thankyou.html'; 
    }
  }

  function validateForm() {
    var hasError = false;
    var errorMessages = "";

    var name = document.getElementById('name').value;
    if (name == "") {
      hasError = true;
      errorMessages += "Please enter your name.\n";
    }

    var email = document.getElementById('email').value;
    if (email == "") {
      hasError = true;
      errorMessages += "Please enter your email.\n";
    } else {
      var emailPattern = /\S+@\S+\.\S+/;
      if (!emailPattern.test(email)) {
        hasError = true;
        errorMessages += "Please enter a valid email address.\n";
      }
    }

    if (hasError) {
      alert(errorMessages);
      return false;
    }
    return true;
  }
