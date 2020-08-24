import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSave} from '../IconeSave/IconeSave'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeSave from '../../img/bookmark.svg'
import iconeSaveOrange from '../../img/bookmarkOrange.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    save: false,
    comentarios: [{
      nomeDoUsuario: "",
      valorDoComentario: ""
    }],
    valorInputComentario: ""
  }


  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.numeroCurtidas + 1
    })

    if(this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
 
}

  onClickSave = () => {
    this.setState({
      save: !this.state.save
    })

    if(this.state.save) {
      this.setState({
        save: false
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {

    const novoComentario = {
      valorDoComentario: this.state.valorInputComentario
    }

    const novoArrayComentario = [novoComentario, ...this.state.comentarios]

    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      comentarios: novoArrayComentario
    })
  }

  render() {

    const listaComentario = this.state.comentarios.map((comentario) => {

    })

    let iconeCurtida


    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
      
    }

    let iconeSalvar

    if(this.state.save) {
      iconeSalvar = iconeSaveOrange
    } else {
      iconeSalvar = iconeSave
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    console.log(this.props.fotoPost)

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeSave 
        icone={iconeSalvar}
        onClickIcone={this.onClickSave}
        />


      </div>
      {componenteComentario}
    </div>
  }
}

export default Post