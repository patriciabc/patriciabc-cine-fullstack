import { Schema, model } from "mongoose";

const movieSchema = new Schema({
	titulo: {
		type: String,
		required: true,
	},
	imagen: {
		type: String,
		required: true,
	},
	descripcion: {
		type: String,
		required: true,
	},
    likes: {
		type: Number,
		default: 0 
	},
	user:{
		type: Schema.Types.ObjectId,
		ref: 'Genre',
		required: true,
	}
});

export default model("Movies_Catalog", movieSchema);