const express = require("express");
const connectDB = require("./config/db");
const app = express();

//connecting with database 
connectDB();

//Init Middleware
app.use(express.json({extended:false}));

app.get('/',(req,res) => res.send('API Running P'));

//define routes
app.use('/api/auth',require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log(`Server Started on PORT ${PORT}`));
