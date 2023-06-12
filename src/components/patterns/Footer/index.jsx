import React from 'react';
import { StyledFooter } from './styled';
import Text from '@/components/elements/Text';
import { TbBrandInstagram, TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb';
import Link from '@/components/elements/Link';
import { useDarkMode } from '@/context/darkMode';

const iconProps = {
  size: 30
}

export default function Footer() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <StyledFooter darkMode={darkMode}>
      <div className='container'>
        <Text variant='heading3' color='neutral'>Dilon</Text>
        <Text variant='body4'>todos os direitos reservados &copy; copyright {new Date().getFullYear()}</Text>
        <div className='socials'>
          <Link href='https://instagram.com/dilonhenrique' target='_blank'>
            <TbBrandInstagram {...iconProps} title='Instagram' />
          </Link>
          <Link href='https://github.com/dilonhenrique' target='_blank'>
            <TbBrandGithub {...iconProps} />
          </Link>
          <Link href='https://linkedin.com/in/dilonhenrique' target='_blank'>
            <TbBrandLinkedin {...iconProps} />
          </Link>
        </div>
      </div>
    </StyledFooter>
  )
}
