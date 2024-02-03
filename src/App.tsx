import { createEffect, createSignal } from "solid-js";

import { loadFull } from "tsparticles";
import { Engine } from "@tsparticles/engine";
import Particles from "@tsparticles/solid";
import { initParticlesEngine } from "@tsparticles/solid/src/index";

import styles from './App.module.css';
import particlesConfig from './particles-config.json';
import photoUrl from './assets/me.jpg';

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

    var age = new Date().getFullYear() - 1986;
    var firstEmploymentDate = new Date(2009, 8, 1);
    var currentDate = new Date();
    var yearsOfExperience = currentDate.getFullYear() - firstEmploymentDate.getFullYear();

    return (
        <div class="App">
            {init() && (
                <Particles className={styles.particles}
                    id="tsparticles"
                    options={particlesConfig}
                />
            )}
            <div class={`${styles.content} container mx-auto px-4 flex flex-col items-center max-w-7xl`}>
                <header class="font-bold py-4 text-xs bg-white w-full text-center border border-slate-200">
                    <code>{`> Hello world! _`}</code>
                </header>
                <figure class="flex my-8 bg-white w-full px-4 py-2 border border-slate-200">
                    <img class="w-32 h-32 rounded-full ml-auto mr-4 border-4 border-slate-300" src={photoUrl} alt="Oleg Dolotov" />
                    <figcaption class="text-lg mr-auto ml-4 py-4">
                        <h1 class="text-3xl">Oleg Dolotov</h1>
                        <h2 class="mt-4 text-2xl">Fullstack web developer with {yearsOfExperience} years of experience</h2>
                        <p class="text-sm">{age} years old, digital nomad, currently living in Thailand</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default App;
