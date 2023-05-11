import { useNavigate } from "react-router-dom";

export function TipusCreatePage() {
    const navigate = useNavigate();

    return (
        <div>
            <br></br>
            <h2 className="text-center">Új típus</h2>
            <div className="container card bg-light">
                <form
                    onSubmit={(event) => {
                        event.persist();
                        event.preventDefault();
                        fetch(`https://localhost:7082/api/UjTipusok`, {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                megnevezes: event.target.elements.megnevezes.value,
                                leiras: event.target.elements.leiras.value,
                                kepek: event.target.elements.kep.value,
                            }),
                        })
                            .then(() => {
                                navigate("/");
                            })
                            .catch(console.log);
                    }}>
                    <br></br>
                    <div className="form-group">
                        <label>Megnevezés</label>
                        <input type="text" className="form-control" name="megnevezes"></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Leírás</label>
                        <input type="text" className="form-control" name="leiras"></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Kép név</label>
                        <input type="text" className="form-control" name="kep"></input>
                    </div>
                    <button type="form-group button" className="btn btn-secondary m-2">Mentés</button>
                </form>
            </div>
        </div>
    );
}
export default TipusCreatePage;