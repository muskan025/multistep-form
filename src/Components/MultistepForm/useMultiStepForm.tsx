import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {//multiple states are to be tracked so we need custom hook

  const [currentStepIndex, setCurrentStepIndex] = useState(0); //tracking the page

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length) return i;
      return i + 1;
    });
  }
  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }
  function goto(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,//current index of the array
    step: steps[currentStepIndex],//particularcomponent
    steps,//array of components
    isFirstStep:currentStepIndex===0,
    isLastStep:currentStepIndex===steps.length-1,
    goto,
    next,
    back,
  };
}
