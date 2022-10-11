import React from "react";
import { Link } from "react-router-dom";

console.log("user",localStorage.getItem("user"));

export const Navigation = () => (
	
	<nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
		<Link className="navbar-brand" to="/">
			Oura Movies
		</Link>
		<button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbar"
		>
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbar">
			<ul className="navbar-nav ms-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/Home">
						Mis Películas
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/new-movie">
						Crear Película
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/login">
						login
					</Link>
				</li>				
			</ul>
		</div>
	</nav>
);