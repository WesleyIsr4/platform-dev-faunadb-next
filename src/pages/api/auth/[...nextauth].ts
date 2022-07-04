import { query as q } from 'faunadb'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { fauna } from '../../../services/fauna'
import * as T from './types'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      scope: 'read:user',
    }),
  ],
  callbacks: {
    async signIn(user: T.User, account: T.Account, profile: T.Profile) {
      const data = {
        user,
        profile,
        account,
      }

      try {
        await fauna.query(
          q.If(
            q.Not(q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(data.user.email)))),
            q.Create(q.Collection('users'), { data: { data } }),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(data.user.email)))
          )
        )
        return true
      } catch (err) {
        return false
      }
    },
  },
})
