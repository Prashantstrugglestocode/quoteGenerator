
//
let button = document.querySelector("#newqoutes");
let quote = document.querySelector(".qoute");
let person = document.querySelector(".person");


const quotes = [
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      person: "Walt Disney"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },];
    button.addEventListener("click", () => {

        let random = Math.floor(Math.random() *quotes.length); // floor makes the number whole 

        quote.innerText = quotes[random].quote;
        person.innerText = quotes[random].person;

    });

  
  