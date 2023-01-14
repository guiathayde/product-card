import React, { useState } from 'react';

import GlobalStyles from '../styles/global';

import {
  Container,
  CardContainer,
  ImageContainer,
  Image,
  IconButton,
  icon360,
  iconCancel,
  Detail,
  Heading,
  Button,
} from './styles';

import Sofa from '../assets/sofa.png';
import Icon360 from '../assets/360.svg';
import IconCancel from '../assets/cancel.svg';
import SofaGif from '../assets/sofa.gif';

export function App() {
  const [isGif, setIsGif] = useState(false);

  return (
    <>
      <GlobalStyles />

      <Container>
        <CardContainer>
          <ImageContainer>
            <Image src={isGif ? SofaGif : Sofa} />

            {isGif ? (
              <IconButton onClick={() => setIsGif(false)}>
                <img src={IconCancel} alt="360" style={iconCancel} />
              </IconButton>
            ) : (
              <IconButton onClick={() => setIsGif(true)}>
                <img src={Icon360} alt="360" style={icon360} />
              </IconButton>
            )}
          </ImageContainer>

          <Detail>
            <Heading>
              <h3>CÓDIGO: 42404</h3>
              <h1>Sofá Margot II - Rosé</h1>
              <h2>R$ 4.000 </h2>
            </Heading>

            <Button>ADICIONAR À CESTA</Button>
          </Detail>
        </CardContainer>
      </Container>
    </>
  );
}
