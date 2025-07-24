import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        suscipit autem eos aliquam quibusdam voluptatibus! Quasi temporibus
        iure, sit mollitia obcaecati tempora cupiditate dolores illo repudiandae
        in optio est sunt.
      </p>
    </>
  );
}
