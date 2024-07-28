import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const MaxWidthWrapper = ({
  classNameExtra,
  children,
}: {
  classNameExtra?: string;
  children: ReactNode;
}) => {
  return (
    // cn ini kayak pengganti clsx, dari shadcn
    // utk constructing className string
    <div
      className={cn(
        'h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 border border-black',
        classNameExtra
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
