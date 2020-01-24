import React, { Component } from 'react';
import SummonerCard from './SummonerCard'
import Comment from './Comment'
import { mainApi } from '../../service/riot_api_backend'
import CommentBox from './CommentBox'
import ReactLoading from 'react-loading';

import { Container } from './styles';

export default class SummonerInfo extends Component {
  state = {
    isLoading: true,
    summonerInput: "",
    summonerInfo: "",
    soloInfo: "",
    flexInfo: "",
    comments: ""
  }

  async componentDidMount() {
    const response = await mainApi.get(`summoner/${this.props.match.params.name}`)
    await this.setState({ summonerInfo: response.data })
    let { summonerInfo } = this.state
    summonerInfo = Object.keys(summonerInfo).map(function(_) { return summonerInfo[_]; }) 
    await summonerInfo.map(async (rankInfo) => {
      if (rankInfo.queueType === "RANKED_SOLO_5x5") {
        await this.setState({ soloInfo: rankInfo})
      } else if (rankInfo.queueType === "RANKED_FLEX_SR") {
        await this.setState({ flexInfo: rankInfo})
      }
    })
    const commentsResponse = await mainApi.get(`/comment/${response.data.summonerId}`)
    await this.setState({ comments: commentsResponse.data })
    this.setState({ isLoading: false })
    console.log(this.state.comments)
  }
  
  render() {
    return (
      <>
        {this.state.isLoading ? (
        <Container>
        <ReactLoading type = "spin" color ="black"/>
        </Container>) : (
          <Container>
            <div className="wrapper">
              <div
                className="box header"
                style={{
                  backgroundImage: `url(//cdn.leagueofgraphs.com/img/banners/champion-banners/${this.state.summonerInfo.championMainId}.jpg)`
                }}
              >
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/10.1.1/img/profileicon/${this.state.summonerInfo.profileIconId}.png`}
                  alt="tigers jaw"
                />
                <span>{this.state.summonerInfo.name}</span>
              </div>
              <div className="box sidebar">
              <SummonerCard soloInfo={this.state.soloInfo} />
              </div>
              <div className="box content">
                <CommentBox summonerInfo={this.state.summonerInfo} />
                {console.log(this.state.comments.length)}
                {(this.state.comments.length === 0) ? (
                  null
                ) : (<h1 style={{ fontSize: `25px` }}>Comentários:</h1>)}
                <div className="comment-box">
                  {this.state.comments.map(comment => (
                    <Comment comment={comment} key={comment._id}/>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        )}
      </>
    );
  }
}
