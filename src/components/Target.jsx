import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const TARGET_URL =
  'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf';

const Target = (props) => {
  const groupRef = useRef();
  const [scene, setScene] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    const loader = new GLTFLoader();
    loader.load(
      TARGET_URL,
      (gltf) => {
        if (!mounted) return;
        setScene(gltf.scene);
      },
      undefined,
      (err) => {
        console.error('Failed to load target model:', err);
        setError(true);
      },
    );

    return () => {
      mounted = false;
    };
  }, []);

  useGSAP(() => {
    if (!groupRef.current) return;
    gsap.to(groupRef.current.position, {
      y: groupRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  // If we loaded the GLTF, render it; otherwise render a lightweight fallback target
  if (scene) {
    return (
      <group {...props} ref={groupRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
        <primitive object={scene} />
      </group>
    );
  }

  // Fallback visual: simple target made from torus + cylinder
  return (
    <group {...props} ref={groupRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <mesh>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[0, 0.15, 0]}>
        <torusGeometry args={[0.6, 0.08, 16, 100]} />
        <meshStandardMaterial color="#ff4444" />
      </mesh>
      <mesh position={[0, 0.15, 0]}>
        <torusGeometry args={[0.4, 0.06, 16, 100]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* If model failed to load, we silently keep the fallback geometry (no text geometry required) */}
    </group>
  );
};

export default Target;