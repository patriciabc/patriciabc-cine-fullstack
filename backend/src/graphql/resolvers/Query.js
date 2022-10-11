import Movies_Catalog from "../../models/Movies_Catalog.js";

const Query = {

    getMovies: async () => {
        return await Movies_Catalog.distinct("titulo").find();
    },
    getMoviesByUser: async (_, { user }) => {
        return await Movies_Catalog.find( {user,});
    } 
}

export default Query;