import React from 'react';
import { StyledHabilities } from './styled'
import Text from '@/components/elements/Text';
import habilities from '@/commom/habilities';

const iconProps = {
  size: 40
}

export default function Habilities() {
  return (
    <StyledHabilities>
      <div className='container'>
        <Text as='h2' variant='heading2'>Habilities<span className='dot'>.</span></Text>
        <ul className='habilities'>
          {habilities.map(hab => (
            <li className='habilitie' key={hab.slug}>
              <div className='habilitie__icon'>
                <hab.Icon {...iconProps} />
              </div>
              <Text variant='body3' className='habilitie__name'>{hab.name}</Text>
            </li>
          ))}
        </ul>
      </div>
    </StyledHabilities>
  )
}
