import Link from '@/components/elements/Link';
import { StyledNavbar } from './styled';
import Text from '@/components/elements/Text';
import DarkModeToggler from '@/components/elements/DarkModeToggler';

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className='container'>
        <Text variant='heading3' color='primary'>Dilon</Text>
        <div className='menu'>
          <Link href="#about" scroll={false}>about</Link>
          <Link href="#habilities" scroll={false}>habilities</Link>
          <Link href="#projects" scroll={false}>projects</Link>
        </div>
        <DarkModeToggler />
      </div>
    </StyledNavbar>
  )
}
