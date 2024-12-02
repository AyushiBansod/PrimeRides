import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const CarModel = ({ path, scale = 1 }) => {
  const { scene } = useGLTF(path);
  return (
    <primitive
      object={scene}
      scale={scale}
      position={[0, -2.1, 0]} // Move model slightly upwards inside the canvas
      rotation={[0, Math.PI / 2, 0]}
    />
  );
};

useGLTF.preload("/mclaren_spider.glb");

const CarModelOne = () => {
  useEffect(() => {
    // Scroll to top when the component is rendered
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="canvas-container">
      <img
        src="/rough.jpg"
        className="background-image-model"
        alt="Background"
      />
      <Canvas
        camera={{ position: [0, 15, 5], fov: 50, near: 0.1, far: 1000 }}
        className="custom-canvas"
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} />
        <CarModel path="/mclaren_spider.glb" scale={0.9} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minPolarAngle={Math.PI / 2} // Lock vertical rotation
          maxPolarAngle={Math.PI / 2} // Lock vertical rotation
          target={[0, -1, 0]} // Adjust the target to follow the model's new position
          minDistance={6} // Set closer zoom-in distance
          maxDistance={12} // Maximum zoom distance
        />
      </Canvas>
    </div>
  );
};

export default CarModelOne;
