import styled from 'styled-components';

export const Container = styled.div`
.comment {
  margin-top: 15px;
  display: flex;
  width: 100%;
  height: 150px;
  background-color: white;
  border-radius: 10px;
  border-style: none;
  resize: none;
  border:0.5px solid #c4c4c4;
}

.avatar {
  margin-left: 1px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  background: white;
  height: 90%;
  width: 25%;
}

.avatar img {
  margin-top: 20px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  object-fit: cover;
  border: solid 1px;
  border-color: white;
}

@media (max-width: 600px) {
  .avatar img {
    margin-top: 23px;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    object-fit: cover;
    border: solid 1px;
    border-color: white;
}
}

.comment-text {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-family: roboto;
  font-size: 16px;
  display: flex;
}

.comment-text .name{
  font-weight: bold;
}

.comment-text .text{
  margin-top: 10px;
}
`;
