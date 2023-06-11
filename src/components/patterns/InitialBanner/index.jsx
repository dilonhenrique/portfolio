import React from 'react';
import { StyledBanner } from './styled';
import Text from '@/components/elements/Text';

export default function InitialBanner() {
  return (
    <StyledBanner>
      <div className='container'>
        <div className='banner__text'>
          <Text as='h1' variant='display1'>Hi, I'm Dilon<span className='dot'>.</span></Text>
          <Text variant='body1'>I like to integrate user experience and business strategy in whatever I do. Started as a designer and now I’m looking to work as a developer.</Text>
        </div>
        <div className='banner__scroll'>
          <Text>scroll</Text>
        </div>
      </div>
    </StyledBanner>
  )
}
