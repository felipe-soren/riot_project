import React from 'react';

import { Container } from './styles'

export default function SearchBar() {
  return(
  <Container>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <form class="searchBar">
      <input type="text" placeholder="Buscar Invocador" name="search" />
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </Container>
  );
}