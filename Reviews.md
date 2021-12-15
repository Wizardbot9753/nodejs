
# 15 Dec 2021
I didn't understand how were you run your programs as there was no main() functionto run them. How did you test if your program runs Ok ?
I was not able to run/test any of these programs. 
If there are external depencencies which are not part of core Node, them add them in package.json

This is how it should be done.

I should be able to `cd` into the project run `npm install` and `node index.js` , that should call program and get me results.

Folloing is one example 

```
const os = require('os')
function main(){
    console.log(os.platform())
    console.log(os.hostname())
}

main();
```

![image](https://user-images.githubusercontent.com/6829993/146134825-b092b66d-b56d-4bd7-8737-38a87786e581.png)


## Next Task

Make all the program runnable as per my example. 
Create a new branch.
Push that brach and crate a Pull Requtest. I will review that PR.
