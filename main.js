let form = document.querySelector("form");
let name = document.querySelector("#name");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let cardsContainer = document.querySelector(".cards-container");

const loadButton = 
	document.getElementById('loadButton'); 
const loader = 
	document.getElementById('loader'); 

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "300px"
    card.style.transform = "scale(1)";
    card.style.transition = "transform 0.3s ease";
    card.style.border = "1px solid #ddd";
    card.style.padding = "20px";
    card.style.margin = "10px 0";
    card.style.borderRadius = "8px";
    card.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";

   
    let h4 = document.createElement("h4");
    let h6 = document.createElement("h6");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let deleteButton = document.createElement("button");
    let emailButton = document.createElement("button");
    let callButton = document.createElement("button");

    
    h4.innerHTML = "Name: " + name.value;
    h6.innerHTML = "Phone: " + phone.value;
    p.innerHTML = "E-mail: " + email.value;
    p2.innerHTML = "Message: " + message.value;

    
    deleteButton.innerHTML = "Delete";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    deleteButton.style.border = "none";
    deleteButton.style.padding = "10px";
    deleteButton.style.marginTop = "10px";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.borderRadius = "5px";

    
    emailButton.innerHTML = "Send Email";
    emailButton.style.backgroundColor = "blue";
    emailButton.style.color = "white";
    emailButton.style.border = "none";
    emailButton.style.padding = "10px";
    emailButton.style.marginTop = "10px";
    emailButton.style.marginRight = "10px";
    emailButton.style.cursor = "pointer";
    emailButton.style.borderRadius = "5px";
    

    emailButton.addEventListener("click", () => {
        window.location.href = `mailto:${email.value}`;
    });

    callButton.innerHTML = "Call";
    callButton.style.backgroundColor = "green";
    callButton.style.color = "white";
    callButton.style.border = "none";
    callButton.style.padding = "10px";
    callButton.style.marginTop = "10px";
    callButton.style.marginRight = "10px";
    callButton.style.cursor = "pointer";
    callButton.style.borderRadius = "5px";
    
    callButton.addEventListener("click", () => {
        window.location.href = `tel:${phone.value}`;
    });

   
    card.appendChild(h4);
    card.appendChild(h6);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(emailButton);
    card.appendChild(callButton);
    card.appendChild(deleteButton);
    

    cardsContainer.appendChild(card);


    
    deleteButton.addEventListener("click", () => {
        card.remove();  
    });

    loadButton.disabled = true; 
	loader.style.display = 'inline-block'; 

	setTimeout(() => { 
	
		// Restore the button state 
		//after the operation is done 
		loadButton.disabled = false; 
		loader.style.display = 'none'; 
		demoForm.reset(); 
	}, 2000); 

    form.reset();
});




// loadButton.addEventListener('click', () => { 

// 	// Disable the button 
// 	// and prevent further clicks 
	
// });