import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleVehicle = () => {

    const params = useParams ()

    const [oneVehicle, setOneVehicle] = useState()

    useEffect(() => {
        getOneVehicle()
    },[])

    const getOneVehicle = () => {
        fetch('https://www.swapi.tech/api/vehicles/'+ params.uid,{
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
            setOneVehicle(data.result); //this will print on the console the exact object received from the server
		})
		.catch(error => {
			console.log(error);
		});
    }


    return (
        <div class="card">
                <img src="https://www.cnet.com/a/img/resize/088b73f8a694457fcdd0551af892b37971a2b22a/hub/2015/02/05/dacccbeb-a855-4605-b581-d7f61975fdd5/star-wars-vehicles-millennium-falcon-1.jpg?auto=webp&width=1200" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    {oneVehicle ? (
                    <div className="text-center">
                        <h5 class="card-title mt-3 mb-4">{oneVehicle.properties.name}</h5>
                            <p class="card-text">
                                <p class='mt-0 mb-0'>Model: {oneVehicle.properties.model}</p>
                                <p class='mt-0 mb-0'>Crew: {oneVehicle.properties.crew}</p>
                                <p class='mt-0 mb-0'>Capacity: {oneVehicle.properties.capacity}</p> 
                                <p class='mt-0 mb-0'>Cost: {oneVehicle.properties.cost}</p>
                            </p>
                    </div>
                    ) : (
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    )
                    }            
                </div>
                <div className="back_home">
                    <Link to="/">
                        <span className="btn btn-primary btn-lg" href="#" role="button">
                            Back home
                        </span>
                    </Link>
                </div>
        </div>
    )
}

export default SingleVehicle;