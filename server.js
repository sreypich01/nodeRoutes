const express = require('express');
const app = express();
const port =3000;
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/comment');
const commentRoutes = require('./routes/post');

app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/user', commentRoutes);
app.get('/', (req, res)=> res.send("hello"));

app.listen(port, ()=>console.log(`Server is runing on localhost:${port}`));
