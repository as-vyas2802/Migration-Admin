// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { SharedUi } from 'shared-ui';

export function App() {
  return (
    <div>
      <NxWelcome title="new-repo-project" />
    </div>
  );
}

export default App;
