import React, { Component } from 'react';

import { Container, Form } from './styles';


export default class Main extends Component {
  state = {
    summonerInput: "",
    summonerInfo: "",
    soloInfo: "",
    flexInfo: ""
  }
  
  searchSummoner = async (e) => {
    e.preventDefault()
    this.props.history.push({ pathname: `/summoner/${this.state.summonerInput}`, 
    state: { summonerName: this.state.summonerInput } });
  }

  render() {
    return (
      <Container>
        <Form  onSubmit={this.searchSummoner}>
          <input type="text" 
          placeholder="Digite o Invocador"
          onChange={e => this.setState({ summonerInput: e.target.value })}/>
          <button type="submit">OK</button>
        </Form>
      </Container>
    );
  }
}
