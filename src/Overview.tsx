import styles from './App.module.css';

const AboutMe = () => {
  const containerClasses = 'container mx-auto px-4 my-8 flex flex-col items-center max-w-7xl';
  const borderClasses = 'border border-slate-200';

  return (
    <div class={`${styles.content} ${containerClasses}`}>
      <div class={`flex flex-col mb-4 bg-opacity-10 bg-white w-full px-4 py-2 backdrop-blur-sm ${borderClasses}`}>
        <h2 class="text-3xl pt-1 pb-3">Overview</h2>
        <p class="py-2">Semantic Mesh is an innovative universal visual language system that transforms any type of information into interactive, graph-based visualizations.</p>
        <p>By converting data, ideas, and concepts into a visual medium, GraphSpace offers a new form of communication that transcends traditional formats like text, video, or images. The platform makes information more accessible and easier to grasp by allowing users to either translate existing content or communicate directly in visual language.</p>
      </div>
    </div>
  );
}

export default AboutMe;
