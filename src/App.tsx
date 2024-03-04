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

    var currentDate = new Date();
    var currentYear = new Date().getFullYear();
    // if current month is less than August, then subtract 1 from current year
    if (new Date().getMonth() < 8) currentYear--;

    var age = currentYear - 1986;
    var firstEmploymentDate = new Date(2009, 8, 1);
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
                <figure class="flex my-8 bg-white-600 w-full px-4 py-2 border border-slate-200 backdrop-blur-sm">
                    <img class="w-32 h-32 rounded-full ml-auto mr-4 border-4 border-slate-300" src={photoUrl} alt="Oleg Dolotov" />
                    <figcaption class="text-lg mr-auto ml-4 py-4">
                        <h1 class="text-3xl">Oleg Dolotov</h1>
                        <h2 class="mt-4 text-2xl">Fullstack web developer with {yearsOfExperience} years of experience</h2>
                        <p class="text-sm">{age}  years old, digital nomad, currently living in Thailand</p>
                    </figcaption>
                </figure>
            </div>

            <div class={`${styles.content} container mx-auto px-4 flex flex-col items-center max-w-7xl`}>
                <h3>
                    <a href="https://docs.google.com/document/d/1mVbuZVcYO2aDbF2FcHohd8dmozP17fEKvVGJ9ykWtaA/export?format=pdf" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
                        Download CV
                    </a>
                </h3>
            </div>

            <div class={`${styles.content} container mx-auto px-4 flex flex-col items-center max-w-7xl`}>
                <h2 class="text-2xl">Social networks:</h2>
                <ul class="text-xl">
                    <li><a href="https://www.linkedin.com/in/oleg-dolotov-96a053aa">LinkedIn</a></li>
                    <li><a href="https://github.com/osharper">GitHub</a></li>
                    <li><a href="https://www.stackoverflow.com/users/1048482/osharper">StackOverflow</a></li>
                    <li><a href="https://www.facebook.com/osharper">Facebook</a></li>
                    <li><a href="https://t.me/osharper">Telegram</a></li>
                    <li><a href="https://soundcloud.com/osharper">SoundCloud</a></li>
                </ul>
            </div>

            <div class={`${styles.content} container mx-auto px-4 flex flex-col items-center max-w-7xl`}>
                <p>Hello! Welcome to my GitHub page. I use it for various experiments with modern web technologies. You can find some of the results in Experiments section if you're curious. This page is made with Solid.js with tsParticles on the background</p>
            </div>

            <div class="container mx-auto px-4 flex flex-col items-center max-w-7xl">
                <h2 class="text-3xl">About me</h2>
                <p>
                    I have more than a decade of experience in developing web applications using various technologies and frameworks, such as Node.js, React, Angular, .NET, MongoDB and cloud service providers: AWS, GCP and Azure. My last projects were majorly cloud-based B2B web applications with focus on automation, robustness and scalability, but I would love to get involved in some B2C projects with high scalability requirements. My core competencies include full-stack development, data-driven reporting, API integration and development, CI/CD setup and data optimizations. My mission is to create innovative and user-friendly solutions that help people and organizations be more productive and solve real-world problems. I'm not limiting myself to some set of languages (my main ones are C#, JS/TS and Python nowadays) and always keen to learn something new, currently I'm exploring Unity3D, Go, Rust (with Bevy) and RDF/SPARQL.
                </p>
                <p>
                    For six years, I worked as a Senior Web Application Developer at Showd.me, a rapidly growing employee training and certification platform. I contributed to the transformation of the application into a robust and scalable solution capable of managing a diverse array of tasks, such as data-driven reporting using raw ElasticSearch event data, PDF generation and bundling in AWS Lambda tasks, and interacting with various EMS systems featuring complex APIs. I worked with a dedicated development team and coordinated the server-side, client-side, and storage areas of the project. I also performed code reviews and ensured the quality and performance of the code.
                </p>
                <p>
                    I have a strong understanding of the principles of software development, including SOLID, DRY, KISS, and YAGNI. I am experienced in using various design patterns and architectural styles, such as MVC, MVVM, and CQRS. I am also familiar with various development methodologies, such as Agile, Scrum, and Kanban. I am a strong advocate of test-driven development and continuous integration, and I have experience with various testing frameworks, such as Jest, Mocha, and Chai. I am also familiar with various CI/CD tools, such as Jenkins, Travis CI, and GitHub Actions.
                </p>
            </div>

            <div class={`${styles.content} container mx-auto px-4 flex flex-col items-center max-w-7xl`}>
                <h2 class="text-3xl">Major tools</h2>

                <h3 class="text-2xl">Server side:</h3>
                <ul class="text-xl">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>ASP.NET Core</li>
                    <li>Python</li>
                    <li>Go</li>
                    <li>Rust</li>
                </ul>

                <h3 class="text-2xl">Client side:</h3>
                <ul class="text-xl">
                    <li>React</li>
                    <li>Angular</li>
                    <li>Solid.js</li>
                    <li>Vue</li>
                    <li>Unity3D</li>
                </ul>

                <h3 class="text-2xl">Databases:</h3>
                <ul class="text-xl">
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>SQLite</li>
                    <li>Redis</li>
                </ul>

                <h3 class="text-2xl">Infrastructure:</h3>
                <ul class="text-xl">
                    <li>CI/CD</li>
                    <li>AWS</li>
                    <li>GCP</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>Serverless</li>
                </ul>
            </div>

            <div class={`${styles.content} container mx-auto px-4 flex flex-col items-center max-w-7xl`}>
                <h2 class="text-3xl">Experiments</h2>
                <p>
                    Here are some of the experiments I've done recently. I'm trying to keep this list up to date, but it's not always possible, so you can check my GitHub repositories for the latest updates.
                </p>
                <ul class="text-xl">
                    <li><a target="_blank" href="https://osharper.github.io/solid-tsparticles/">This website. Solid.js + tsParticles</a></li>
                    <li><a target="_blank" href="https://t.me/addstickers/magicreatures">My son have made a set of Telegram stickers. You can add them using this link</a></li>
                    <li><a target="_blank" href="https://osharper.github.io/solid-tsparticles/">Solid.js + tsParticles</a></li>
                    <li><a target="_blank" href="https://osharper.github.io/solid-tsparticles/">Solid.js + tsParticles</a></li>
                </ul>
            </div>

            <div class={`${styles.content} container mx-auto px-4 flex flex-col items-center max-w-7xl`}>
                <h2 class="text-3xl">Contact me</h2>
                <p>You can contact me via email: <a href="mailto:odolotov@gmail.com">odolotov@gmail.com</a></p>
            </div>
        </div>
    );
};

export default App;
