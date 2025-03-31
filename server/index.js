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
import MovieCard from './models/MovieCard.js';

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if (conn) {
        console.log("Mongo DB connected successfully");
    }
};


app.get("/health",(req, res) => {
    res.status(200).json({ message: 'Server is healthy!' });
});


app.get("/movies", async(req, res) => { 

    const newMovies = MovieCard.find();
    return res.status(200).json({
        success: true,
        data: newMovies,
        message: "Movies fetched successfully",
    });
});

app.post("/movies", async(req, res) => {

    const { title, year, genre, thumbnail } = req.body;

    const newMovieCard = new MovieCard ({
        title,
        year,
        genre,
        thumbnail
    });

    const savedMovieCard = await newMovieCard.save();

    return res.status(201).json({
        success: true,
        dasta: savedMovieCard,
        message: "Movie card created successfully"
    });
});



const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
});














