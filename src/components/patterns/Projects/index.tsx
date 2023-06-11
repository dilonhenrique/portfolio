import React from 'react';
import { StyledProjects } from './styled';
import Text from '@/components/elements/Text';
import projects from '@/commom/projects';
import habilities from '@/commom/habilities';
import Link from '@/components/elements/Link';
import Button from '@/components/elements/Button';
import ArrowButton from '@/components/elements/ArrowButton';

export default function Projects() {
  return (
    <StyledProjects>
      <div className='container'>
        <Text as='h2' variant='heading2'>Projects<span className='dot'>.</span></Text>
        <ul className='projects'>
          {projects.map((proj, index) => (
            <li className='project' key={index}>
              <a
                href={proj.link}
                target='_blank'
                className='project__image'
                style={{ backgroundImage: `url(${proj.image})` }}
              >
                <div className='project__icons'>
                  {proj.categories.map(cat => {
                    const catAtual = habilities.find(hab => hab.slug === cat);
                    return catAtual && <catAtual.Icon size={30} key={cat} title={catAtual.name} />
                  })}
                </div>
              </a>
              <div className='project__text'>
                <Text style={{fontWeight: 700 }}>{proj.name}</Text>
                <ArrowButton href={proj.link} target='_blank'>See this</ArrowButton>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledProjects>
  )
}