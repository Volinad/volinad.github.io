import { createEffect, createSignal } from "solid-js";

import { loadFull } from "tsparticles";
import { Engine } from "@tsparticles/engine";
import Particles from "@tsparticles/solid";
import { initParticlesEngine } from "@tsparticles/solid/src/index";

import styles from './App.module.css';
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
                <Particles className={styles.particles}
                    id="tsparticles"
                    options={particlesConfig}
                />
            )}
            <div class={`${styles.content} container mx-auto px-4 flex flex-col items-center`}>
                <h1 class="text-3xl font-bold px-4">
                    Hello world!
                </h1>
            </div>
        </div>
    );
};

export default App;
