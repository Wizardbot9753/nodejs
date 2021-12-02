//file system - promises Api

import * as fs from 'fs/promises';


// creating directory - path should be there

// try {
//   await fs.mkdir('C:\\Users\\Pille\\Documents\\nodejs\\practice3\\test\\demo');
// console.log('directory created....')
// }
//   catch(error){
//       console.log(error);
//   }

//creating directory - path is not required to be there 
// use the "recursive" option in "mkdir"

// try {
//   await fs.mkdir('C:\\Users\\Pille\\Documents\\nodejs\\practice3\\test\\demo',{recursive:true});
// console.log('directory created....')
// }
//   catch(error){
//       console.log(error);
//   }

//read file content in a directory

// try {
//   const files = await fs.readdir('C:\\Users\\Pille\\Documents\\nodejs\\practice3\\test\\demo',);
// for (const file of files)
// console.log(file)
//   }
//   catch(error){
//       console.log(error);
//   }

  // remove directory 
  // directory has to be empty to use this function 

  // try {
  //    await fs.rmdir('C:\\Users\\Pille\\Documents\\nodejs\\practice3\\test\\demo',);
  //  for (const file of files)
  //  console.log(file)
  //   }
  //   catch(error){
  //       console.log(error);
  //   }

    // create and write files 
    // if you re-execute the file it'll replace the data if you made any changes 

    try {
      await fs.writeFile('readme.txt', 'Hello world')
    } catch (error) {
      console.log(error);
    }

    // read data in the file
    // to appear actual data you have to provide the encoding buffer "utf-8"

    try {
      const data = await fs.readFile('readme.txt','utf-8');
      console.log(data)
    } catch (error) {
      console.log(error);
    }

    // appendfile 

    try {
      await fs.appendFile('readme.txt', 'Everyone')
    } catch (error) {
      console.log(error);
    }

    // to check the information

    try {
      const stats = await fs.stat
    } catch (error) {
      console.log(error);
    }