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
        <div className="card card-body">
            <img src="https://mcdn.wallpapersafari.com/medium/58/65/GOS7d8.jpg" className="card-img-top" alt="..." style={{ borderRadius: 5 }}></img>
            <div className="card-body">
                <h5 className="card-title mt-3 mb-4">
                    <p>{props.planet.name}</p>
                </h5>
                    {planet ? (
                        <p className="card-text">
                            <p className='mt-0 mb-0'>Population: {planet.population}</p>
                            <p className='mt-0 mb-0'>Terrain: {planet.terrain}</p> 
                        </p>
                    ) : (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
            </div>
            <div className="card_buttons">
                    <button type="button" className="card-link btn-primary rounded" 
                        onClick={() => navigate("/singleplanet/" + props.planet.uid )}
                        >Learn More
                    </button>
                    <button type="button" className="btn_favorite" onClick={() => {
                        actions.addFavorite(props.planet.name)}}
                        ><i className="far fa-heart"></i>
                    </button>               
                </div> 
        </div>
    )
}

export default Planet;