import { Component } from 'solid-js';

interface ImageProps {
  src: string;
  alt: string;
  class?: string;
}

const Image: Component<ImageProps> = (props) => {
  return (
    <div class="relative overflow-hidden">
      <img
        src={props.src}
        alt={props.alt}
        class={`w-full h-auto ${props.class || ''}`}
      />
      <div class="absolute inset-0 bg-gradient-to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Image;