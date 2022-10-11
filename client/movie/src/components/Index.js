import React from 'react'
import { gql,useQuery } from "@apollo/client";
//import { AiFillAccountBook } from "@react-icons/all-files/ai/AiFillAccountBook.esm";

export const GET_MOVIES = gql`
{
    getMovies {
        _id
        titulo
		imagen
		descripcion
		likes
		user
    }
}
`;

export default function Index() {

	const { loading, error, data } = useQuery(GET_MOVIES);

	if (error) {
		return <h1>Error : {{ error }}</h1>;
	}

	return (
		<div className="row">
			<div className="wrapper">
				 { data && data.getMovies.map(({ _id, titulo, imagen, descripcion, likes } ) => (
					<div key={_id} className="card m-2" >
						<div class="card-header text-center align-middle"><h4>{titulo}</h4></div>
						<div className="card-body">
							<p>{descripcion}</p>												
						 </div>
						 <div class="card-footer text-muted" style={{maxHeight: "300px",padding:"0px"}}>
						 	<img alt='imagen' width="100%" style={{maxHeight: "200px"}} src={ imagen } />							 
  						</div>
						 <button className="btn btn-success">Like ({likes})</button>
					</div>
				))} 
			</div>
			
		</div>
	);
};