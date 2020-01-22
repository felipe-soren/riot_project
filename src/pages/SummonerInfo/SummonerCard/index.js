import React, { Component } from 'react';

import { Container } from './styles';

export default class SummonerCard extends Component {

  render() {
    return (
      <Container>
        {this.props.soloInfo ? (
          <div className="summoner-info">
            <div className="elo-img">
              <img
                src={require(`../../../assets/${this.props.soloInfo.tier}.png`)}
                alt=""
              />
            </div>
            <div className="elo-info">
              <span className="title">Ranqueada Solo</span>
              <span className="elo">{`${this.props.soloInfo.tier} ${this.props.soloInfo.rank}`}</span>
              <span className="wins">{`${this.props.soloInfo.leaguePoints} LP / 
                    ${this.props.soloInfo.wins}V ${this.props.soloInfo.losses}L`}</span>
              <span className="winrate">{`Taxa de Vitória ${(
                (this.props.soloInfo.wins /
                  (this.props.soloInfo.wins + this.props.soloInfo.losses)) *
                100
              ).toPrecision(2)}%`}</span>
            </div>
          </div>
        ) : (
          <div className="summoner-info">
            <div className="elo-img">
              {/* <img
                src={require(`../../../assets/${this.props.soloInfo.tier}.png`)}
                alt=""
              /> */}
            </div>
            <div className="elo-info">
              <span className="title">Ranqueada Solo</span>
              <span className="elo">Unranked</span>
            </div>
          </div>
        )}
      </Container>
    );
  }
}
