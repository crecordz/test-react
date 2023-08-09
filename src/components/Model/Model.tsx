import { useGLTF, useAnimations, Environment } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

export default function Model() {
  const gltf = useGLTF("./model.glb");
  const animations = useAnimations(gltf.animations, gltf.scene);
  const { scene } = useThree();

  useEffect(() => {
    const action = animations.actions.Animation;
    action.play();

    gltf.scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#131313",
          envMap: scene.environment,
          metallness: 7,
          roughness: 0.1,
        });
      }
    });
  }, [scene, animations]);

  return (
    <group>
      <Environment files={"./TwoGlows.hdr"} />
      <primitive
        object={gltf.scene}
        position={[1.7, -9.8, -0.29]}
        rotation={[0, 1.6, 0]}
      />
    </group>
  );
}
