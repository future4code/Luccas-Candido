import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import Icone from './../../img/delete.svg'
import App from './../../App'

const DivContainerLista = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`

const IconCursor = styled.img`
cursor: pointer;
`

export default class ListaUsuarios extends React.Component {

    state = {
        userList: []
    }

    deleterUser = (id) => {
        const request = axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                Authorization: "luccas-barros-jackson"
            }
        })

        request.then((response) => {
            alert('Item deletado')
        }).catch((erro) => {
            alert('Não foi possível deletar.')
        })
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
        return <p key={user.id}> {user.name} <IconCursor src={Icone} onClick={() => this.deleterUser(user.id)}/></p>
          })



        return (

            <DivContainerLista>
                <h1>Usuários cadastrados:</h1>
                    {userListRender}
            </DivContainerLista>
        )
    }
}