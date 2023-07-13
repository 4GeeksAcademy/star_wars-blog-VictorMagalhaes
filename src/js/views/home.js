import React, { useState, useEffect } from "react";
import Character from "../component/characters.js";
import Planet from "../component/planets.js";
import Vehicle from "../component/vehicles.js";

import "../../styles/home.css";

export const Home = () => {
	const [characters, setCharacters] = useState([])
	const [planets, setPlanets] = useState([])
	const [vehicles, setVehicles] = useState([])

	useEffect(() =>{
	getPeople()
	getPlanets()
	getVehicles()
	}, [])

	const getPeople = () =>{
		fetch('https://www.swapi.tech/api/people/', {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			setCharacters(data.results)
		})
		.catch(err => console.error(err))	
	}

	const showCharacters = () => {
		return characters.map((character) => {
			return <Character character={character} />
		})
	}

	const getPlanets = () =>{
		fetch('https://www.swapi.tech/api/planets/', {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			setPlanets(data.results)
		})
		.catch(err => console.error(err))	
	}

	const showPlanets = () => {
		return planets.map((planet) => {
			return <Planet planet={planet} />
		})
	}

	const getVehicles = () =>{
		fetch('https://www.swapi.tech/api/vehicles/', {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			setVehicles(data.results)
		})
		.catch(err => console.error(err))	
	}

	const showVehicles = () => {
		return vehicles.map((vehicle) => {
			return <Vehicle vehicle={vehicle} />
		})
	}

	return (
		<div className="scrollmenu" >
			<div class="py-2" style={{overflowX: 'auto', overflowY: 'hidden', paddingLeft: '10', paddingRight: '10'}}>
				<h2 class="font-weight-light">Characters</h2>
				<div class="d-flex flex-row flex-nowrap">
					{characters.length !== 0 ? showCharacters() : (
						<div class="spinner-border" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
					)}
				</div>
			</div>
			<div class="py-2" style={{overflowX: 'auto', overflowY: 'hidden', paddingLeft: '10', paddingRight: '10'}}>
				<h2 class="font-weight-light">Planets</h2>
				<div class="d-flex flex-row flex-nowrap">
					{planets.length !== 0 ? showPlanets() : (
						<div class="spinner-border" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
					)}
				</div>				
			</div>
			<div class="py-2" style={{overflowX: 'auto', overflowY: 'hidden', paddingLeft: '10', paddingRight: '10'}}>
				<h2 class="font-weight-light">Vehicles</h2>
				<div class="d-flex flex-row flex-nowrap">
					{vehicles.length !== 0 ? showVehicles() : (
						<div class="spinner-border" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
					)}
				</div>				
			</div>
		</div>
	)
};

