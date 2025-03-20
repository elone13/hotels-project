import { useEffect } from 'react';
import { Link } from "react-router";
import "./erreur.css"
function Erreur () {


    useEffect(() => {
        document.title = "Page d'erreur";
    }, []);

    return (
        <>
            <div className='notFound'>
                <h1 className='notFound_title'>404</h1>
                <p className='notFound_info'>Oups! La page que vous recherchez n'existe pas.</p>
                <Link to="/" className='notFound_link'>Retourner sur la page d'accueil</Link>
            </div>;

        </>
    );
}

export default Erreur;