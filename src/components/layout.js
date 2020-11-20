/** @jsx jsx */
import { jsx } from 'theme-ui';
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
    </React.Fragment>
  );
}
