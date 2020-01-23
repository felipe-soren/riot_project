import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ecf1f8;

  .fr {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.message {
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border-style: none;
  resize: none;
  font-family: roboto;
  font-size: 18px;
    color: #444;
}

.logged {
  display: flex;
  justify-content: space-between;
}

.user-logged {
  font-size: 18px;
}

.exit {
  font-size: 18px;
  color: blue;
  margin-right: 5px;
  cursor: pointer;
}

  button {
    margin-top: 10px;
    height: 48px;
    padding: 5px;
    background: #a598ee;
    color: #FFF;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
      background: #8277B7
    }
  }
`;
