export function uuid() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ!@#$%^&*+";
    var passwordLength = 14;
    var password = "";

    for(var i=0; i<passwordLength; i++){
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber+1);
    }
    return password;
  }
