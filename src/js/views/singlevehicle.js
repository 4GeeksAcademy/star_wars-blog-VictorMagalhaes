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
        <div className="card-single">
                <img src="https://www.cnet.com/a/img/resize/088b73f8a694457fcdd0551af892b37971a2b22a/hub/2015/02/05/dacccbeb-a855-4605-b581-d7f61975fdd5/star-wars-vehicles-millennium-falcon-1.jpg?auto=webp&width=1200" className="card-img-single" alt="..."></img>
                <div className="card-body-single">
                    {oneVehicle ? (
                    <div className="text-center">
                        <h1 className="card-title mt-3 mb-4">{oneVehicle.properties.name}</h1>
                            <p className="card-text">
                                <p className='mt-0 mb-0'>Model: {oneVehicle.properties.model}</p>
                                <p className='mt-0 mb-0'>Crew: {oneVehicle.properties.crew}</p>
                                <p className='mt-0 mb-0'>Capacity: {oneVehicle.properties.capacity}</p> 
                                <p className='mt-0 mb-0'>Cost: {oneVehicle.properties.cost}</p>
                                <Link to="/">
                                    <span className="btn btn-primary btn-lg my-5 text-center" href="#" role="button">
                                        Back home
                                    </span>
                                </Link>
                            </p>
                    </div>
                    ) : (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )
                    }            
                </div>
        </div>
    )
}

export default SingleVehicle;