import {URL} from 'url';

const myUrl = new URL('https://www.youtube.com/watch?v=OPrP_ge9xpE&list=PLbGui_ZYuhijy1SpwtIS9IwL6OJdbr4kE&index=13');

console.log(myUrl.searchParams);

// output for "searchParams"

// URLSearchParams {
//     'v' => 'OPrP_ge9xpE',
//     'list' => 'PLbGui_ZYuhijy1SpwtIS9IwL6OJdbr4kE',
//     'index' => '13' }

console.log(myUrl.search)

// output for "search"

//?v=OPrP_ge9xpE&list=PLbGui_ZYuhijy1SpwtIS9IwL6OJdbr4kE&index=13

console.log(myUrl.hash)

// "hash" this one prints the value after the hash symbol from the url 

console.log(myUrl.host) // gives host with the port attact to it
console.log(myUrl.hostname)// gives only host


// host object gives you the domian name and port but "hostname" only gives you the name 

console.log(myUrl.href)
// "herf" gives the organised url back to the user

console.log(myUrl.toJSON)
console.log(myUrl.toString) // these are same as "href"

