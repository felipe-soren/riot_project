import React, { Component } from 'react';
import { mainApi } from '../../service/riot_api_backend'

import { Container, Form } from './styles';


export default class Main extends Component {
  state = {
    summonerInput: "",
    error: false,
    loading: false
  }
  
  searchSummoner = async (e) => {
    e.preventDefault()
    console.log(this.state.summonerInput)
    this.setState({ loading: true })
    try {
      await mainApi.get(`/summonercheck/${this.state.summonerInput}`)
      this.props.history.push({ pathname: `/summoner/${this.state.summonerInput}`,
      state: { summonerName: this.state.summonerInput } });
      this.setState({ loading: false })
    } catch (error) {
      this.setState({ error: true, loading: false })
    }
  }

  render() {
    return (
      <Container>
        <img src={require(`../../assets/MainLogo.png`)} alt="home" />
        <Form  withError={this.state.error} onSubmit={this.searchSummoner} accept-charset="ISO-8859-1">
          <input type="text" 
          placeholder="Digite o Invocador"
          onChange={e => this.setState({ summonerInput: e.target.value })}/>
          <button type="submit"> {this.state.loading ? <i className="fa fa-spinner fa-pulse"/> : 'BUSCAR'} </button>
        </Form>
      </Container>
    );
  }
}
