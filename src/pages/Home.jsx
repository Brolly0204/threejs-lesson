import * as THREE from 'three';
import {useEffect, useRef} from 'react'

const Home = () => {
    const eleRef = useRef(null)
    const flag = useRef(false)
    useEffect(() => {
        if (flag.current) return
        /** 创建场景 */
        const scene = new THREE.Scene()
        /** 相机设置 */
        const width = window.innerWidth
        const height = window.innerHeight
        const k = width / height
        const s = 200
        const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
        camera.position.set(400, 200, 300)
        camera.lookAt(scene.position)
        /** 创建渲染器对象 */
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height)
//        document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
        eleRef.current.appendChild(renderer.domElement); //body元素中插入canvas对象
        renderer.render(scene, camera)
        flag.current = true
    }, [])
    return <div ref={eleRef}>Home</div>
}

export default Home
