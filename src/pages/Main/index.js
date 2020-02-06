import React, { Component } from "react";
import { mainApi } from "../../service/riot_api_backend";
import Ranking from "../../pages/Main/components/ranking";
import ReactLoading from "react-loading";

import { Container, Form } from "./styles";

export default class Main extends Component {
  state = {
    summonerInput: "",
    error: false,
    loading: false,
    pageLoading: false,
    ranking: []
  };

  async componentDidMount() {
    this.setState({ pageLoading: true });
    const response = await mainApi.get("/ranking");
    this.setState({ pageLoading: false, ranking: response.data });
  }

  searchSummoner = async e => {
    e.preventDefault();
    console.log(this.state.summonerInput);
    this.setState({ loading: true });
    try {
      await mainApi.get(`/summonercheck/${this.state.summonerInput}`);
      this.props.history.push({
        pathname: `/summoner/${this.state.summonerInput}`,
        state: { summonerName: this.state.summonerInput }
      });
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ error: true, loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={require(`../../assets/MainLogo.png`)} alt="home" />
        <Form
          withError={this.state.error}
          onSubmit={this.searchSummoner}
          accept-charset="ISO-8859-1"
        >
          <input
            type="text"
            placeholder="Digite o Invocador"
            onChange={e => this.setState({ summonerInput: e.target.value })}
          />
          <button type="submit">
            {" "}
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              "BUSCAR"
            )}{" "}
          </button>
        </Form>
        {this.state.pageLoading ? (
          <ReactLoading type="spin" color="black" />
        ) : (
          <>
            <div className="Menu">
              <ol className="MenuList">
                <li className="Item active">
                  <a href="/" className="Link">
                    Ranking
                  </a>
                </li>
                {/* <li className="Item ">
                  <a href="/" className="Link" onClick={this.handleClick}>
                    Popularidade
                  </a>
                </li> */}
              </ol>
            </div>
            <Ranking ranking={this.state.ranking} />
          </>
        )}
      </Container>
    );
  }
}
