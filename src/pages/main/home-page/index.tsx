import React, { useEffect, useState } from 'react';
import './index.scss'
import { getJoke } from '../../../api/main';
import { Card, Button } from 'antd';
const HomePage = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    init()
  }, [])
  const init = async () => {
    let res = await getJoke()
    console.log(res);
    if (res.data.code === 200) {
      setData(res.data.newslist)
    }
  }


  const renderDate = () => {
    return data.map((item: any, index) => {
      return (
        <Card  bordered={true} style={{ width: 380 }} key={index}>
          <p>{item.title}</p>
          <p>{item.content}</p>
        </Card>
      )
    })
  }

  const more = async () => {
    console.log(page);
    let res = await getJoke(page+1)
    if (res.data.code === 200) {
      setData(data.concat(res.data.newslist))
      renderDate()
      setPage(page + 1)
    }
  }
  return (
    <div className="main-wrapper">
      {renderDate()}
      <Button onClick={more}>更多 →</Button>
    </div>
  );
}

export default HomePage;
