import { query as q } from 'faunadb'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'

import Card from 'components/Card'

import { fauna } from '../../../services/fauna'
import * as S from './styles'

function LandingPageTemplate() {
  const [data, setData] = useState([])

  const allDocuments = async () => {
    const data: any = await fauna.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('users'))),
        q.Lambda((x) => q.Get(x))
      )
    )
    setData(data.data)
  }

  useEffect(() => {
    allDocuments()
  }, [])

  {
  }
  return (
    <Fragment>
      <Image src="/assets/images/bg-main.png" alt="main" layout="fill" objectFit="cover" priority />
      <S.Wrapper>
        <S.WrapperCard>
          {data.map((x: any, index: number) => {
            const data = x.data.data
            return (
              <Fragment key={index}>
                <Card user={data.user} profile={data.profile} />
              </Fragment>
            )
          })}
        </S.WrapperCard>
      </S.Wrapper>
    </Fragment>
  )
}

export default LandingPageTemplate
