import { createEffect, createSignal } from "solid-js";

import { loadFull } from "tsparticles";
import { Engine } from "@tsparticles/engine";
import Particles from "@tsparticles/solid";
import { initParticlesEngine } from "@tsparticles/solid/src/index";

import particlesConfig from './particles-config.json';

import styles from './App.module.css';

import AboutMe from "./AboutMe";
import MeCard from "./MeCard";
import CvBlock from "./CvBlock";
import Experiments from "./Experiments";
import ContactMe from "./ContactMe";

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
                    <code>{`> Hello world! _`}</code>
                </header>

                <MeCard />
            </div>

            <div class={`${styles.content} ${containerClasses}`}>
                <h3 class="h-12">
                    <a href="https://docs.google.com/document/d/1mVbuZVcYO2aDbF2FcHohd8dmozP17fEKvVGJ9ykWtaA/export?format=pdf"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-3 rounded">
                        Download CV
                    </a>
                </h3>
            </div>

            <AboutMe />

            <CvBlock />

            <Experiments />

            <ContactMe />
        </div>
    );
};

export default App;
