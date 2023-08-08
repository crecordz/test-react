import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Model() {
  const gltf = useGLTF("./model.glb");
  const animations = useAnimations(gltf.animations, gltf.scene);

  gltf.scene.traverse((child: any) => {
    if (child.isMesh) {
      child.material = new THREE.MeshPhongMaterial({ color: 0xffffff });
    }
  });

  useEffect(() => {
    const action = animations.actions.Animation;
    action.play();
  }, []);

  return (
    <group>
      <primitive
        object={gltf.scene}
        position={[1.7, -9.8, -0.29]}
        rotation={[0, 1.6, 0]}
      />
    </group>
  );
}
