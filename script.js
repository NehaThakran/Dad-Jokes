//mini project displaying best jokes using promises or asynch/await with error handling


const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');


//using promises
// const generateJokes = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', setHeader) //fetch the dad joke api,returns promise
//     .then((res) => res.json() ) //converting the fetched html response into json
//     .then((data) => {
//         jokes.innerHTML = data.joke;
//     })
//     .catch((error) => { //catching error if response is not fetched
//         console.log(error);
//     })
// }


//same thing can be done using asynch/await with much reduced complexity
const generateJokes = async () => {

    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }

        const res = await fetch('https://icanhazdadjoke.com/', setHeader) //it also returns promises,wait until we get response
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch(err){
        console.log(`The error is ${err}`);
    }
}
jokeBtn.addEventListener('click', generateJokes);
generateJokes(); //1 joke should always appear while visiting the page
