import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FIELDS = {
  USERNAME: 'username',
  ROOM: 'room',
}

const Main = () => {
  const { USERNAME, ROOM } = FIELDS
  const [values, setValues] = useState({ [USERNAME]: '', [ROOM]: '' })

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
  }

  const handleClick = (e) => {
    const isDisabled = Object.values(values).some((value) => !value)

    if (isDisabled) e.preventDefault()
  }

  console.log(values)

  return (
    <div className="wrapper">
      <div className="main">
        <h1 className="main-h1">Enter Chat</h1>
        <form className="main-form">
          <div className="main-input-div">
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              value={values[USERNAME]}
              className="main-input"
              onChange={handleChange}
              autoComplete="off"
              required
            ></input>
          </div>
          <div className="main-input-div">
            <input
              type="text"
              name="room"
              placeholder="Room"
              value={values[ROOM]}
              className="main-input"
              onChange={handleChange}
              autoComplete="off"
              required
            ></input>
          </div>
          <Link
            onClick={handleClick}
            to={`/chat?name=${values[USERNAME]}&room=${values[ROOM]}`}
          >
            <button type="submit" className="main-btn">
              Go Chat
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Main
