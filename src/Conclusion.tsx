import styles from './App.module.css';
import Image from './Image';
import graphspace3 from './assets/graphspace3.jpg';

const ContactMe = () => {
  const containerClasses = 'container mx-auto px-4 my-8 flex flex-col items-center max-w-7xl';
  const borderClasses = 'border border-slate-200';

  return (
    <div class={`${styles.content} ${containerClasses}`}>
      <Image
        src={graphspace3}
        alt="Sematic mesh presentation"
        class="rounded-lg shadow-lg"
      />
      <div class={`flex flex-col my-8 mb-4 bg-opacity-10 bg-white w-full px-4 py-2 backdrop-blur-sm ${borderClasses}`}>
      <h2 class="text-3xl pt-1 pb-3">Conclusion</h2>

        <p>
          GraphSpace sets a new standard in visual communication, unlocking possibilities for deeper understanding, enhanced exchange, and effective utilization of information in the modern world.
          By transforming how we visualize and interact with data, GraphSpace empowers users to explore complex concepts with ease and clarity.
        </p>
      </div>
    </div>
  );
}

export default ContactMe;