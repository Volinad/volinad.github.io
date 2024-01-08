import Particles from "@tsparticles/solid";
import type { Component } from 'solid-js';
import particlesConfig from './particles-config.json';

const ParticleComponent: Component = () => {
  return (
    <div>
    <h1 style={{ color: "#fff" }}>Hello World</h1>
    <Particles id="tsparticles" options={particlesConfig} />
  </div>
  );
};

export default ParticleComponent;
