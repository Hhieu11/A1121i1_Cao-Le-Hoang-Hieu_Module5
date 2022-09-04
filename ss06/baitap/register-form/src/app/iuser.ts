export interface IUser {
  email:string;
  pass:{
    password:string;
    confirm:string;
  };

  phone:string;
  country:string;
  gender:string;
}
