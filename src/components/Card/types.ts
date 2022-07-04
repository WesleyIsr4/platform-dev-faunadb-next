export type User = {
  id: number
  name: string
  image: string
  email: string
}

export type Profile = {
  bio: string
  public_repos: string
  hireable: boolean
  html_url: string
  created_at: string
}

export type Data = {
  user: User
  profile: Profile
}
