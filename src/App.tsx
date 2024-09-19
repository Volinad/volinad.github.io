import { createEffect, createSignal } from "solid-js";

import { loadFull } from "tsparticles";
import { Engine } from "@tsparticles/engine";
import Particles from "@tsparticles/solid";
import { initParticlesEngine } from "@tsparticles/solid/src/index";

import particlesConfig from "./particles-config.json";

import styles from "./App.module.css";

import Overview from "./Overview";
import KeyFeatures from "./KeyFeatures";
import Advantages from "./Advantages";
import ProductOfferings from "./ProductOfferings";
import Conclusion from "./Conclusion";

export const App = () => {
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

    const containerClasses = 'container mx-auto px-4 my-8 flex flex-col items-center max-w-7xl';
    const borderClasses = 'border border-slate-200';

    return (
        <div class="App">
            {init() && (
                <Particles className={styles.particles}
                    id="tsparticles"
                    options={particlesConfig} />
            )}

            <div class={`${styles.content} container mx-auto px-4 flex flex-col items-center max-w-7xl`}>
                <header class={`font-bold py-4 text-xs bg-white w-full text-center ${borderClasses}`}>
                    <code>{`> Grasp the essence`}</code>
                </header>

                <h1 class="text-3xl">GraphSpace</h1>
            </div>

            <Overview />

            <KeyFeatures />

            <Advantages />

            <ProductOfferings />

            <Conclusion />
        </div>
    );
};

export default App;
