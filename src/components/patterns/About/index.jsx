import React from 'react';
import { StyledAbout } from './styled';
import Text from '@/components/elements/Text';
import { TbBrush, TbCode } from 'react-icons/tb';

const hoje = new Date();
const anoDes = 2009;
const anoDev = 2017;

export default function About() {
  return (
    <StyledAbout>
      <div className='container' id='about'>
        <div className='about__text'>
          <Text as='h2' variant='heading2'>About<span className='dot'>.</span></Text>
          <Text>My degree says "designer", but to be honest, I've always been a developer at heart (I learned HTML before I even discovered Photoshop). Transforming thousands of characters into real solutions has always fascinated me and so I finally decided to focus on what I love to do: coding. Yes, after working in design for over a decade, this is the year I make my career transition.</Text>
          <div className='about__numbers'>
            <div className='about__number'>
              <TbBrush size={50} />
              <Text variant='heading3' color='primary'>{hoje.getFullYear() - anoDes} years</Text>
              <Text variant='body3'>as a designer</Text>
            </div>
            <div className='about__number'>
              <TbCode size={50} />
              <Text variant='heading3' color='primary'>{hoje.getFullYear() - anoDev} years</Text>
              <Text variant='body3'>as a developer</Text>
            </div>
          </div>
        </div>
        <div className='about__image'>
          <img src='/Dilon.png' />
        </div>
      </div>
    </StyledAbout>
  )
}
