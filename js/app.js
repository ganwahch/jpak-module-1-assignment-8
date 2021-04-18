function chapter1(step) {

    if (step === 1) {
        alert('Welcome Visitor');
    }
    if (step === 2) {
        alert('Error! Please enter a valid password.');
    }
    if (step === 3) {
        alert("Welcome to JS Land... \nHappy Coding!");
    }
    if (step === 4) {
        alert("Welcome to JS Land");
        alert("Happy Coding!");
    }
    if (step === 5) {
        console.log("Hello...I can run JS through my web browser's console");
    }

}

function chapter2(step) {
    if (step === 3) {
        var message = "Hello World";
        alert(message);
    }
    if (step === 4) {
        var name = "Jhone Doe";
        var age = 15;
        var course = "Certified Mobile Application Development";

        alert(name);
        alert(age);
        alert(course);
    }
    if (step === 5) {
        var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
        alert(pizza);
    }
    if (step === 6) {
        var email = "example@example.com";
        alert("My email address is " + email);
    }

    if (step === 7) {
        var book = "A smarter way to learn JavaScript";
        alert("I am trying to learn from the Book " + book);
    }
}

var visits = 0;

function chapter3(step) {
    if (step === 1) {
        var age = 19;
        alert("I am " + age + " year old");
    }
    if (step === 2) {
        visits++;
        alert("You have visited this site " + visits + " times");
    }
    if (step === 3) {
        var birthYear = 1999;
        var browserMessage = "My birth year is " + birthYear + "<br> Data type of my declared variable is number";
        document.getElementById("chapter3step3msg").innerHTML = browserMessage;
    }
    if (step === 4) {
        var visitor_name = "John Doe";
        var product_title = "T-shirt(s)";
        var quantity = "5";
        document.getElementById("chapter3step4msg").innerHTML = "<b>" + visitor_name + "</b> ordered <b>" + quantity + " " + product_title + "</b> on XYZ Clothing store";

    }
}



// sticky script
window.onscroll = function() {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}