import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei';

const RotatingCube = () => {
    const meshRef = useRef()

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01 
            meshRef.current.rotation.y += 0.01
        }
    })

    return (
        <mesh ref={meshRef}>
            <torusGeometry args={[5,1,8,50]} />
            <meshPhysicalMaterial color="#468585" emissive="#468585" roughness={1} metalness={1} reflection={1} />
            <Sparkles count={100} scale={6} size={5} speed={0.02} color="yellow" />
        </mesh>
    )
}

export default RotatingCube