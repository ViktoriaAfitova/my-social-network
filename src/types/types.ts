export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type PhotosType = {
  large:  string | null
  small: string | null
}
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullname: string
  contacts: ContactsType
  photos: PhotosType
}
export type UsersType = {
  id: number
  name: string
  status: string
  photos: PhotosType
}