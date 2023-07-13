import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Character = (props) => {

    const navigate = useNavigate ()

    const {store, actions} = useContext(Context);

    console.log('character', props.character);
    
    const [character, setCharacter]= useState()

    useEffect (() => {
        getCharacter()
    }, [])

    const getCharacter = () => {
        fetch("https://www.swapi.tech/api/people/"+ props.character.uid,{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCharacter(data.result.properties);
        })
        .catch(err => console.error(err))
    }

    return (
        <div class="card card-body">
            <img src="https://denvercatholic.org/wp-content/uploads/2016/02/starwarshorizontal.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title mt-3 mb-4">
					{props.character.name}
                </h5>
                {character ? (
                <p class="card-text">
                    <p class='mt-0 mb-0'>Gender: {character.gender}</p>
                    <p class='mt-0 mb-0'>Hair Color: {character.hair_color}</p> 
                    <p class='mt-0 mb-0'>Eye Color: {character.eye_color}</p>
                </p>
                ) : (
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                )}
                <div className="card_buttons">
                    <a href="" className="card-link" 
                        onClick={() => navigate("/singlecharacter/" + props.character.uid )}
                        >Learn More
                    </a>
                    <button type="button" class="btn btn-light p-0" onClick={() => {
                         actions.addFavorite(props.character.name)}}>
                        Favorite
                    </button>              
                </div> 
            </div>
        </div>
    )

}

export default Character;
