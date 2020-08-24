import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <div>
    <p><strong> { props.descricaoEmail } </strong> { props.email } </p>
    <p> <strong>{ props.descricaoEndereco } </strong> { props.endereco } </p>
            </div>
        </div>
    )
}

export default CardPequeno;