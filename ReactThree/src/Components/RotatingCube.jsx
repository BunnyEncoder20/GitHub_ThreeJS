import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const RotatingCube = () => {
    const meshRef = useRef()

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.1
            meshRef.current.rotation.x += 0.1 
        }
    })

    return (
        <mesh ref={meshRef}>
            <cylinderGeometry args={[1,1,1]} />
            <meshLambertMaterial color="#468585" emissive="#468585" />
        </mesh>
    )
}

export default RotatingCube