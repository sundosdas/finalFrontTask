/* INDEX */
const greetings = [
    "Welcome! We are happy to have you here.",
    "Discover our amazing dishes today!",
    "Taste the twist in every bite.",
    "A dining experience like no other."
];

let currentGreetingIndex = 0;

function changeGreeting() {
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = greetings[currentGreetingIndex];
    currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
}
setInterval(changeGreeting, 4000);
changeGreeting();

/* MENU */
const priceElements = document.querySelectorAll(".price");
priceElements.forEach(price => {
    price.addEventListener("mouseover", () => {
        price.style.fontSize = "2rem";
    });
    price.addEventListener("mouseout", () => {
        price.style.fontSize = "1.5rem";
    });
});

document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const menuCard = event.target.closest('.menu-card');
        const mealImage = menuCard.querySelector('img');
        mealImage.src = 'pics/check.jpg';
        mealImage.alt = 'Meal Selected';
    });
});


/* Contact US */

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
 
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return;
    }

    document.getElementById("name").value = name.toUpperCase();
    document.getElementById("email").value = email.toUpperCase();
    document.getElementById("message").value = message.toUpperCase();
 
    document.getElementById("name").style.color = "#646147";
    document.getElementById("email").style.color = "#646147";
    document.getElementById("message").style.color = "#646147";


    var successMessage = document.createElement("p");
    successMessage.textContent = "Thank you! Your message has been submitted successfully.";
    successMessage.style.color = "green";
    document.getElementById("contact-form").appendChild(successMessage);

    setTimeout(function() {
        document.getElementById("contact-form").reset(); // This resets the form fields
        successMessage.remove(); // Remove success message after 4 seconds
    }, 4000); 
});

