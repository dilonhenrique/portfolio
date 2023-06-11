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
      <div className='container'>
        <div className='about__text'>
          <Text>I started as a designer in 2009, graduated in 2014 and as I go... Lorem ipsum dolor sit amet gravida opored ipsum dolor sit amet gravida opored ipsum dolor sit amet gravida opored.</Text>
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
