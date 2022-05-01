export interface IUpdateUserDTO {
  id: string
  name: string;
  email: string;
  password: string;
  user_dms: string;
  id_store: string;
  is_admin: boolean;
  is_active: boolean;
}