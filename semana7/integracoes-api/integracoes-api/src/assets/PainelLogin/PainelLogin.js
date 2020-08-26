import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

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
                    <TextField
                        label="Nome"
                        value={this.state.inputNome}
                        onChange={this.onChangeNome} />
                </LabelDiv>

                <LabelDiv>
                    <TextField
                        label="Email"
                        value={this.state.inputEmail}
                        onChange={this.onChangeEmail} />
                </LabelDiv>

                <Button size="small" 
                variant ="contained" 
                color="primary" 
                startIcon={<SaveIcon />}
                onClick={this.createUser}>Salvar</Button>

            </ContainerLogin>
        )
    }
}