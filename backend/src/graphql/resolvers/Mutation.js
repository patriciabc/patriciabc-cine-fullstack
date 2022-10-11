import Movies_Catalog from "../../models/Movies_Catalog.js";
import Users from "../../models/Users.js";

const Mutation = {
    createMovie: async ( _, { titulo, imagen, descripcion, user } ) => {
        const newMovie = new Movies_Catalog( { titulo, imagen, descripcion, user } );
        return await newMovie.save();
    },
    removeMovie: async ( _, { _id } ) => {
        return await Movies_Catalog.findByIdAndRemove(_id);
    },
    likeMovie: async ( _, { _id } ) => {
        const Movie = await Movies_Catalog.findById(_id)
        const likes = Movie.likes + 1 ;
        const newlike = { likes : likes};
        const updatelike = await Movies_Catalog.findByIdAndUpdate(_id, newlike);
        updatelike.likes = updatelike.likes + 1
        return updatelike
    },
    getUserLogin: async ( _, { user, password }) => {

        console.log(user,password)
        const loginuser = await Users.findOne({user,});
        
        if(password == loginuser.password){
            return loginuser
        }
        
    }   
}

export default Mutation;