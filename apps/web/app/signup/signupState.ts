import { observable } from '@legendapp/state';

const signupState = observable({
  step: 1,
  formData: {
    email: null
  }
});

export function resetSignupState() {
  signupState.step.set(1);
  signupState.formData.set({
    email: null
  });
};

export default signupState;