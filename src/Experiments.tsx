import styles from './App.module.css';

const Experiments = () => {
  const containerClasses = 'container mx-auto px-4 my-8 flex flex-col items-center max-w-7xl';
  const borderClasses = 'border border-slate-200';

  return (
    <div class={`${styles.content} ${containerClasses}`}>
      <div class={`bg-white-600 w-full px-4 py-2 backdrop-blur-sm ${borderClasses}`}>
        <h2 class="text-3xl">Experiments</h2>
        <p>
          Here are some of the experiments I've done recently. I'm trying to keep this list up to date, but it's not always possible, so you can check my GitHub repositories for the latest updates.
        </p>
        <ul class="text-xl">
          <li><a target="_blank" href="https://osharper.github.io/solid-tsparticles/">
            Solid.js + tsParticles
          </a></li>
          <li><a target="_blank" href="https://t.me/addstickers/magicreatures">
            My son have made a set of Telegram stickers. You can add them using this link
          </a></li>
          <li><a target="_blank" href="https://osharper.github.io">
            This website. Solid.js + tsParticles
          </a></li>
        </ul>
      </div>
    </div>
  );
}

export default Experiments;