import React, { useState } from "react";
import {
  ZapparCamera,
  InstantTracker,
  ZapparCanvas,
  BrowserCompatibility,
} from "@zappar/zappar-react-three-fiber";

const Box = (props: any) => {
  const [clicked, click] = useState(false);

  return (
    <mesh
      {...props}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={clicked ? "hotpink" : "orange"} />
    </mesh>
  );
};

function App() {
  const [placementMode, setPlacementMode] = useState(true);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  return (
    <>
      <BrowserCompatibility />
      <ZapparCanvas>
        <ZapparCamera />
        <InstantTracker
          placementMode={placementMode}
          placementCameraOffset={[0, 0, -5]}
        >
          <Box position={[-0.6, 0, 0]} />
          <Box position={[0.6, 0, 0]} />
        </InstantTracker>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
      </ZapparCanvas>
      <div
        id="zappar-button"
        role="button"
        onKeyPress={() => {
          setPlacementMode((currentPlacementMode) => !currentPlacementMode);
        }}
        tabIndex={0}
        onClick={() => {
          setPlacementMode((currentPlacementMode) => !currentPlacementMode);
        }}
      >
        Tap here to
        {placementMode ? " place " : " pick up "}
        the object
      </div>
    </>
  );
}

export default App;
