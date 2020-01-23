import React from 'react';
import { Link } from "react-router-dom";

import { Container } from './styles'

export default function Header() {
  return(
  <Container>
    <a href="/app">Riot API</a>
  </Container>
  );
}