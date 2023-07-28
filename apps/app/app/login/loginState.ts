import { observable } from '@legendapp/state';

const loginState = observable({
  status: 0,
  error: ''
});

export function resetLoginState() {
  loginState.status.set(0);
  loginState.error.set('');
};

export default loginState;