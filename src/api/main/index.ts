import axios from "axios";
import { TodoList } from "../../pages/main/todo";
// 获取段子
export const getJoke =(page=1)=>{
  return axios.get(`http://api.tianapi.com/txapi/godreply/index?key=6f9ec1c3047d7df2ccb8fad97f179d7f&num=10&page=${page}`)
}
// 获取天气
export const getWeather =(city:string)=>{
  return axios.get(`https://www.apiopen.top/weatherApi?city=${city}`)
}

// 获取脑筋急转弯
export const getGuess =() =>{
  return axios.get(`http://api.tianapi.com/txapi/naowan/index?key=6f9ec1c3047d7df2ccb8fad97f179d7f&num=10`)
}

// 获取todo列表
const url ='http://localhost:4000/diary'
export const getList =(username:string)=>{
  return axios.get(`${url}/list?username=${username}`)
}
// 添加todo
export const addTodo=(username:string)=>{
  let todo={
    checked: false,
    text: '',
    id: Date.now(),
    createTime: Date.now(),
    username
  }
  return axios.get(`${url}/add`,{params:todo})
}

// 修改todo
export const editTodo =(todo:TodoList)=>{
  return axios.get(`${url}/edit`,{params:todo})
}

export const delTodo =(id:number)=>{
  return axios.get(`${url}/del?id=${id}`)
}