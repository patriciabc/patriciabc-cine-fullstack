import React from 'react'
import { gql,useQuery,useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";


export const GET_MOVIES_USER = gql`
    query getMoviesByUser(
        $user: String!
    ){
        getMoviesByUser(user:$user) {
            _id
            titulo
            imagen
            descripcion
            likes
        }
    }
`;

export default function Home() {
	const navigate = useNavigate();

	const REMOVE_MOVIE = gql`
		mutation removeMovie(
			$_id: String!
		) {
			removeMovie(_id: $_id){
			_id
			titulo
			descripcion
			}
		}
	`;

	const LIKE_MOVIE = gql`
		mutation likeMovie(
			$_id: String!
		) {
			likeMovie(_id: $_id){
			_id
			titulo
			descripcion
			likes
			}
		}
	`;	
    const user = localStorage.getItem("user")
	const { loading, error, data } = useQuery(GET_MOVIES_USER,{variables:{user}});

	const [removeMovie] = useMutation(REMOVE_MOVIE, {
		//fetch the list of the current documents in the database
		refetchQueries : [{query : GET_MOVIES_USER,variables:{user}} ]
	})

	const [likeMovie] = useMutation(LIKE_MOVIE, {
		//fetch the list of the current documents in the database
		refetchQueries : [{query : GET_MOVIES_USER,variables:{user}} ]
	})


	if (error) {
		return <h1>Error : {{ error }}</h1>;
	}

	return (
		<div className="row">
			<div className="wrapper">
				 { data && data.getMoviesByUser.map(({ _id, titulo, imagen, descripcion, likes } ) => (
					<div key={_id} className="card m-2" >
						<div class="card-header text-center align-middle"><h4>{titulo}</h4></div>
						<div className="card-body">
							<p>{descripcion}</p>												
						 </div>
						 <div class="card-footer text-muted" style={{maxHeight: "300px",padding:"0px"}}>
						 	<img alt='imagen' width="100%" style={{maxHeight: "200px"}} src={ imagen } />							 
  						</div>
						  <button className="btn btn-danger" 
						 onClick={async (e)=>{
								await removeMovie( { variables: { _id } } )
								navigate("/Home")
						 }}> Delete</button>
						 <button className="btn btn-success" 
						 	onClick={async (e)=>{
								await likeMovie( { variables: { _id } } )
								navigate("/Home")
					 		}}
						 >Like ({likes})</button>				 
						 
					</div>
				))} 
			</div>
			
		</div>
	);
};