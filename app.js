const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = 3001;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

let users = [
  {
    email: "admin@email.com",
    password: "Password@1",
    token: "123qadad1231231dawd12123",
    type: "admin",
  },
  {
    email: "user@email.com",
    password: "Password@2",
    token: "awdadawd123awd1231312312adwdawd",
    type: "user",
  }
];

let appData = [
  { name: "Manoj", age: 25, time: "9 AM", gender: "Male" },

  {
    name: "Tom",
    age: 43,
    time: "10 AM",
    gender: "male",
  },

  { name: "Aruna", age: 15, time: "11 AM", gender: "female" },

  {
    name: "king",
    age: 70,
    time: "16:30 PM",
    gender: "male",
  },

  {name: "Bheem", age: 26, time: "13:45 PM", gender: "male" },

  {
    name: "jasmine",
    age: 42,
    time: "15:40 PM",
    gender: "female",
  },

  {
    name: "Amy",
    age: 27,
    time: "15:35 PM",
    gender: "female",
  },

  {
    name: "Kelvinator",
    age: 29,
    time: "13:15 PM",
    gender: "male",
  },

  {
    name: "Rose",
    age: 38,
    time: "17:15 PM",
    gender: "female",
  },

  { name: "Angel", age: 32, time: "20:15 PM", gender: "Female" },
];

/* app.post('/appointment',(req,res)=>{
  const formData = req.body;
  console.log(formData);
  res.status(200).json({message:'Form Data received successfully'});
})
 */
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const userIndex = users.findIndex((user) => user.email === email);

  if (userIndex >= 0) {
    if (users[userIndex].password === password) {
    }
    res.send({ status: 200, msg: "user found ", user: users[userIndex] });
  } else {
    res.send({ status: 500, msg: "user not foound" });
  }
});
app.post("/appoint", (req, res) => {
  const { age,name,gender,time } = req.body;
  const userIndex = appData.findIndex((appData) => appData.name === appData.name);

  if (userIndex >= 0) {
    if (appData[userIndex].gender === gender) {
      console.log(age,name,gender,time)
    }
    res.send({ status: 200, msg: "user found ", appData: appData[userIndex] });
  } else {
    res.send({ status: 500, msg: "user not foound" });
  }
});

app.get("/users", (req, res) => {
  setTimeout(() => {
    res.send({ status: 200, msg: "all user appointment", appData });
  }, 1000);
});

app.post("/add", (req, res) => {
  console.log("req.data", req.body);
  const { email, password } = req.body;

  setTimeout(() => {
    if (email && password) {
      users = [...users, { username, gender, id: Math.random() }];
      res.send({ status: 200, msg: "all added ", users });
    } else {
      res.send({ status: 500, msg: "something went wrong" });
    }
  }, 1000);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
