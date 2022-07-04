/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

import { normalizeDate } from 'utils/date'

import Text from 'components/core/Text'

import * as S from './styles'
import type * as T from './types'

function Card({ user, profile }: T.Data) {
  return (
    <Link href={profile.html_url}>
      <S.Container>
        <img src={user.image} alt={user.name} />
        <S.Wrapper>
          <Fragment>
            <S.Header>
              <FaGithub size="38" />
              <div>
                <Text fontSize="14px" color="neutralLightest">
                  Since: {normalizeDate(profile.created_at, 'dd/MM/yyyy')}
                </Text>
                <Text as="span" color="neutralWhite">
                  {user.name}
                </Text>
              </div>
            </S.Header>
          </Fragment>
          <S.Content>
            <S.NumberRepo>
              <Text fontSize="40px" strong color="positiveBase">
                {profile.public_repos}
              </Text>
              <Text color="neutralWhite">Repositorios</Text>
            </S.NumberRepo>
            <Text color="neutralWhite">{profile.bio}</Text>
          </S.Content>
        </S.Wrapper>
      </S.Container>
    </Link>
  )
}

export default Card
