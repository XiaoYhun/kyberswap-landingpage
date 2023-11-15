"use client";
import { Box } from "@chakra-ui/react";
import { useAnimate, useTime } from "framer-motion";
import { useState, useLayoutEffect, useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Billboard,
  ContactShadows,
  Environment,
  Float,
  Image,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
  SpotLight,
  Stars,
} from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { Box3, Sphere, Vector3 } from "three";
const IMAGES = [
  {
    imageSrc: "/assets/svg/wallets/metamask.svg",
    scale: 1.25,
    position: [5, 1, -0.5],
  },
  {
    imageSrc: "/assets/svg/wallets/rabby.svg",
    scale: 1.25,
    position: [4, 3, 1.25],
  },
  {
    imageSrc: "/assets/svg/wallets/trustwallet.svg",
    scale: 1.25,
    position: [-5, 3, 1.25],
  },
  {
    imageSrc: "/assets/svg/wallets/blocto.svg",
    scale: 1.25,
    position: [-2, 4, 0.5],
  },
  {
    imageSrc: "/assets/svg/wallets/krystal.svg",
    scale: 1.25,
    position: [-3, -1, -2],
  },
  {
    imageSrc: "/assets/svg/wallets/wallet-connect.svg",
    scale: 1.25,
    position: [3, 2, 4],
  },
  {
    imageSrc: "/assets/svg/wallets/brave.svg",
    scale: 1.25,
    position: [2, -3.5, -4],
  },
  {
    imageSrc: "/assets/svg/wallets/safe.svg",
    scale: 1.25,
    position: [-3.5, -2, -1],
  },
  {
    imageSrc: "/assets/svg/wallets/coinbase.svg",
    scale: 1,
    position: [5, -3, -3],
  },
  {
    imageSrc: "/assets/svg/wallets/coin98.svg",
    scale: 1,
    position: [-5, 2, 3],
  },
];

export default function SpinningEcosystem() {
  const [scope, animate] = useAnimate();
  const [imagePos, setImagePos] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    // animate(scope.current, { rotate: [0, 360] }, { duration: 6, ease: "linear", repeat: Infinity });
    try {
      animate(".icon", { rotateY: [0, -360] }, { duration: 6, ease: "linear", repeat: Infinity });
    } catch (e) {
      console.log("Error:", e);
    }
  }, [imagePos]);

  useLayoutEffect(() => {
    setImagePos(
      IMAGES.map(() => {
        return { x: Math.random() * 400 - 200, y: Math.random() * 400 - 200 };
      })
    );
  }, []);

  return (
    <Box
      ref={scope}
      w="100%"
      h="100%"
      bg="whiteAlpha.200"
      display="flex"
      position="relative"
      alignItems="center"
      justifyContent="center"
    >
      {/* <Canvas dpr={[1.5, 2]} linear shadows camera={{ position: [0, 0, 20], zoom: 2, far: 10000 }}>
        <fog attach="fog" args={["#272730", 16, 30]} />
        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight
            castShadow
            intensity={2.25}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <ambientLight intensity={3} />
        <CanvasComponent />
        <OrbitControls
          enableDamping={true}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stars radius={500} depth={50} count={1000} factor={10} />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[5, 5]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
          />
        </mesh>
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={1}
          width={5}
          height={5}
          blur={2.5}
          far={1.6}
        />
      </Canvas> */}
      <Canvas camera={{ fov: 50, position: [0, 10, 20] }}>
        <ambientLight intensity={2} />
        <directionalLight position={[0, 5, 0]} intensity={3} />
        <color attach="background" args={["#191920"]} />
        <fog attach="fog" args={["#191920", 10, 50]} />
        <group position={[10, -1, 0]}>
          <Float speed={4} rotationIntensity={1} floatIntensity={1}>
            <CanvasComponent />
            <Stars saturation={0} count={400} speed={0.5} />
          </Float>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeGeometry args={[100, 100]} />
            <MeshReflectorMaterial
              blur={[3000, 3000]}
              resolution={4096}
              mixBlur={100}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#050505"
              metalness={0.5}
            />
          </mesh>
        </group>
        {/* <SpotLight position={[0, 0, 10]} lookAt={[0, 10, 0]} power={10} intensity={10} /> */}
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
    </Box>
  );
}

const SVGShape = ({ url, position, scale = 3 }: { url: string; position?: any; scale?: number }) => {
  const data = useLoader(SVGLoader, url);
  const ref = useRef<any>(null);
  const [baseScale, setBaseScale] = useState(1);
  const shapes = useMemo(
    () =>
      data.paths.flatMap((g: any, index: number) =>
        g.toShapes(true).map((shape: any) => ({ shape, color: g.color, index }))
      ),
    [data]
  );
  useLayoutEffect(() => {
    const sphere = new Box3().setFromObject(ref.current).getBoundingSphere(new Sphere());
    ref.current.position.set(-((sphere.center.x * scale) / sphere.radius), 0, 0);
    setBaseScale((1 * scale) / sphere.radius);
  }, [scale]);

  return (
    <group ref={ref} scale={baseScale} position={position || [0, 0, 0]}>
      {shapes.map((s: any, index: number) => (
        <mesh key={index} rotation-y={Math.PI} rotation-z={Math.PI}>
          <meshPhongMaterial color={s.color} side={2} />
          <shapeGeometry args={[s.shape]} />
        </mesh>
      ))}
    </group>
  );
};

const CanvasComponent = () => {
  const time = useTime();
  const { viewport } = useThree();
  const ref = useRef<any>();
  const image = useRef<any>();
  const images = useRef<any>();
  useFrame((_, delta) => {
    const rotationSpeed = delta * 1.5;
    ref.current.rotation.y += rotationSpeed;
    images.current?.map((r: any) => (r.rotation.y -= rotationSpeed));
  });
  return (
    <group position={[0, 4, 0]}>
      {/* <mesh ref={ref} rotation={[1, 0, 0]}>
        <boxGeometry ref={ref} args={[2, 2, 2]} />
      </mesh> */}
      <SVGShape position={[1, 20, 0]} url={"/assets/images/logo-kyberswap.svg"} />
      <group ref={ref} position={[0, -2, 0]}>
        {IMAGES.map((image, index) => {
          return (
            <Billboard key={index} follow position={image.position as any}>
              <Image
                ref={(ref) => {
                  if (!images.current) images.current = [];
                  if (ref && images.current) {
                    images.current[index] = ref;
                  }
                }}
                raycast={() => null}
                url={image.imageSrc}
                scale={image.scale}
                transparent
              />
            </Billboard>
          );
        })}
      </group>
    </group>
  );
};
function Shape({ shape }: { shape: any }) {
  return (
    <mesh>
      <shapeGeometry args={[shape]} />
    </mesh>
  );
}
