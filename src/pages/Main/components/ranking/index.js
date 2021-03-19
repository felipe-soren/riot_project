import React, { Component } from "react";

import { Container } from "./styles";

export default class ranking extends Component {
  render() {
    return (
      <Container>
        <table className="ranking-table">
          <colgroup>
            <col width="100" />
            <col width="200" />
            <col width="90" />
            <col width="90" />
            <col width="90" />
          </colgroup>
          <thead>
            <tr>
              <th className="ranking-table__header"></th>
              <th className="ranking-table__header">Invocador</th>
              <th className="ranking-table__header">Tier</th>
              <th className="ranking-table__header">LP</th>
              <th className="ranking-table__header">Taxa de Vitória</th>
            </tr>
          </thead>
          <tbody>
            {this.props.ranking.map((position, index) => (
              <tr className="ranking-table__row ">
                <td className="ranking-table__cell ranking-table__cell--rank">
                  #{index + 1}
                </td>
                <td className="select_summoner ranking-table__cell ranking-table__cell--summoner">
                  <a href={`summoner/${position.summonerName}`}>
                    {/* <img
                      alt="summoner"
                      src={`http://avatar.leagueoflegends.com/br/${position.summonerName}.png`}
                    /> */}
                    <span>{position.summonerName}</span>
                  </a>
                </td>
                <td className="ranking-table__cell ranking-table__cell--tier">
                  Desafiante
                </td>
                <td className="ranking-table__cell ranking-table__cell--lp">
                  {position.leaguePoints} LP
                </td>
                <td className="ranking-table__cell ranking-table__cell--winratio">
                  {` ${(
                    (position.wins / (position.wins + position.losses)) *
                    100
                  ).toPrecision(2)}%`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    );
  }
}
