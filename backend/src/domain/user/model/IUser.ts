export interface IUser {
  id: string
  name: string
  email: string
  password: string
  user_dms: string
  is_admin: boolean
  is_active: boolean
  create_at: Date
  id_store: string
}