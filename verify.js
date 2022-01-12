let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let form = document.getElementById('form-register')
let phone = document.getElementById('phone')
let textarea = document.getElementById('message')
let email = document.getElementById('mail')

function validateInput(){
    if(fname.value.trim() === ""){
        errorMessage(fname, "First name cannot be blank");
    }
    else if(fname.value.length < 3){
        errorMessage(fname, "First name must be at least 3 characters");
    }
    else{
        successMessage(fname);
    }
    if(lname.value.trim() === ""){
        errorMessage(lname, "Last name cannot be blank");
    }
    else if(lname.value.length < 3){
        errorMessage(lname, "Last name must be at least 3 characters");
    }
    else{
        successMessage(lname);
    }
    
    if(email.value.trim() === ""){
        errorMessage(email, "Email cannot be blank");
    }
    else if(!isEmail(email.value)){
        errorMessage(email, "Email invalid")
    }
    else{
        successMessage(email);
    }
    if(phone.value.trim() === ""){
      errorMessage(phone, "Phone cannot be blank");
    }
    else if(!isPhone(phone.value)){
        errorMessage(phone, "Phone number invalid")
    }
    else{
        successMessage(phone);
    }

}
function isEmail(email){
    return /^(?!\.)(?!.*\.$)(?!.*?\.\.)^([a-zA-Z\d\-.]+)@([a-zA-Z\d\-.]+)\.([a-zA-Z]{2,5})$/.test(email)
}


function errorMessage(input, message){
    let parent = input.parentElement;
    let errorMessage = parent.querySelector("small");
    errorMessage.style.visibility="visible";
    errorMessage.innerText=message;
}

function successMessage(input){
    let parent = input.parentElement;
    let errorMessage = parent.querySelector("small");
    errorMessage.style.visibility="hidden";
    errorMessage.innerText="";
}

function isPhone(phone) {
  return /^\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?[\d{1}]?[-\s\.]?[\d{1}]?$/.test(phone);
}



form.addEventListener("submit", (e) => {
    if (true) {
        console.log('True')
    }
    e.preventDefault();

    validateInput();
    
})