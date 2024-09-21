import styles from './App.module.css';
import Image from './Image';
import graphspace2 from './assets/graphspace2.jpg';

const Experiments = () => {
  const containerClasses = 'container mx-auto px-4 my-8 flex flex-col items-center max-w-7xl';
  const listClasses = 'list-disc pl-6 mb-4';

  return (
    <div class={`${styles.content} ${containerClasses}`}>
      <Image
          src={graphspace2}
          alt="Sematic mesh presentation"
          class="rounded-lg shadow-lg"
      />
      <div class={`flex flex-col mt-8 mb-4 bg-opacity-10 bg-white w-full px-4 py-2 backdrop-blur-sm`}>
        <h2 class="text-3xl pt-1 pb-3">Advantages</h2>

        <h3 class="text-2xl">Enhanced Information Absorption</h3>
        <ul class={`${listClasses}`}>
          <li>Absorb more data in less time through multi-level visualization.</li>
          <li>Gain a comprehensive understanding of complex topics quickly.</li>
        </ul>

        <h3 class="text-2xl">Multiple Perspectives</h3>
        <ul class={`${listClasses}`}>
          <li>Simultaneously explore various viewpoints or aspects of the same issue.</li>
          <li>Facilitate a deeper and more nuanced understanding of information.</li>
        </ul>

        <h3 class="text-2xl">Advanced Analysis and Modeling</h3>
        <ul class={`${listClasses}`}>
          <li>Analyze historical data and model future scenarios with powerful tools.</li>
          <li>Generate deep insights and predictive models for informed decision-making.</li>
        </ul>

        <h3 class="text-2xl">User-Friendly Accessibility</h3>
        <ul class={`${listClasses}`}>
          <li>Intuitively understandable visual language that's easy to learn for everyone.</li>
          <li>Break down barriers to understanding complex concepts regardless of background.</li>
        </ul>

        <h3 class="text-2xl">Simplifying Complexity</h3>
        <ul class={`${listClasses}`}>
          <li>Simplify explanations of intricate phenomena, processes, or systems.</li>
          <li>Use graphic representations to make complex information easier to perceive and understand.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experiments;