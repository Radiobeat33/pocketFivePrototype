import * as React from 'react';
import Link from 'next/link';
import { IProps } from '../../../interfaces/nagivation.interface';

// Forward Refs, is useful
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DynamicLink = React.forwardRef(({ to, prefetch, ...props }: IProps, ref: any) => {
  return (
    <Link href={to.endpoint} prefetch={prefetch || false}>
      <a {...props} ref={ref}>
        {to.title}
      </a>
    </Link>
  );
});

DynamicLink.displayName = 'DyanmicLink';

export default DynamicLink;
