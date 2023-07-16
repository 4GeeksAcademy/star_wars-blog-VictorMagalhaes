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
        <div className="card card-body">
            <img src="https://denvercatholic.org/wp-content/uploads/2016/02/starwarshorizontal.jpg" className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title mt-3 mb-4">
					{props.character.name}
                </h5>
                {character ? (
                <p className="card-text">
                    <p className='mt-0 mb-0'>Gender: {character.gender}</p>
                    <p className='mt-0 mb-0'>Hair Color: {character.hair_color}</p> 
                    <p className='mt-0 mb-0'>Eye Color: {character.eye_color}</p>
                </p>
                ) : (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
            </div>
                <div className="card_buttons">
                    <button type="button" className="card-link btn-primary rounded" 
                        onClick={() => navigate("/singlecharacter/" + props.character.uid )}
                        >Learn More
                    </button>
                    <button type="button" className="btn_favorite" onClick={() => {
                         actions.addFavorite(props.character.name)}}>
                        <i className="far fa-heart"></i>
                    </button>              
                </div>          
        </div>
    )

}

export default Character;
