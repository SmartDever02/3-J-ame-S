/*
This file was generated by https://github.com/pmndrs/gltfjsx and then
customized manually. It uses drei's new useAnimations hook which extracts
all actions and sets up a THREE.AnimationMixer for it so that you don't have to.
All of the assets actions, action-names and clips are available in its output. 
*/

import { useEffect, useState } from 'react';
import { useGLTF, useTexture, useAnimations } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';

const animationStop = (status) => {
  if (status === 'rope' || status === 'idle') {
    return false;
  }
  return true;
};

export default function Model(props) {
  // Fetch model and a separate texture
  const { nodes, animations } = useGLTF('/assets/stacy.glb');
  const texture = useTexture('/assets/stacy.jpg');
  // Extract animation actions
  const { ref, actions, names } = useAnimations(animations);
  // Animate the selection halo
  const { color, scale } = useSpring({
    scale: [1, 1, 1],
    color: 'aquamarine',
  });
  const [rotation, setRotation] = useState([1.57, 0, 0]);
  const [status, setStatus] = useState('idle');

  // Change animation when the index changes
  useEffect(() => {
    console.log(names);

    // actions[status].loop = status !== 'idle' && LoopOnce;
    // Reset and fade in animation after an index has been changed
    actions[status].reset().fadeIn(0.5).play();
    animationStop(status) &&
      setTimeout(() => {
        setStatus('idle');
      }, 3000);

    // In the clean-up phase, fade it out
    // console.log(names[index]);
    return () => actions[status].fadeOut(0.5);
  }, [actions, names, status]);
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode == 65) {
        // Key Left
        let _rotation = rotation;
        setRotation([_rotation[0], _rotation[1], _rotation[2] - 0.2]);
      } else if (e.keyCode == 68) {
        // Key Right
        let _rotation = rotation;
        setRotation([_rotation[0], _rotation[1], _rotation[2] + 0.2]);
      } else if (e.code == 'Space') {
        setStatus('jump');
      } else if (e.keyCode == 81) {
        // Key Q
        setStatus('wave');
      } else if (e.keyCode == 82) {
        // Key R
        setStatus('rope');
      } else if (e.keyCode == 69) {
        // Key E
        setStatus('swingdance');
      } else if (e.keyCode == 71) {
        // Key g
        setStatus('golf');
      } else if (e.keyCode == 86) {
        // Key v
        setStatus('react');
      } else if (e.keyCode == 83) {
        // Key s
        setStatus('shrug');
      }
    });
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={rotation} scale={0.01}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.stacy.geometry}
          skeleton={nodes.stacy.skeleton}
          scale={100}
        >
          <meshStandardMaterial map={texture} map-flipY={false} skinning />
        </skinnedMesh>
      </group>
    </group>
  );
}
