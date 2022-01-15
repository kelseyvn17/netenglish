const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const form = document.getElementById('form-register');
const phone = document.getElementById('phone');
const textarea = document.getElementById('message');
const email = document.getElementById('mail');

const validateInput= () => {
    let isInvalid = false;
    if(fname.value.trim() === ""){
        errorMessage(fname, "First name cannot be blank");
        isInvalid = true;
    }
    else if(fname.value.length < 3){
        errorMessage(fname, "First name must be at least 3 characters");
        isInvalid = true;
    }
    else{
        successMessage(fname);
    }
    if(lname.value.trim() === ""){
        errorMessage(lname, "Last name cannot be blank");
        isInvalid = true;
    }
    else if(lname.value.length < 3){
        errorMessage(lname, "Last name must be at least 3 characters");
        isInvalid = true;
    }
    else{
        successMessage(lname);
    }
    
    if(email.value.trim() === ""){
        errorMessage(email, "Email cannot be blank");
        isInvalid = true;
    }
    else if(!isEmail(email.value)){
        errorMessage(email, "Email invalid");
        isInvalid = true;
    }
    else{
        successMessage(email);
    }
    if(phone.value.trim() === ""){
      errorMessage(phone, "Phone cannot be blank");
      isInvalid = true;
    }
    else if(!isPhone(phone.value)){
        errorMessage(phone, "Phone number invalid");
        isInvalid = true;
    }
    else{
        successMessage(phone);
    }
    if(message.value.trim() === ""){
        errorMessage(message, "Message cannot be blank");
        isInvalid = true;
    }
    else {
        successMessage(message);
    }
    return isInvalid;

}
const isEmail= (email) => {
    return /^(?!\.)(?!.*\.$)(?!.*?\.\.)^([a-zA-Z\d\-.]+)@([a-zA-Z\d\-.]+)\.([a-zA-Z]{2,5})$/.test(email)
}


const errorMessage = (input, message) => {
    let parent = input.parentElement;
    let errorMessage = parent.querySelector("small");
    errorMessage.style.visibility="visible";
    errorMessage.innerText=message;
}

const successMessage = (input) => {
    let parent = input.parentElement;
    let errorMessage = parent.querySelector("small");
    errorMessage.style.visibility="hidden";
    errorMessage.innerText="";
}

const isPhone = (phone) => {
  return /^\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?[\d{1}]?[-\s\.]?[\d{1}]?$/.test(phone);
}


form.addEventListener("submit", (e) =>{
    let isInvalid = validateInput();
    if (isInvalid){
        e.preventDefault();
    }
})