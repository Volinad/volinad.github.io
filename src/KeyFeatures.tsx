import styles from './App.module.css';

const CvBlock = () => {
  const containerClasses = 'container mx-auto px-4 my-8 flex flex-col items-center max-w-7xl';
  const listClasses = 'list-disc pl-6 mb-4';

  return (
    <div class={`${styles.content} ${containerClasses}`}>
      <div class={`flex flex-col mb-4 bg-opacity-10 bg-white w-full px-4 py-2 backdrop-blur-sm`}>
        <h2 class="text-3xl pt-1 pb-3">Key Features</h2>

        <h3 class="text-2xl">Universal Translation and Integration</h3>
        <ul class={`${listClasses}`}>
          <li>Convert text, video, audio, and images into rich, multi-layered graphs.</li>
          <li>Provide a holistic view of data through seamless integration of various media types.</li>
        </ul>

        <h3 class="text-2xl">Native Visual Creation</h3>
        <ul class={`${listClasses}`}>
          <li>Craft original messages and concepts directly within the visual language.</li>
          <li>Utilize intuitive tools designed for easy creation and manipulation of graphs.</li>
        </ul>

        <h3 class="text-2xl">Versatile Representation Forms</h3>
        <ul class={`${listClasses}`}>
          <li><b>Static Images:</b> High-quality visuals suitable for print or digital documents.</li>
          <li><b>Dynamic Videos:</b> Animated graphs that showcase changes over time.</li>
          <li><b>Interactive Interfaces:</b> Engage with data through interactive videos or holographic models.</li>
          <li><b>Immersive Virtual Spaces:</b> Experience data within a virtual environment for deeper interaction.</li>
        </ul>
      </div>
    </div>
  );
}

export default CvBlock;