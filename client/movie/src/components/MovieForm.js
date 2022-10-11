import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_MOVIES_USER } from "./Home.js";

export default function MessageForm() {

	const navigate = useNavigate();

	const CREATE_MOVIE = gql`
        mutation createMovie(
            $titulo: String!
            $imagen: String!
            $descripcion: String!
            $user: String!
        ) {
            createMovie(titulo: $titulo, imagen: $imagen, descripcion: $descripcion, user:$user) {
            _id
            titulo
            descripcion
            likes
            user
            }
        }
	`;

	const [descripcion, setDescripcion] = useState("");
	const [titulo, setTitulo] = useState("");
	const [imagen, setImagen] = useState( "" );
	const iduser = localStorage.getItem("user")
    const [user, setUser] = useState(iduser );
	
	const [createMovie] = useMutation( CREATE_MOVIE, {
		//fetch the list of the current documents in the database
		refetchQueries : [{query : GET_MOVIES_USER,variables:{user}} ]
	})

	return (
		<div className="row">
			<div className="col-md-6 offset-md-3">
                <h3>CREAR PELICULA</h3>
				<div className="card">
					<div className="card-body">
						<form
							onSubmit={ async( e ) => {
								e.preventDefault();
								//creating the new document in the collection
                                console.log("user=>",user)
								await createMovie( { variables: { titulo, descripcion, imagen, user } } )
								//redirect to the list
								navigate("/Home")
								
							}}
						>
							<div className="mb-3">
								<label className="form-label">
									Titulo
								</label>
								<input
									type="text"
									className="form-control"
									value={titulo}
									onChange ={ (e) => setTitulo(e.target.value)}
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">
									Descripción
								</label>
								<input
									type="text"
									className="form-control"
									value={descripcion}
									onChange ={ (e) => setDescripcion(e.target.value)}
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">
									Imagen
								</label>
								<input
									type="text"
									className="form-control"
									value={imagen}
									onChange ={ (e) => setImagen(e.target.value)}
								/>
							</div>

							<button className="btn btn-success btn-block">guardar</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}