import axios from 'axios';
import string from './models/Search.js';


console.log(string);



async function getResults(query){
    const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
    console.log(res)
}
getResults();