import React, { useEffect, useState } from 'react';
import './index.scss'
import { getGuess } from '../../../api/main'
import { Card, Button } from 'antd';

const Guess = () => {
  const [data, setData] = useState([])
  const [show,setShow]=useState(false)
  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    let res = await getGuess()
    console.log(res);
    if (res.data.code === 200) {
      setData(res.data.newslist)
    }
  }

  const renderDate = () => {
    return data.map((item: any, index) => {
      return (
        <Card bordered={true} style={{ width: 380 }} key={index}>
          <p>
            {item.quest}
            <Button onClick={()=>{setShow(true)}}>查看答案</Button>
          </p>
          <p className={show?'active':'hide'}>{item.result}</p>
        </Card>
      )
    })
  }

  const more = async () => {
    let res = await getGuess()
    if (res.data.code === 200) {
      setData(data.concat(res.data.newslist))
      renderDate()
    }
  }
  return (
    <div className="guess-wrapper">
      {renderDate()}
      <Button onClick={more}>更多 →</Button>
    </div>
  );
}

export default Guess;
