import React, { Component } from 'react';
import { riotApi, API_KEY } from '../../service/riot_api_backend'

import { Container, Form } from './styles';


export default class Main extends Component {
  state = {
    summonerInput: "",
    error: false
  }
  
  searchSummoner = async (e) => {
    e.preventDefault()
    console.log(this.state.summonerInput)
    try {
      await riotApi.get(`/summoner/v4/summoners/by-name/${this.state.summonerInput}?api_key=${API_KEY}`)
      this.props.history.push({ pathname: `/summoner/${this.state.summonerInput}`,
      state: { summonerName: this.state.summonerInput } });
    } catch (error) {
      this.setState({ error: true })
    }
  }

  render() {
    return (
      <Container>
        <Form  withError={this.state.error} onSubmit={this.searchSummoner} accept-charset="ISO-8859-1">
          <input type="text" 
          placeholder="Digite o Invocador"
          onChange={e => this.setState({ summonerInput: e.target.value })}/>
          <button type="submit">OK</button>
        </Form>
      </Container>
    );
  }
}
