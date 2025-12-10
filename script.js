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


function startQuote() {
    index = 0;

    let quotes = selectingQuotes();

    document.getElementById("quote").innerText=quotes[index];

    document.getElementById("startbtn").style.display="none";

    document.getElementById("prevbtn").style.display="inline-block";

    document.getElementById("nextbtn").style.display="inline-block"
}

function previousQuote() {
    let previous_quotes= selectingQuotes();

    index--;

    if (index<0) {
        index = previous_quotes.length - 1;
    }

    generatingQuotes();
}

function nextQuote() {
    let next_quotes= selectingQuotes();

    index++;

    if (index === next_quotes.length) {
        index = 0;
    }

    generatingQuotes();
}
