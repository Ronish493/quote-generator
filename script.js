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

function generatingQuotes() {
    let selected_category= document.getElementById("category").value;
    let quote;

    if (selected_category === "motivation") {
        quotes = motivational_quotes;
    }
    else {
        quotes = funny_quotes
    }

    let num = Math.random();      
    let position = num * quotes.length;
    let index = parseInt(position);     // convert to whole number

    document.getElementById("quote").innerText = quotes[index];
}