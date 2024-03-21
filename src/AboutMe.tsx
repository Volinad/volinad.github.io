import styles from './App.module.css';
import FacebookIcon from './svg/FacebookIcon';
import Telegramicon from './svg/Telegramicon';
import LinkedinIcon from './svg/linkedin-svgrepo-com.svg'
import Soundcloudicon from './svg/soundcloudicon';
import StackoverflowIcon from './svg/stackicon';

const AboutMe = () => {
  const containerClasses = 'container mx-auto px-4 my-8 flex flex-col items-center max-w-7xl';
  const borderClasses = 'border border-slate-200';

  return (
    <div class={`${styles.content} ${containerClasses}`}>
      <div class={`flex flex-col mb-4 bg-white-600 w-full px-4 py-2 backdrop-blur-sm ${borderClasses}`}>
        <h2 class="text-2xl">Social networks:</h2>
        <ul class="text-xl list-image-none flex">
          <li><a href="https://www.linkedin.com/in/oleg-dolotov-96a053aa">
            LinkedinIcon
          </a></li>
          <li><a href="https://github.com/osharper">GitHub</a></li>
          <li><a href="https://www.stackoverflow.com/users/1048482/osharper">
            <StackoverflowIcon />
            </a></li>
          <li><a href="https://www.facebook.com/osharper">
            <FacebookIcon />
          </a></li>
          <li><a href="https://t.me/osharper">
            <Telegramicon />
          </a></li>
          <li><a href="https://soundcloud.com/osharper">
            <Soundcloudicon />
          </a></li>
        </ul>
      </div>

      <div class={`mb-4 bg-white-600 w-full px-4 py-2 backdrop-blur-sm ${borderClasses}`}>
        <p>Hello! Welcome to my GitHub page. I use it for various experiments with modern web technologies. You can find some of the results in Experiments section if you're curious. This page is made with Solid.js with tsParticles on the background</p>
      </div>

      <div class={`mb-4 bg-white-600 w-full px-4 py-2 backdrop-blur-sm ${borderClasses}`}>
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
    </div>
  );
}

export default AboutMe;
