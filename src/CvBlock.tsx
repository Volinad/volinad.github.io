import styles from './App.module.css';

const CvBlock = () => {
  const containerClasses = 'container mx-auto px-4 my-8 flex flex-col items-center max-w-7xl';
  const borderClasses = 'border border-slate-200';

  return (
    <div class={`${styles.content} ${containerClasses}`}>
      <div class={`mb-4 bg-white-600 w-full px-4 py-2 backdrop-blur-sm ${borderClasses}`}>
        <h2 class="text-3xl my-8">Major tools</h2>

        <h3 class="text-2xl ">Server side:</h3>
        <ul class="text-xl ">
          <li>Node.jsExpress</li>
          <li>ASP.NET Core</li>
          <li>Python</li>
          <li>Go</li>
          <li>Rust</li>
        </ul>

        <h3 class="text-2xl ">Client side:</h3>
        <ul class="text-xl ">
          <li>React</li>
          <li>Angular</li>
          <li>Solid.js</li>
          <li>Vue</li>
          <li>Unity3D</li>
        </ul>

        <h3 class="text-2xl">Databases:</h3>
        <ul class="text-xl ">
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>SQLite</li>
          <li>Redis</li>
        </ul>

        <h3 class="text-2xl">Infrastructure:</h3>
        <ul class="text-xl ">
          <li>CI/CD</li>
          <li>AWS</li>
          <li>GCP</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>Serverless</li>
        </ul>
      </div>
    </div>
  );
}

export default CvBlock;