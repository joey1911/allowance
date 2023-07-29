import { observable } from '@legendapp/state';

const updatePasswordState = observable({
  step: 1,
  error: ''
});

export function resetUpdatePasswordState() {
  updatePasswordState.step.set(1);
  updatePasswordState.error.set('');
};

export default updatePasswordState;