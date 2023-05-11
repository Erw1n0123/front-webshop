import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function TipusokListPage() {
    const [tipusok, setTipusok] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7082/api/Tipusok")
            .then((res) => res.json())
            .then((Tipusok) => setTipusok(Tipusok))
            .catch(console.log)
    }, []);

    return (
        <div>
            <br></br>
            <h2 className='text-center'>Típusok</h2>
            <div className='container'>
                <div className='row'>
                    {tipusok.map((tipus) => (
                        <div className="card bg-light col-4" key={tipus.id}
                            style={{
                                width: "400px",
                                margin: "auto",
                                marginTop: "10px",
                                marginBottom: "10px"
                            }}>
                            <div className="card-header">{tipus.megnevezes}</div>
                            <div className="card-body">
                                <p className="card-text">{tipus.leiras}</p>
                            </div>
                            <NavLink key={tipus.id} to={"/tipus/" + tipus.id}>
                                <img className="card-img-bottom" src={"images/" + tipus.kepek} alt={tipus.megnevezes}></img>
                            </NavLink>
                        </div>
                    ))}
                </div></div>
        </div>
    )
}

export default TipusokListPage;