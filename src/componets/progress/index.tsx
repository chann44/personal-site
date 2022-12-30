import { useNProgress } from "@tanem/react-nprogress";
import { Bar } from "./bar";
import { Container } from "./progressContainer";

interface Props {
  isAnimating: boolean;
}

const Progress = ({ isAnimating }: Props) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  );
};

export default Progress;
