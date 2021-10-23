const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 5000;
const users = [
  { id: 2, name: "sakib" },
  { id: 3, name: "pakib" },
  { id: 4, name: "nakib" },
];
app.get('/user',(req,res)=>{
  res.send(users)
})
app.get("/user", (req, res) => {
  const search = req.query.search;
  if (search) {
    const result = users.filter((user) => {
      user.name.toLocaleLowerCase().includes(search);
    });
    res.send(result);
  } else {
    res.send(users);
  }
});
app.get("/fruits", (req, res) => {
  res.send(["fozli", "anar"]);
});

//app.Method
app.post('/user',(req,res)=>{
  const newUser=req.body;
  newUser.id=users.length;
  users.push(newUser);
  res.json(newUser);
})

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});
app.listen(port, () => {
  console.log("listening to port", port);
});
