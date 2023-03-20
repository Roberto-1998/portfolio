import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Preload, Stars, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const ReactFlag = ({ isMobile }) => {
  const computer = useGLTF('./react_logo_circle/scene.gltf');

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh style={{ cursor: 'pointer' }}>
        <hemisphereLight intensity={0.15} groundColor={'black'} />
        <pointLight intensity={1} />
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />

        <primitive
          object={computer.scene}
          scale={isMobile ? 0.35 : 0.55}
          /*   position={isMobile ? [0, -2, -1.0] : [0, -3.25, -1.5]} */
          /*   rotation={[-0.01, -0.2, -0.1]} */
          position={[0, -1, 0]}
          rotation={[0, 1.3, 0]}
        />
      </mesh>
    </Float>
  );
};

const ReactCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:640px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      className='cursor-rotate'
      frameLoop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <ReactFlag style={{ cursor: 'pointer' }} isMobile={isMobile} />
        <Stars speed={0.5} count={10000} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ReactCanvas;
