import axios from "axios";
import { UserValue } from "../../pages/login";

const url ='http://localhost:4000/users'

export const login =(parmars:UserValue)=>{
 return axios.post(url+'/login',{
    ...parmars
  })
}

export const register =(parmars:UserValue)=>{
  return axios.post(url+'/register',{
    ...parmars
  })
}