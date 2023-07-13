import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SinglePlanet = () => {

    const params = useParams ()

    const [onePlanet, setOnePlanet] = useState()

    useEffect(() => {
        getOnePlanet()
    },[])

    const getOnePlanet = () => {
        fetch('https://www.swapi.tech/api/planets/' + params.uid,{
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
            setOnePlanet(data.result); //this will print on the console the exact object received from the server
		})
		.catch(error => {
			console.log(error);
		});
    }

    return (
        <div class="card">
                <img src="https://mcdn.wallpapersafari.com/medium/58/65/GOS7d8.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    {onePlanet ? (
                    <div className="text-center">
                        <h5 class="card-title mt-3 mb-4">
                        {onePlanet.name}
                        </h5>
                            <p class="card-text">
                                <p class='mt-0 mb-0'>Population: {onePlanet.population}</p>
                                <p class='mt-0 mb-0'>Terrain: {onePlanet.terrain}</p>
                                <p class='mt-0 mb-0'>Climate: {onePlanet.climate}</p>
                                <p class='mt-0 mb-0'>Gravity: {onePlanet.gravity}</p> 
                                <p class='mt-0 mb-0'>Rotation Period: {onePlanet.rotation_period}</p>
                            </p>
                    </div>
                    ) : (
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    )}
                </div>
                    <Link to="/">
                        <span className="btn btn-primary btn-lg" href="#" role="button">
                            Back home
                        </span>
                    </Link>
        </div>
    )
}

export default SinglePlanet;