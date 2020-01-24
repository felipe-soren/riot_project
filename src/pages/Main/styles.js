import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  height: 80%;
  
  img {
    max-width:200px;
    height:auto;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 900px;
  padding: 5px;
  display: flex;

  input {
    flex: 1;
    width: 70%;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError) ? '2px solid #f00' : 0};
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b0;
    color: #FFF;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;

    &:hover{
      background: #52d89f
    }
  }
`;