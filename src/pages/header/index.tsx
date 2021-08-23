import React from 'react';
import './index.scss'
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../asset/image/logo.png'
import Ava from '../../asset/image/avater.png'
import { Menu, Dropdown, Avatar } from 'antd';
const Header = (props: any) => {
  const menus = [
    {
      name: '首页',
      src: '/home'
    },
    {
      name: '待办',
      src: '/todo'
    },
    {
      name: '猜谜',
      src: '/guess'
    },
    {
      name: '日记',
      src: '/diary'
    },
  ]
  const logout = () => {
    localStorage.removeItem('user')
    props.history.replace('/login')
  }
  const menu = (
    <Menu>
      <Menu.Item key={'t'}>
        <span onClick={logout}>退出</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className='header-wrapper'>
      <div className='header-box'>
        <div className="logo">
          <Link to={'/'}>
            <img src={Logo} alt="" className={'logo-img'} />
          </Link>
        </div>
        <div className="menu">
          {
            menus.map((item, idx) => {
              return (
                <div className='menu-box' key={idx}>
                  <Link to={item.src}>
                    <div className='menu-title'>
                      {item.name}
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
        <div className="user">
          <Dropdown overlay={menu} placement="bottomCenter">
            <Avatar src={Ava} size={64} />
          </Dropdown>
        </div>
      </div>

    </div>
  );
}

export default withRouter(Header);
