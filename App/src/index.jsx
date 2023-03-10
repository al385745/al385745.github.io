import './style.css';
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import * as THREE from 'three'
import { KeyboardControls } from '@react-three/drei';
import Experience from './Experience/Experience.js'
import Interface from './Experience/Interface.js'

const root = ReactDOM.createRoot(document.querySelector('#root'));        
root.render(
  <StrictMode>
      <Leva collapsed />
      <KeyboardControls
        map={ [
           { name: 'forward', keys: ['ArrowRight', 'KeyD'] },
           { name: 'backward', keys: ['ArrowLeft', 'KeyA'] },
           { name: 'escape', keys: ['KeyR'] },
        ] }
      >
        <Canvas
            dpr={ [1, 2] } // clamp pixel ratio (default)
            gl={ {
                antialias:true, // default
                // toneMapping: THREE.ACESFilmicToneMapping,
                outputEncoding: THREE.sRGBEncoding // THREE.ColorManagement.legacyMode = false
                } } 
            shadows
            >
              <Experience/>
        </Canvas>
        <Interface/>
      </KeyboardControls>
  </StrictMode>
)