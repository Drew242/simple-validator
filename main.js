var phoneNum      = prompt("What's your birthday? \n Format: xxx-xxx-xxxx")
var birthday      = prompt("What's your birthday? \n Format: xx/xx/xx")
var postCode      = prompt("What's your Postal Code? \n Format: xxxxx")
var state         = prompt("What state do you call home? \n Format: XX (Capitalized)")
var maritalStatus = prompt("Are you married? \n Yes or no")

if (phoneNum.charAt(3) == '-' && phoneNum.charAt(7) == '-' && phoneNum.length == 12) {
  document.getElementById('phone#').innerHTML = "Phone Number: " + phoneNum;
} else {
  document.getElementById('phone#').innerHTML = "unknown";
}

if (birthday.charAt(2) == '/' && birthday.charAt(5) == '/' && birthday.length == 8) {
  document.getElementById('birthday').innerHTML = "Birthday: " + birthday;
} else {
  document.getElementById('birthday').innerHTML = "unknown";
}

if (postCode.length == 5 && parseInt(postCode)) {
  document.getElementById('post-code').innerHTML = "Postal Code: " + postCode;
} else {
  document.getElementById('post-code').innerHTML = "unknown";
}

if (state == state.toUpperCase() && state.length == 2) {
  document.getElementById('state').innerHTML = "State: " + state;
} else {
  document.getElementById('state').innerHTML = "unknown";
}

if (maritalStatus.charAt(0) == 'y' || 'Y' && maritalStatus.length == 3) {
  document.getElementById('marital-status').innerHTML = "Married?: " + maritalStatus;
} else if (maritalStatus.charAt(0) == 'n' || 'N') {
  document.getElementById('marital-status').innerHTML = "Married?: no";
} else {
  document.getElementById('marital-status').innerHTML = "unknown";
}
