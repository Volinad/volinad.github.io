import styles from './App.module.css';
import Image from './Image';
import graphspace3 from './assets/graphspace3.jpg';

const ContactMe = () => {
  const containerClasses = 'container mx-auto px-4 my-8 flex flex-col items-center max-w-7xl';

  return (
    <div class={`${styles.content} ${containerClasses}`}>
      <Image
        src={graphspace3}
        alt="Sematic mesh presentation"
        class="rounded-lg shadow-lg"
      />
      <div class={`flex flex-col my-8 mb-4 bg-opacity-10 bg-white w-full px-4 py-2 backdrop-blur-sm`}>
        <h2 class="text-3xl pt-1 pb-3">Conclusion</h2>

        <p>
          Semantic Mesh sets a new standard in visual communication, unlocking possibilities for deeper understanding, enhanced exchange, and effective utilization of information in the modern world.
          By transforming how we visualize and interact with data, Semantic Mesh empowers users to explore complex concepts with ease and clarity.
        </p>
      </div>

      <div class={`flex flex-col my-8 mb-4 bg-opacity-10 bg-white w-full px-4 py-2 backdrop-blur-sm`}>
        <h2 class="text-3xl pt-1 pb-3">Important Notice</h2>

        <p>
          The project description presented above is a simplified overview that does not include specific details or solutions. It is intended solely to give a general impression of the project. All images are AI-generated and do not reflect what is actually in production.
        </p>
        <p>
          For collaboration or further information, please contact <a href="mailto:denis@semanticmesh.com">denis@semanticmesh.com</a>
        </p>
      </div>
    </div>
  );
}

export default ContactMe;