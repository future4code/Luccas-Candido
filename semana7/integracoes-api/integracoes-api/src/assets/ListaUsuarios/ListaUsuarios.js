import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import App from './../../App'

const DivContainerLista = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`

export default class ListaUsuarios extends React.Component {

    state = {
        userList: []
    }

    getUser = () => {

        const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "luccas-barros-jackson"
            }
        })

        request.then((response) => {
            console.log(response)
            this.setState({ userList: response.data })
        }).catch((erro) => {
            console.log('Ocorreu um erro.')
        })
    }

    componentDidMount() {
        this.getUser()
    }

    render() {

        const userListRender = this.state.userList.map((user) => {
            return <p key={user.id}>{user.name}</p>
          })


        return (

            <DivContainerLista>
                <h1>Usuários cadastrados:</h1>
                    {userListRender}
            </DivContainerLista>
        )
    }
}