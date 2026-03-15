"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface CustomRotationProps {
  children: React.ReactNode;
  rotation?: [number, number, number];
  azimuth?: [number, number];
}

export const CustomRotation = ({ children, rotation = [-0.5, 0, 0], azimuth = [-0.5, 0.5] }: CustomRotationProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const { gl } = useThree();
  const isDragging = useRef(false);
  const previousTouchX = useRef(0);
  
  // Spring physics state
  const targetRotationY = useRef(rotation[1]);
  const currentRotationY = useRef(rotation[1]);

  useEffect(() => {
    const canvas = gl.domElement;
    if (!canvas) return;
    
    const handlePointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      previousTouchX.current = e.clientX;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      
      const deltaX = e.clientX - previousTouchX.current;
      previousTouchX.current = e.clientX;
      
      const rotationSpeed = 0.005;
      targetRotationY.current += deltaX * rotationSpeed;
      targetRotationY.current = Math.max(azimuth[0], Math.min(azimuth[1], targetRotationY.current));
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    const initialTouch = { x: 0, y: 0 };
    let isHorizontalSwipe = false;

    const handleTouchStart = (e: TouchEvent) => {
        if(e.touches.length > 0) {
            isDragging.current = true;
            initialTouch.x = e.touches[0].clientX;
            initialTouch.y = e.touches[0].clientY;
            previousTouchX.current = e.touches[0].clientX;
            isHorizontalSwipe = false;
        }
    }
    
    const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging.current) return;
        if(e.touches.length > 0) {
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            
            if (!isHorizontalSwipe) {
                const deltaXTotal = Math.abs(currentX - initialTouch.x);
                const deltaYTotal = Math.abs(currentY - initialTouch.y);
                
                if (deltaXTotal > 10 || deltaYTotal > 10) {
                    isHorizontalSwipe = deltaXTotal > deltaYTotal;
                }
            }
            
            if (isHorizontalSwipe) {
                if (e.cancelable) {
                    e.preventDefault(); 
                }
                const deltaX = currentX - previousTouchX.current;
                previousTouchX.current = currentX;
                const rotationSpeed = 0.005;
                targetRotationY.current += deltaX * rotationSpeed;
                targetRotationY.current = Math.max(azimuth[0], Math.min(azimuth[1], targetRotationY.current));
            }
        }
    }
    
    const handleTouchEnd = () => {
        isDragging.current = false;
        isHorizontalSwipe = false;
    }

    canvas.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      
      canvas.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [gl, azimuth]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      currentRotationY.current = THREE.MathUtils.damp(
        currentRotationY.current,
        targetRotationY.current,
        15,
        delta
      );
      
      groupRef.current.rotation.x = rotation[0];
      groupRef.current.rotation.y = currentRotationY.current;
      groupRef.current.rotation.z = rotation[2];
    }
  });

  return <group ref={groupRef}>{children}</group>;
};
