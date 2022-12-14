import { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import Home from './pages/Home'
import Sec from './pages/Sec'
import Thr from './pages/Thr'
import Camera from './pages/Camera'
import Animation from './pages/Animation'
import './App.css'

function App() {
  return (
    <div className="App">
        <a target={'_blank'} href={'https://www.yuque.com/renshengzhiruchujian/occ1eb/'}>《three教程文档》</a>
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">第一个3D场景</Link>
                    </li>
                    <li>
                        <Link to="/sec">第二个3D场景</Link>
                    </li>
                    <li>
                        <Link to="/thr">第三个3D场景</Link>
                    </li>
                    <li>
                        <Link to="/camera">相机</Link>
                    </li>
                    <li>
                        <Link to="/animation">动画</Link>
                    </li>
                </ul>

                <hr />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sec" element={<Sec />} />
                    <Route path="/thr" element={<Thr />} />
                    <Route path="/camera" element={<Camera />} />
                    <Route path="/animation" element={<Animation />} />
                </Routes>
            </div>
        </Router>
    </div>
  )
}

export default App
