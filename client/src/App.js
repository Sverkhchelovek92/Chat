import './App.css'

import { Routes, Route } from 'react-router-dom'

import Main from './components/Main'
import Chat from './components/Chat'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
