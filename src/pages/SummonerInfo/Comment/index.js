import React, { Component } from 'react';

import { Container } from './styles';

export default class Comment extends Component {
  render() {
    const comment = this.props.comment;
    return (
      <Container>
        <div className="comment">
          <div className="avatar">
            <img
              src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"
              alt="avatar"
            />
          </div>
          <div className="comment-text">
            <span className="name">{comment.userName}</span>
            <span className="text">
              {comment.content}
            </span>
          </div>
        </div>
      </Container>
    );
  }
}
