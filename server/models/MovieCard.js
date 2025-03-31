import { Schema, model } from "mongoose";

const movieCardSchema = new Schema({
        title: String,
        year: String,
        genre: String,
        thumbnail: String
});

const MovieCard = model("MovieCard", movieCardSchema );

export default MovieCard;