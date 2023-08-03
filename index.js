const users = require("./user");
  
console.log(users);
const config = require('config');
port = config.get(3001);
app.listen(port);

var fs = require('fs');
var file_content = fs.readFileSync("development.json");
var content = JSON.parse(file_content);
content.SERVER.port = 3001;
fs.writeFileSync("dev.json", JSON.stringify(content));
/* const customer = require('./user.json');
console.log(customer); */

const fs = require('fs');
/* fs.readFile('./user.json','utf-8',(err,jsonString)=>{
  if(err){
    console.log(err);
  }else{
    try {
      const data = JSON.parse(jsonString);
      console.log(data);
    } catch (err) {
      console.log('Error Parsing JSON',err);
    }
  }
}) */

function jsonReader(filePath,cb){
  fs.readFile(filePath,'utf-8',(err,fileData)=>{
    if(err){
      console.log(err);
    }else{
      try {
        const object = JSON.parse(fileData);
        return cb && cb(null,object);
      } catch (err) {
        return cb && cb(err);
      }
    }
  })
}

 jsonReader('./user.json',(err,data)=>{
  if(err){
    console.log(err);
  }
  else{
    fs.writeFile('./newUser.json',JSON.stringify(newObj,null,2),err=>{
    if(err){
      console.log(err);
    }
    });
  }
}); 

const newObj = {
  name:'Manoj',
  number:984583457,
  order :12,
  address:'Bengaluru'
};
/* {
    "name": "Smith",
    "age": 25,
    "language": ["PHP", "Go", "JavaScript"]
} */

const jsonString = JSON.stringify(newObj);
console.log(jsonString);

fs.writeFile('./newUser.json',JSON.stringify(newObj,null,2),err=>{
  if(err){
    console.log(err);
  }
  else{
    console.log('File successfully written!')
  }
})
