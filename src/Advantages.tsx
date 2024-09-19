import styles from './App.module.css';

const Experiments = () => {
  const containerClasses = 'container mx-auto px-4 my-8 flex flex-col items-center max-w-7xl';
  const borderClasses = 'border border-slate-200';

  return (
    <div class={`${styles.content} ${containerClasses}`}>
      <div class={`bg-white-600 w-full px-4 py-2 backdrop-blur-sm ${borderClasses}`}>
        <h2 class="text-3xl">Advantages</h2>

        <h3 class="text-2xl">Enhanced Information Absorption</h3>
        <ul class="text-xl">
          <li>Absorb more data in less time through multi-level visualization.</li>
          <li>Gain a comprehensive understanding of complex topics quickly.</li>
        </ul>

        <h3 class="text-2xl">Multiple Perspectives</h3>
        <ul class="text-xl">
          <li>Simultaneously explore various viewpoints or aspects of the same issue.</li>
          <li>Facilitate a deeper and more nuanced understanding of information.</li>
        </ul>

        <h3 class="text-2xl">Advanced Analysis and Modeling</h3>
        <ul class="text-xl">
          <li>Analyze historical data and model future scenarios with powerful tools.</li>
          <li>Generate deep insights and predictive models for informed decision-making.</li>
        </ul>

        <h3 class="text-2xl">User-Friendly Accessibility</h3>
        <ul class="text-xl">
          <li>Intuitively understandable visual language that's easy to learn for everyone.</li>
          <li>Break down barriers to understanding complex concepts regardless of background.</li>
        </ul>

        <h3 class="text-2xl">Simplifying Complexity</h3>
        <ul class="text-xl">
          <li>Simplify explanations of intricate phenomena, processes, or systems.</li>
          <li>Use graphic representations to make complex information easier to perceive and understand.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experiments;