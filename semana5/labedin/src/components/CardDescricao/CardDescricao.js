import React from 'react';
import './CardDescricao.css'

function CardDescricao(props) {
    return (
        <div className="bigcard-container">
            <div>
                <p>{ props.paragrafo }</p> <br />
                <p>{ props.paragrafo1 }</p> <br />
                <p>{ props.paragrafo2 }</p> <br />
            </div>
        </div>
    )
}

export default CardDescricao;