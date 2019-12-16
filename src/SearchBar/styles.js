import styled from 'styled-components';

export const Container = styled.div`
* {
  box-sizing: border-box;
}

@media only screen and (min-width: 600px) {
  form
}

form.searchBar {
  display: flex;
  align-items: center;
  margin-bottom: 200px;
  width: 100%;
}

/* Style the search field */
form.searchBar input[type=text] {
  padding: 10px;
  border: 0px;
  width: 85%;
  height: 90px;
  background: #fff;
  border-radius: 3px;
  font-size: 45px;
}

/* Style the submit button */
form.searchBar button {
  border: 0px;
  width: 15%;
  height: 90px;
  padding: 10px;
  background: #50c058;
  color: white;
  font-size: 40px;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

form.searchBar button:hover {
  background: #50c058;
}

`;