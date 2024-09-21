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
import Image from "./Image";
import graphspace1 from "./assets/graphspace1.jpg";

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

    return (
        <div class="App">
            {init() && (
                <Particles className={styles.particles}
                    id="tsparticles"
                    options={particlesConfig} />
            )}

            <div class={`${styles.content} container mx-auto px-4 flex flex-col items-center max-w-7xl`}>
                <h1 class="text-4xl pt-5 font-bold code">Semantic Mesh</h1>
                <h2 class="text-2xl pb-5 code">Grasp the essence</h2>
                <Image
                    src={graphspace1}
                    alt="Sematic mesh presentation"
                    class="rounded-lg shadow-lg"
                />
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
