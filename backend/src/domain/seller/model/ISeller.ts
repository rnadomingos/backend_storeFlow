export interface ISeller {
  id: string;
  name: string;
  user_dms: string;
  is_active: boolean;
  create_at: Date;
  store?: any;
  id_store: string;
}