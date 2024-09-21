import styles from './App.module.css';

const Experiments = () => {
  const containerClasses = 'container mx-auto px-4 my-8 flex flex-col items-center max-w-7xl';
  const borderClasses = 'border border-slate-200';
  const listClasses = 'list-disc pl-6 mb-4';

  return (
    <div class={`${styles.content} ${containerClasses}`}>
      <div class={`flex flex-col mb-4 bg-opacity-10 bg-white w-full px-4 py-2 backdrop-blur-sm ${borderClasses}`}>
        <h2 class="text-3xl pt-1 pb-3">Product Offerings</h2>
        <p>GraphSpace provides flexibility similar to how text exists in both print and digital formats:</p>

        <h3 class="text-2xl">Static Visualizations</h3>
        <ul class={`text-xl ${listClasses}`}>
          <li>Create images suitable for inclusion in reports, presentations, or publications.</li>
        </ul>

        <h3 class="text-2xl">Animated Visualizations</h3>
        <ul class={`text-xl ${listClasses}`}>
          <li>Develop videos that bring data to life, illustrating dynamics and trends over time.</li>
        </ul>

        <h3 class="text-2xl">Interactive Experiences</h3>
        <ul class={`text-xl ${listClasses}`}>
          <li>Offer interactive videos and holographic interfaces for users to delve into different information layers.</li>
        </ul>

        <h3 class="text-2xl">Immersive Environments</h3>
        <ul class={`text-xl ${listClasses}`}>
          <li>Enable users to physically interact with data within virtual spaces, enhancing engagement and understanding.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experiments;