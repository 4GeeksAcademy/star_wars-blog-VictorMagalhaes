import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
				<Link to="/">
					<img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" width="200" alt="star wars logo" height="24" class="d-inline-block align-text-top"/>
                    Bootstrap
                </Link>
				<br/>
				<Link to="/">
					<div class="dropdown">
						<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">Action</a></li>
							<li><a class="dropdown-item" href="#">Another action</a></li>
							<li><a class="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
						<button className="btn btn-primary"></button>
                </Link>
				
            </div>
        </nav>
    )
}
