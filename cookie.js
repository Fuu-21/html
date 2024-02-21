document.cookie = "username=john_doe; expires=Thu, 01 Jan 2023; path =/";


//Get cookie by name
var username = document.cookie.split('; ')
  .find(row => row.startsWith("username="))
  .split('=')[1];

console.log("Username: "+ username);

document.cookie = "username"