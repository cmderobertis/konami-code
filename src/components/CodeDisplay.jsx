import React, {useState, useEffect, useRef} from 'react'

const CodeDisplay = (props) => {

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter']
  const [char, setChar] = useState('')
  const [icons, setIcons] = useState([]);
  const [keyCount, setKeyCount] = useState(0)
  const [icon, setIcon] = useState(<h1>?</h1>);

  const ref = useRef(null)

  useEffect(() => {
    ref.current.focus()
  }, [])

  const handleKeyDown = (e) => {
    setChar(e.key)
  }

  const handleKeyUp = (e) => {
    if (char === konamiCode[keyCount]) {
      setKeyCount(keyCount + 1)
    }
    else {
      setKeyCount(0)
      setIcons([])
    }
    if (keyCount === 10) {
      props.setCodeCompleted(true)
    }
    switch (char) {
      case 'ArrowUp':
        setIcon(<h1><i className="fa fa-arrow-up"></i></h1>)
        setIcons([...icons, char])
        break
      case 'ArrowDown':
        setIcon(<h1><i className="fa fa-arrow-down"></i></h1>)
        setIcons([...icons, char])
        break
      case 'ArrowLeft':
        setIcon(<h1><i className="fa fa-arrow-left"></i></h1>)
        setIcons([...icons, char])
        break
      case 'ArrowRight':
        setIcon(<h1><i className="fa fa-arrow-right"></i></h1>)
        setIcons([...icons, char])
        break
      case 'Enter':
        setIcon(<h1>Start</h1>)
        break
      default:
        setIcon(<h1>{char}</h1>)
        setIcons([...icons, char])
    }
  }


  return (
    <div>
      <p className='display-1 mb-5' ref={ref} tabIndex={-1} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>Enter Cheat Code</p>
      {icon}
      <div className='row justify-content-center'>
        {
          icons.map((icon, index) => (
            <div key={index} className="col btn btn-success">{icon}</div>
          ))
        }
      </div>
    </div>
  )
}

export default CodeDisplay