import * as THREE from 'three'
import {useEffect, useRef} from "react";

const Sec = () => {
    const eleRef = useRef(null)
    const flag = useRef(false)
    useEffect(() => {
        if (flag.current) return
        /** 创建场景 */
        const scene = new THREE.Scene()
        // 创建一个立方缓冲几何体
        const geometry = new THREE.BoxGeometry(100, 100, 100)
        // 创建材质
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
        // 生成带有材质的物体
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)
        // 把物体添加进场景中
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
        eleRef.current.appendChild(renderer.domElement); //body元素中插入canvas对象
        renderer.render(scene, camera)
        flag.current = true
    }, [])
    return <div ref={eleRef}>Sec</div>
}

export default Sec
