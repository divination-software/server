import { TOGGLE_TUTORIAL, TUTORIAL_NEXT, TUTORIAL_PREV } from '../constants/ActionTypes';

export function toggleTutorial(data) {
  return {
    type: TOGGLE_TUTORIAL,
  };
};

export function tutorialNext() {
  return {
    type: TUTORIAL_NEXT,
  };
};

export function tutorialPrev() {
  return {
    type: TUTORIAL_PREV,
  };
};
