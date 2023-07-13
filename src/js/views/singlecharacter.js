import React, { useEffect, useState} from "react";
import { Link, useParams} from "react-router-dom";



const SingleCharacter = (props) => {

        const params = useParams ()

        const [oneCharacter, setOneCharacter]= useState()
    
        useEffect (() => {
            getOneCharacter()
        }, [])
    
        const getOneCharacter = () => {
            fetch("https://www.swapi.tech/api/people/" + params.uid,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOneCharacter(data.result);
            })
            .catch(err => console.error(err))
        }
    
        return (
            <div class="card">
                <img src="https://denvercatholic.org/wp-content/uploads/2016/02/starwarshorizontal.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    {oneCharacter ? (
                        <div className="text-center">
                            <h5 class="card-title mt-3 mb-4">
                            {oneCharacter.properties.name}
                            </h5>
                                <p class="card-text">
                                    <p class='mt-0 mb-0'>Gender: {oneCharacter.properties.gender}</p>
                                    <p class='mt-0 mb-0'>Birth Year: {oneCharacter.properties.birth_year}</p>
                                    <p class='mt-0 mb-0'>Height: {oneCharacter.properties.height}</p>
                                    <p class='mt-0 mb-0'>Hair Color: {oneCharacter.properties.hair_color}</p> 
                                    <p class='mt-0 mb-0'>Eye Color: {oneCharacter.properties.eye_color}</p>
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
export default SingleCharacter;
