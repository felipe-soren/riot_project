import styled from 'styled-components';

export const Container = styled.div`
  .summoner-info {
  display: flex;
  background-color: #f2f2f2;
  width: 100%;
  height: 150px;
  border: 1px solid #d9d9d9;
}

.elo-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
}

.elo-img img {
  width: 120px;
  height: 120px;
}

.elo-info {
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wins, .winrate {
  font-size: 15px;
  color: #879292;
}

.elo {
  font-size: 15px;
  font-weight: bold;
  color: #1f8ecd
}
`;
