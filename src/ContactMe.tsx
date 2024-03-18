import styles from './App.module.css';

const ContactMe = () => {
  const containerClasses = 'container mx-auto px-4 my-8 flex flex-col items-center max-w-7xl';
  const borderClasses = 'border border-slate-200';

  return (
    <div class={`${styles.content} ${containerClasses}`}>
      <div class={`flex flex-col bg-white-600 w-full px-4 py-2 backdrop-blur-sm ${borderClasses}`}>
        <h2 class="text-3xl">Contact me</h2>

        <p>You can contact me via email or messengers: <a href="mailto:odolotov@gmail.com">odolotov@gmail.com</a></p>

        <p>If for any reason you want me to reach you first you can use the form below:</p>

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc8Ebyw7xoitGWw0aOSGcp7qkUbKzwWut8b3R9YCKpXMwcjiQ/viewform?embedded=true"
                width="666" height="777" frameborder="0" marginheight="0" marginwidth="0">
                Loading…
        </iframe>
      </div>
    </div>
  );
}

export default ContactMe;