import { loadFull } from "tsparticles";
import configs from "@tsparticles/configs";
import { createEffect, createSignal } from "solid-js";
import Particles from "@tsparticles/solid";
import { initParticlesEngine } from "@tsparticles/solid/src/index";
import { Engine } from "@tsparticles/engine";

import logo from './logo.svg';
import styles from './App.module.css';
import ParticlesComponent from './ParticlesComponent';
import particlesConfig from './particles-config.json';


const App = () => {
  const [init, setInit] = createSignal(false);

    createEffect(() => {
        if (init()) {
            return;
        }

        initParticlesEngine(async (engine: Engine) => {
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    });

    return (
        <div class="App">
            {init() && (
                <Particles
                    id="tsparticles"
                    options={particlesConfig}
                />
            )}
        </div>
    );
};

export default App;
