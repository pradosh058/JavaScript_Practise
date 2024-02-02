let emailId = "paradoshpanda0235@gmail.com";

function protectEmailId(emailId) {
    let secureEmail = "";
    let arr = emailId.split("@");
    secureEmail = arr[0].substring(0,arr[0].length/2) + "...@" + arr[1];
    return secureEmail;
}

const protectedEmail = protectEmailId(emailId);
console.log(protectedEmail);