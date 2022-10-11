import mongoose from "mongoose";

mongoose
	.connect("mongodb://localhost:27017/netflix-patricia", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => console.log("DB is connected"))
	.catch((err) => console.log(err));