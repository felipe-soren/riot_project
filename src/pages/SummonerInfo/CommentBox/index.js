import React, { Component } from 'react';
import Api from '../../../service/riot_api_backend'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Container } from './styles';

export default class CommentBox extends Component {
  state = {
    commentInput: "",
    user: "",
  }

  responseFacebook = (response) => {
    console.log(response);
    localStorage.setItem("name", response.name);
    localStorage.setItem("picture", response.picture.data.url);
  }
  
  sendComment = async (e) => {
    e.preventDefault()
    await Api.post(`/comment`, {
      userName: localStorage.getItem("name"),
      content: this.state.commentInput,
      avatarUrl: localStorage.getItem("picture"),
      summonerId: this.props.summonerInfo.summonerId
    })
    window.location.reload();
  }

  loggof = async (e) => {
    e.preventDefault()
    localStorage.removeItem("name")
    window.location.reload();
  }

  render() {
    return (
      <Container>
        <form className="fr" onSubmit={this.sendComment}>
        {(localStorage.getItem("name")) ? (
          <div className="logged">
          <span className="user-logged">Você está logado como: {localStorage.getItem("name")}</span>
          <span className="exit" onClick={this.loggof}>Sair</span>
          </div>
        ) : (null)}
        <textarea className="message" rows="3" 
        placeholder="Como foi a experiência com esse jogador?"
        onChange={e => this.setState({commentInput: e.target.value})}>
        </textarea>
        {(localStorage.getItem("name")) ? (
          <button>ENVIAR</button>
        ) : (
          <FacebookLogin
          appId="2244642185826213" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={this.responseFacebook}
          isSdkLoaded ={console.log('carregado')}
          render={renderProps => (
            <button onClick={renderProps.onClick}>ENVIAR</button>
          )}
          />
        )}
        </form>
      </Container>  
    )
  }
}
