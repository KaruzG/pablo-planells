import { OrbitControls } from '@react-three/drei';

export const Orbit = () => {
  return (
    <OrbitControls
        makeDefault
        minAzimuthAngle={-0.5}
        maxAzimuthAngle={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
        enableZoom={false}
        enablePan={false}
    />
  );
}