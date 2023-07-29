import { observable } from '@legendapp/state';

const forgotPasswordState = observable({
  step: 1
});

export function resetForgotPasswordState() {
  forgotPasswordState.step.set(1);
};

export default forgotPasswordState;