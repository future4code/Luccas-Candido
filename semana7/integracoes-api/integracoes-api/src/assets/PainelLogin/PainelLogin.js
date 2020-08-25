import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const ContainerLogin = styled.div`
display: flex;
flex-direction: column;
width: 30vw;
border: 1px solid black;
align-items: center;
padding: 16px;
margin-top: 30vh;
`

const LabelDiv = styled.div`
display: flex;
justify-content: center;
margin: 8px;
`

const SaveButton = styled.button`
background-color: #3451c2;
border: none;
padding: 16px;
color: white;
width: 80px;
height: 30px;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
`

export default class PainelLogin extends React.Component {

    state = {
        inputNome: "",
        inputEmail: "",
    }

    // Valores Input Nome
    onChangeNome = (event) => {
        this.setState({ inputNome: event.target.value })
        console.log(this.state.inputNome)

    }
    // Valores Input Email
    onChangeEmail = (event) => {
        this.setState({ inputEmail: event.target.value })
        console.log(this.state.inputEmail)

    }

    // Criando usuário
    createUser = () => {

        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        }

        const request = axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            {
                headers: {
                    Authorization: "luccas-barros-jackson"
                }
            })

        request
            .then((response) => {
                alert(`Usuário ${this.state.inputNome} cadastrado com sucesso!`)
                this.setState({ inputNome: "", inputEmail: "" })
            })
            .catch((erro) => {
                console.log(erro)
            })

    }



    render() {




        return (

            <ContainerLogin>

                <LabelDiv>
                    <label>Nome:</label>
                    <input
                        value={this.state.inputNome}
                        onChange={this.onChangeNome} />
                </LabelDiv>

                <LabelDiv>
                    <label>Email:</label>
                    <input
                        value={this.state.inputEmail}
                        onChange={this.onChangeEmail} />
                </LabelDiv>

                <SaveButton onClick={this.createUser}>Salvar</SaveButton>

            </ContainerLogin>
        )
    }
}