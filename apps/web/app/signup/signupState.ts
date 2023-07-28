import { observable } from '@legendapp/state';

const signupState = observable({
  step: 1,
  formData: {
    email: null
  }
});

export default signupState;