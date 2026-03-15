import { PresentationControls } from '@react-three/drei';

export const Orbit = ({ children }: { children: React.ReactNode }) => {
  return (
    <PresentationControls
      global={false} // whether to track global window events (true) or the canvas (false)
      cursor={true} // hover cursor
      snap={false} // snap back to center (can also be an config config)
      speed={1} // Speed factor
      zoom={1} // Zoom factor when half the polar-max is reached
      rotation={[0, 0, 0]} // Default rotation
      polar={[Math.PI / 3, Math.PI / 3]} // Vertical limits
      azimuth={[-0.5, 0.5]} // Horizontal limits
    >
      {children}
    </PresentationControls>
  );
}