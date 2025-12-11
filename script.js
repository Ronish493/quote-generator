let motivational_quotes = [
    "Start where you are. Use what you have. Do what you can.",
    "It always seems impossible until it's done.",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "We may encounter many defeats but we must not be defeated"
];

let funny_quotes = [
    "Never argue with stupid people, they will drag you down to their level and then beat you with experience.",
    "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
    "Life is short. Smile while you still have teeth.",
    "Do not take life too seriously. You will never get out of it alive."
]

let index= 0;
// let looped = false;
let quotesStarted = false;

function selectingQuotes() {
    let selected_category= document.getElementById("category").value;

    if (selected_category === "motivation") {
        return motivational_quotes;
    }
    else {
        return funny_quotes;
    }
}

function generatingQuotes() {
    let quotes = selectingQuotes();
    document.getElementById("quote").innerText = quotes[index];
}


function showButtons() {
    let category = document.getElementById("category").value;

    if (category === "") {
        document.getElementById("startbtn").style.display = "none";
        document.getElementById("randombtn").style.display = "none";
    }
    else {
        document.getElementById("quote").innerText = "Let's Start";
        if (quotesStarted === false) {
            document.getElementById("startbtn").style.display = "inline-block";

        } 

        else{
            document.getElementById("startbtn").style.display = "inline-block";
            document.getElementById("prevbtn").style.display = "none";
            document.getElementById("nextbtn").style.display = "none";
        }

        document.getElementById("randombtn").style.display = "inline-block";
    }
}

function startQuote() {
    index = 0;

    let quotes = selectingQuotes();

    document.getElementById("quote").innerText=quotes[index];

    document.getElementById("startbtn").style.display="none";

    document.getElementById("prevbtn").style.display="hidden";

    document.getElementById("nextbtn").style.display="inline-block"

    quotesStarted = true;

}

function previousQuote() {
    let previous_quotes = selectingQuotes();
    // let prevBtn = document.getElementById("prevbtn");

    // CASE 1: user is at index 0 AND has NOT looped yet → prev should do nothing
    if (index === 0 && looped === false) {
        // prevBtn.disabled = true;
        return;  
    }

    // prevBtn.disabled = false;

    // allow previous navigation
    index--;

    // CASE 2: if index becomes negative after full loop → go to last quote
    if (index < 0) {
        index = previous_quotes.length - 1;
    }

    generatingQuotes();
    
    // if (index === 0 && looped === true) {
    //     looped = false;
    //     prevBtn.disabled = true;
    // }
}


function nextQuote() {
    let next_quotes= selectingQuotes();

    index++;

    if (index === next_quotes.length) {
        index = 0;
        looped = true;
    }

    // show prev button if we clicked next once or the quotes are looped atleast once.
    if (index > 0 || looped === true) {
        document.getElementById("prevbtn").style.display = "inline-block";
    }

    generatingQuotes();
}

function randomQuote() {
    let quotes = selectingQuotes();
    let randomIndex = Math.floor(Math.random()*quotes.length);
    index = randomIndex;
    document.getElementById("quote").innerText = quotes[randomIndex];

}

