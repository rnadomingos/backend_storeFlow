export interface ICreateStoreFlowDTO {

  client_name: string;
  client_email: string;
  client_phone: string;
  time: string;
  date: string;
  test_driver: boolean;
  sold: boolean;
  id_store: string;
  id_seller: string;
  id_store_segment: string;
  id_type_service: string;
  id_user: string;
  id_prospection: string;
  id_social_media?: string;

}