import React, { Component } from 'react';
import Api from '../../../service/riot_api_backend'

import { Container } from './styles';

export default class CommentBox extends Component {
  state = {
    commentInput: ""
  }
  
  sendComment = async (e) => {
    e.preventDefault()
    await Api.post(`/comment`, {
      userName: 'José Manuel',
      content: this.state.commentInput,
      avatarUrl: "http://teste.com",
      summonerId: this.props.summonerInfo.summonerId
    })
    window.location.reload();
  }

  render() {
    return (
      <Container>
        <form className="fr" onSubmit={this.sendComment}>
        <textarea className="message" rows="3" 
        placeholder="Como foi a experiência com esse jogador?"
        onChange={e => this.setState({commentInput: e.target.value})}>
        </textarea>
        <button>ENVIAR</button>
        </form>
      </Container>  
    )
  }
}
