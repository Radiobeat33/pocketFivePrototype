// With nextJS designed to create multipage apps, I'm creating this wrapper that
// allows us to reuse Headers and Footers in a non-DRY way for each page

import React from 'react';
import '../../../styles/main.scss';
// import { IProps } from '../../../interfaces/nagivation.interface';

const withAppLayout = (ComposedComponent: React.FunctionComponent): React.ReactNode => {
  const AppLayout = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => {
    return (
      <section data-testid="app-layout" className="grid app-background">
        <ComposedComponent {...props} />
        <style jsx>{`
          .app-background {
            background-color: #f3f3f3;
          }
        `}</style>
      </section>
    );
  };

  return AppLayout;
};

export default withAppLayout;
