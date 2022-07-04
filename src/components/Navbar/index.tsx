import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

import * as theme from 'styles/theme'

import Button from 'components/core/Button'

import * as S from './styles'

function Navbar() {
  const [session] = useSession()

  return (
    <S.Wrapper>
      <S.Nav>
        {session ? (
          <Button
            onClick={() => signOut()}
            type="button"
            leftElement={<FaGithub color={theme.colors.positiveLight} />}
            rightElement={<FiX color={theme.colors.neutralWhite} />}
          >
            Wesley Israel
          </Button>
        ) : (
          <Button
            onClick={() => signIn('github')}
            type="button"
            leftElement={<FaGithub color={theme.colors.neutralDarkest} />}
          >
            Sou dev
          </Button>
        )}
      </S.Nav>
    </S.Wrapper>
  )
}

export default Navbar
