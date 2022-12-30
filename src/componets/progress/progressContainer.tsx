import { ReactNode } from "react";

interface Props {
  animationDuration: number;
  children: ReactNode;
  isFinished: boolean;
}

export const Container = ({
  animationDuration,
  children,
  isFinished,
}: Props) => (
  <div
    className="pointer-events-none"
    style={{
      opacity: isFinished ? 0 : 1,
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
);
