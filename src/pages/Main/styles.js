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
  .Menu {
    position: relative;
    margin: 0 0 17px;
    border-bottom: 1px solid #d7dada;
}

.MenuList li:not(:first-child) {
  margin-left: 50px;
}

dl, dt, dd, ol, ul, li {
    margin-top: 15px;
    display: flex;
    list-style: none;
    padding: 0;
}

li.Item.active .Link{
  font-weight: bold;
}

.Menu>.MenuList>.Item .Link {
    display: block;
    color: #555e5e;
    font-size: 28px;
    line-height: 32px;
    text-decoration: none;
    letter-spacing: -1px;
    padding-bottom: 17px;
}

li {
    text-align: -webkit-match-parent;
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