import fs from "fs";

fs.readFile("file.txt", function(err , dat){
    if(err){
        console.log(err);
    }
    else{
        console.log(dat.toString());
    }
});

fs.readFile("mytext.txt", function(err , dat){
    if(err){
        console.log(err);
    }
    else{
        console.log(dat.toString());
    }
});  