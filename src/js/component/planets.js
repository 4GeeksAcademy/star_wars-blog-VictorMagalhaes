import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Planet = (props) => {

    const navigate = useNavigate ()

    const {store, actions} = useContext(Context);

    console.log('planet', props.planet);

    const [planet, setPlanet] = useState()

    useEffect(() => {
        getPlanet()
    },[])

    const getPlanet = () => {
        fetch('https://www.swapi.tech/api/planets/' + props.planet.uid, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp => {
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			console.log(data);
            setPlanet(data.result.properties); //this will print on the console the exact object received from the server
		})
		.catch(error => {
			console.log(error);
		});
    }

    return (
        <div class="card card-body">
            <img src="https://mcdn.wallpapersafari.com/medium/58/65/GOS7d8.jpg" class="card-img-top" alt="..." style={{ borderRadius: 5 }}></img>
            <h5 class="card-title mt-3 mb-4">
				<p>{props.planet.name}</p>
            </h5>
                {planet ? (
                    <p class="card-text">
                        <p class='mt-0 mb-0'>Population: {planet.population}</p>
                        <p class='mt-0 mb-0'>Terrain: {planet.terrain}</p> 
                    </p>
                ) : (
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            )}
            <div className="card_buttons">
                    <a href="" className="card-link" 
                        onClick={() => navigate("/singleplanet/" + props.planet.uid )}
                        >Learn More
                    </a>
                    <button type="button" class="btn btn-light p-0" onClick={() => {
                        actions.addFavorite(props.planet.name)}}
                        >Favorite
                    </button>               
                </div> 
        </div>
    )
}

export default Planet;