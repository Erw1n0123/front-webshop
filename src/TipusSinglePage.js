import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

export function TipusSinglePage(props) {
    const params = useParams();
    const id = params.tipusId;
    const [tipus, setTipus] = useState([]);

    useEffect(() => {
        fetch(`https://localhost:7082/api/Tipusok/${id}`)
            .then((res) => res.json())
            .then((Tipus) => setTipus(Tipus))
            .catch(console.log)
    }, [id]);

    return (
        <div className="card bg-light col-10" key={tipus.id}
            style={{
                margin: "auto",
                marginTop: "10px",
                marginBottom: "10px"
            }}>
            <div className="card-header">{tipus.megnevezes}</div>
            <div className="card-body">
                <p className="card-text">{tipus.leiras}</p>
            </div>
            <img className="card-img-bottom" src={"/images/" + tipus.kepek} alt={tipus.megnevezes}></img>
        </div>
    );
}
export default TipusSinglePage;