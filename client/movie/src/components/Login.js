import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
//import jwt from 'jwt-simple'

export default function MessageForm() {

	const navigate = useNavigate();

	const LOGIN_USER = gql`
        mutation getUserLogin(
            $user: String!
            $password:String!
        ) {
            getUserLogin(user: $user, password: $password, ){
            _id
            user
            password
            }
        }      
	`;


	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");

	const [loginUser] = useMutation( LOGIN_USER)

	return (
		<div className="row">
			<div className="col-md-6 offset-md-3">
                <h3>INICIAR SESION</h3>
				<div className="card">
					<div className="card-body">
						<form
							onSubmit={ async( e ) => {
								e.preventDefault();								
                                const login = await loginUser( { variables: { user, password } } )  

                                const payload = login.data.getUserLogin;                                													
                                //const token = jwt.encode(payload,"ballardo2022");                                
                                localStorage.setItem("user",payload._id)

                                navigate("/Home")
							}}
						>
							<div className="mb-3">
								<label className="form-label">
									Usuario
								</label>
								<input
									type="text"
									className="form-control"
									value={user}
									onChange ={ (e) => setUser(e.target.value)}
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">
									Password
								</label>
								<input
									type="password"
									className="form-control"
									value={password}
									onChange ={ (e) => setPassword(e.target.value)}
								/>
							</div>

							<button className="btn btn-success btn-block">INICIAR SESION</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}