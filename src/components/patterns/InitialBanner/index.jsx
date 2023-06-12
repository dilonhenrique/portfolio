import React from 'react';
import { StyledBanner } from './styled';
import Text from '@/components/elements/Text';

export default function InitialBanner() {
  return (
    <StyledBanner>
      <div className='container'>
        <div className='banner__text'>
          <Text as='h2' variant='heading3' color='primary'>Hello there!</Text>
          <Text as='h1' variant='display1'>I’m Dilon<span className='dot'>.</span></Text>
          <Text variant='body1' style={{maxWidth: '600px'}}>I am passionate about creating immersive digital experiences - with images or with code.</Text>
        </div>
        <div className='banner__scroll'>
          <Text>scroll</Text>
        </div>
      </div>
    </StyledBanner>
  )
}
