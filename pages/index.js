import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Preload, Image as ImageImpl, ScrollControls, Scroll, useScroll } from "@react-three/drei";

function Image(props) {
  const ref = useRef();
  const group = useRef();
  const data = useScroll();
  useFrame((state, delta) => {
    group.current.position.z = THREE.MathUtils.damp(group.current.position.z, Math.max(0, data.delta * 50), 4, delta);
    ref.current.material.grayscale = THREE.MathUtils.damp(
      ref.current.material.grayscale,
      Math.max(0, 1 - data.delta * 1000),
      4,
      delta
    );
  });
  return (
    <group ref={group}>
      <ImageImpl ref={ref} {...props} />
    </group>
  );
}

function Page({ m = 0.4, urls, ...props }) {
  const { width } = useThree((state) => state.viewport);
  const w = width < 10 ? 1.5 / 3 : 1 / 3;
  return (
    <group {...props}>
      <Image position={[-width * w, 0, -1]} scale={[width * w - m * 2, 5, 1]} url={urls[0]} />
      <Image position={[0, 0, 0]} scale={[width * w - m * 2, 5, 1]} url={urls[1]} />
      <Image position={[width * w, 0, 1]} scale={[width * w - m * 2, 5, 1]} url={urls[2]} />
    </group>
  );
}

function Pages() {
  const { width } = useThree((state) => state.viewport);
  return (
    <>
      <Page position={[-width * 1, 0, 0]} urls={["image4.jpeg", "/image5.jpeg", "/image6.jpeg"]} />
      <Page position={[width * 0, 0, 0]} urls={["/image7.jpeg", "/image8.jpeg", "/image9.jpeg"]} />
      <Page position={[width * 1, 0, 0]} urls={["/image10.jpeg", "/image11.jpeg", "/image12.jpeg"]} />
      <Page position={[width * 2, 0, 0]} urls={["/image1.jpeg", "/image2.jpeg", "/image3.jpeg"]} />
      <Page position={[width * 3, 0, 0]} urls={["image13.jpeg", "/image14.jpeg", "/image15.jpeg"]} />

      <Page position={[width * 4, 0, 0]} urls={["image4.jpeg", "/image5.jpeg", "/image6.jpeg"]} />
      <Page position={[width * 5, 0, 0]} urls={["/image7.jpeg", "/image8.jpeg", "/image9.jpeg"]} />
      <Page position={[width * 6, 0, 0]} urls={["/image10.jpeg", "/image11.jpeg", "/image12.jpeg"]} />
      <Page position={[width * 7, 0, 0]} urls={["/image1.jpeg", "/image2.jpeg", "/image3.jpeg"]} />
      <Page position={[width * 8, 0, 0]} urls={["image13.jpeg", "/image14.jpeg", "/image15.jpeg"]} />
    </>
  );
}

export default function Home() {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      {/* <Environment preset="city" /> */}
      <Suspense fallback={null}>
        <ScrollControls infinite horizontal damping={4} pages={6} distance={1}>
          <Scroll>
            <Pages />
          </Scroll>
          <Scroll html>
            <h1 style={{ position: "absolute", top: "20vh", left: "-75vw" }}>Art</h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "25vw" }}>Till</h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "125vw" }}>Death</h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "225vw" }}>We</h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "325vw" }}>Do</h1>

            <h1 style={{ position: "absolute", top: "20vh", left: "425vw" }}>Art</h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "525vw" }}>Till</h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "625vw" }}>Death</h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "725vw" }}>We</h1>
            <h1 style={{ position: "absolute", top: "20vh", left: "825vw" }}>Do</h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  );
}
