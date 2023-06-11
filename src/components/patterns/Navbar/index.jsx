import Link from '@/components/elements/Link';
import {StyledNavbar} from './styled';
import Text from '@/components/elements/Text';

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className='container'>
        <Text variant='heading3' color='primary'>Dilon</Text>
        <div className='menu'>
          <Link href="/">habilities</Link>
          <Link href="/">projects</Link>
        </div>
      </div>
    </StyledNavbar>
  )
}
