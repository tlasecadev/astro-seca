import { Canvas } from "@react-three/fiber";
import { Plane, MeshWobbleMaterial } from "@react-three/drei";

const Waves = () => {
  return (
    <div className="fixed -z-10 inset-0 h-full w-full bg-blue">
      <Canvas>
        <pointLight position={[10, 0, 7]} intensity={1.25} />
        <Plane visible position={[0, 0, 0]} args={[128, 64, 256, 256]} rotation={[0, 0, 0.2]}>
          <MeshWobbleMaterial color="#01469d" attach="material" factor={0.75} speed={0.5} />
        </Plane>
      </Canvas>
    </div>
  );
};

export default Waves;
