import React, { useEffect } from 'react';
import Header from '../header';
import Main from '../main';
import Foot from '../foot';
import './index.scss'

const Home = (props:any) => {
  useEffect(()=>{
    let username =localStorage.getItem('user')
    if(!username){
      props.history.replace('/login')
    }
  })

  return (
    <div className='home'>
      <Header />
      <Main />
      <Foot />
    </div>
  );
}

export default Home;
