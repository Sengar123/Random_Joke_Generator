/*This is a JavaScript function that retrieves a random dad joke from the "icanhazdadjoke" API and displays it on a webpage. Here's what's happening:

1.The fetch function is used to make a GET request to the API endpoint 'https://icanhazdadjoke.com/'.
2.The headers option is set to specify that the response should be in JSON format.
3.The first .then function is called on the response object to extract the JSON data from it.
4.The second .then function is called on the extracted data to obtain the joke text.
The joke text is assigned to the jokeText variable (which should reference an HTML element with an id of "jokeText") to display it on the webpage.
Overall, this function is a good example of how to use the Fetch API to retrieve data from an API and use it in a JavaScript application.*/

const jokeText = document.querySelector('.joke-text');
const jokeBtn = document.querySelector('.joke-btn');


jokeBtn.addEventListener('click', getJoke);
getJoke();
function getJoke(){
    fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    }).then(function(response){
        return response.json();
    }).then(function(data){
        const joke = data.joke;
        jokeText.innerText= joke;
    });
}