import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const {store, actions} = useContext(Context);

    return (
        <nav className="navbar">
            <div className="logo">
				<Link to="/">
					<img src="https://logowik.com/content/uploads/images/528_star_wars.jpg" width="200" alt="star wars logo" height="80" bg="light" className="d-inline-block align-text-top"/>
                  
                </Link>
			</div>
				<br/>
				<div className="btn-group mx-5">
					<button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="dropdownMenuClickableInside" aria-expanded="false">
						Favorites <span className="bg-light rounded p-1 text-secondary text-center">{store.favorite.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="dropdownMenuClickableInside">
						{store.favorite.map((fav, index) => {
							return(
								<li key={index}>
									<a className="dropdown-item d-flex justify-content-between ps-2 pe-2" href="#">
										{fav}
										<i className="fas fa-trash pt-1"
											onClick={() => {
												actions.deleteFavorite(fav)
											}}
										></i>
									</a>
								</li>
							)})}
					</ul>
				</div>			
        </nav>
    )
}
