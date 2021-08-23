import React, { useEffect, useState } from 'react';
import './index.scss'
import { getList, editTodo, delTodo, addTodo } from '../../../api/main';
import { Button, message } from 'antd';

export interface TodoList {
  checked: boolean
  text: string
  id: number
  createTime: number
  username: string
}
const Todo = () => {
  let [todo, setTodo] = useState<TodoList[]>([])
  let [edit, setEdit] = useState(({} as TodoList))
  let colorArr = ['#f05654', '#057748', '#8d4bbb', '#2add9c', '#70f3ff']
  useEffect(() => {
    init()
  }, [])
  const init = async () => {
    let { username } = JSON.parse((localStorage.getItem('user')) as string)
    let res = await getList(username)
    console.log(res);

    setTodo(res.data.result)
  }
  const add = () => {
    let { username } = JSON.parse((localStorage.getItem('user')) as string)
    setTodo([...todo, {
      checked: false,
      text: '',
      id: Date.now(),
      createTime: Date.now(),
      username
    }])
    addTodo(username)
  }
  const change1 = (e: any, id: number) => {
    let todo1 = todo.map(item => {
      if (item.id === id) {
        item.checked = !item.checked
        setEdit(item)
      }
      return item
    })
    setTodo(todo1)
  }
  const change2 = (e: any, id: number) => {
    let todo2 = todo.map(item => {
      if (item.id === id) {
        item.text = e.target.value
        setEdit(item)
      }
      return item
    })
    setTodo(todo2)
  }
  const change3 = async (e: any, id: number) => {
    renderTodo()
    let res = await editTodo(edit)
    if (res.data.status === 200) {
      message.success(res.data.msg)
    }
  }
  const del = async (id: number) => {
    let res = await delTodo(id)
    if (res.data.status === 200) {
      message.success(res.data.msg)
      init()
      renderTodo()
    }
  }
  const renderTodo = () => {
    return todo.map((item, index) => {
      let a = index % 5
      return (
        <div className={item.checked ? 'todo done' : 'todo'} style={{ background: `${colorArr[a]}` }} key={index}>
          <input type="checkbox" className='check' checked={item.checked} onChange={(e) => { change1(e, item.id) }} onBlur={(e) => { change3(e, item.id) }} />
          <input className='text' value={item.text} onChange={(e) => { change2(e, item.id) }} style={{ background: `${colorArr[a]}` }} onBlur={(e) => { change3(e, item.id) }} />
          <Button onClick={() => del(item.id)}>-</Button>
        </div>
      )
    })
  }
  return (
    <div className='todo-wrapper'>
      <Button onClick={add} className='add' type={'primary'}>+</Button>
      <div className='todo-list'>
        {
          renderTodo()
        }
      </div>
    </div>
  );
}

export default Todo;
