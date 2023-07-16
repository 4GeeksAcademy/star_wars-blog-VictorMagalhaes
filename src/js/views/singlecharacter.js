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
            <div className="card-single">
                <img src="https://denvercatholic.org/wp-content/uploads/2016/02/starwarshorizontal.jpg" className="card-img-single" alt="..."></img>
                <div className="card-body-single">
                    {oneCharacter ? (
                        <div className="text-center">
                            <h1 className="card-title mt-3 mb-4">
                            {oneCharacter.properties.name}
                            </h1>
                                <p className="card-text">
                                    <p className='mt-0 mb-0'>Gender: {oneCharacter.properties.gender}</p>
                                    <p className='mt-0 mb-0'>Birth Year: {oneCharacter.properties.birth_year}</p>
                                    <p className='mt-0 mb-0'>Height: {oneCharacter.properties.height}</p>
                                    <p className='mt-0 mb-0'>Hair Color: {oneCharacter.properties.hair_color}</p> 
                                    <p className='mt-0 mb-0'>Eye Color: {oneCharacter.properties.eye_color}</p>
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
                    )}
                </div>
            </div>
        )
    
    }
export default SingleCharacter;
