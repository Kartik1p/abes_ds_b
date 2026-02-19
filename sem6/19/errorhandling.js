import fs from "fs/promises";
import MongoClient from "mongodb";
import url from "url";

const url = "mongodb://localhost:27017";

const client = new MongoClient.MongoClient(urlObj);

MongoClient.connect(url).then(function(err,db){
    db.collection("user").updateOne({name:"John"}, {$set:{age:30}});
}).catch(error => {        
    console.log(error);
});