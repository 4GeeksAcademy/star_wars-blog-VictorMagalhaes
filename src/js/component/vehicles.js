import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


const Vehicle = (props) => {

    console.log('vehicle', props.vehicle);

    const navigate = useNavigate ()

    const {store, actions} = useContext(Context);

    const [vehicle, setVehicle] = useState()

    useEffect(() => {
        getVehicle()
    },[])

    const getVehicle = () => {
        fetch('https://www.swapi.tech/api/vehicles/' + props.vehicle.uid, {
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
            setVehicle(data.result.properties); //this will print on the console the exact object received from the server
		})
		.catch(error => {
			console.log(error);
		});
    }

    return (
        <div className="card card-body">
            <img src="https://www.cnet.com/a/img/resize/088b73f8a694457fcdd0551af892b37971a2b22a/hub/2015/02/05/dacccbeb-a855-4605-b581-d7f61975fdd5/star-wars-vehicles-millennium-falcon-1.jpg?auto=webp&width=1200" className="card-img-top" alt="..." style={{ borderRadius: 5 }}></img>
            <div className="card-body">
                <h5 className="card-title mt-3 mb-4">
                    <p>{props.vehicle.name}</p>
                </h5>
                    {vehicle ? (
                        <p className="card-text">
                            <p className='mt-0 mb-0'>Model: {vehicle.model}</p>
                            <p className='mt-0 mb-0'>Crew: {vehicle.crew}</p>
                            <p className='mt-0 mb-0'>Capacity: {vehicle.cargo_capacity}</p> 
                            <p className='mt-0 mb-0'>Cost: {vehicle.cost_in_credits}</p>
                            
                        </p>
                    ) : (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
            </div>
            <div className="card_buttons">
                    <button type="button" className="card-link btn-primary rounded" 
                        onClick={() => navigate("/singlevehicle/" + props.vehicle.uid )}
                        >Learn More
                    </button>
                    <button type="button" className="btn_favorite" onClick={() => {
                        actions.addFavorite(props.vehicle.name)}}
                        ><i className="far fa-heart"></i>
                    </button>               
                </div> 
        </div>
    )
}

export default Vehicle;