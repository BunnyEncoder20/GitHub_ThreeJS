import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'

// Importing Compoennts 
import RotatingCube from './Components/RotatingCube.jsx';

const App = () => {
  return(
	// Canvas component makes all of it's children a 3D object (Objects, lighting, cameras, orbits)
    <Canvas id="canvas" stlye={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
		{/* orbit controls */}
    	<OrbitControls enableZoom enablePan enableRotate />
		{/* Lighting */}
		<directionalLight position={[1,1,1]} intensity={10} color="papayawhip" />
		{/* Background color */}
		<color attach="background" args={['#000']} />

		{/* Custom Component */}
		<RotatingCube />
    </Canvas>
  )
}

export default App;