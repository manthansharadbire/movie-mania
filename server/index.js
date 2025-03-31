// import express from 'express';
// import cors from 'cors';

// const app = express();
// app.use(express.json());
// app.use(cors());


// app.get("/health", (req,res)=> {
//     res.status(200).json({message:"Server is healthy!"})
// })


// const PORT = 5002;


// app.listen(PORT, ()=>{
//     console.log(`Server is running on ${PORT}`);
// });

// import express from 'express';
// import cors from 'cors';

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.get("/health", (req,res)=>{
//     res.status(200).json({message:"Server is healthy"});
// });

// const MOVIE_MANIA = [];


// const PORT = 5002;

// app.listen(PORT, ()=>{
//     console.log(`Server is running on ${PORT}`);
// });


import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if (conn) {
        console.log("Mongo DB connected successfully");
    }
};

const MOVIE_MANIA = [];

app.get("/health", (req, res) => {
    res.status(200).json({ message: 'Server is healthy!' });
});

app.get("/movies", (req, res) => {
    return res.status(200).json({
        success: true,
        data: MOVIE_MANIA,
        message: "Movies fetched successfully",
    });
});

app.post("/movies", (req, res) => {

    const { title, year, genre, thumbnail } = req.body;

    const newMovies = {
        title,
        year,
        genre,
        thumbnail
    };

    MOVIE_MANIA.push(newMovies);

    return res.status(201).json({
        success: true,
        dasta: MOVIE_MANIA,
        message: "Movie card created successfully"
    });
});



const PORT = 5002;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
});














