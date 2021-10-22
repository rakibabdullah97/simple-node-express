const express = require('express');
const cors = require('cors')
const app = express();
// const port = process.env.PORT || 3000;
const port = 5000;

app.use(cors()) 
app.use(express.json())


app.get('/', (req, res) => {
    res.send('hello from node iii am  changing u a bit and i am witnessing nod mon')
})

const users = [
    { id: 0, name: 'shabana,', email: 'sanaba@gmail.com', phone: "123" },
    { id: 1, name: 'shabana,', email: 'sanaba@gmail.com', phone: "123" },
    { id: 2, name: 'bananur,', email: 'sanaba@gmail.com', phone: "123" },
    { id: 3, name: 'sarabonti,', email: 'sanaba@gmail.com', phone: "123" },
    { id: 4, name: 'sonia,', email: 'sanaba@gmail.com', phone: "123" },
    { id: 5, name: 'ssusmita,', email: 'sanaba@gmail.com', phone: "123" },
    { id: 6, name: 'golddigger', email: 'sanaba@gmail.com', phone: "123" }
]

app.get('/users', (req, res) => {
    const search = req.query.search;

    //use quary parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
});

//app.METHOD
app.post('/users',(req,res)=>{
    const newUser =req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log('hitting post',req.body)
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('tok jal fazli amm')
})



app.listen(port, () => {
    console.log('listening to port', port)
});
