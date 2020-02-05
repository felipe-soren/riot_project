import React, { Component } from 'react';
import { mainApi } from '../../../service/riot_api_backend'
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
    await mainApi.post(`/comment`, {
      userName: `Nome ${Math.floor(Math.random() * 100)}`,
      content: this.state.commentInput,
      avatarUrl: `https://api.adorable.io/avatars/190/abott@${Math.random()}.png`,
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
        <textarea className="message" rows="4" 
        maxLength = "180"
        placeholder="Como foi a experiência com esse jogador?"
        onChange={e => this.setState({commentInput: e.target.value})}>
        </textarea>
          <button>ENVIAR</button>
        </form>
      </Container>  
    )
  }
}
