export interface ISignUp {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  zipCode: string;
  password: string;
  passwordConfirm: string;
}
export interface ISignIn {
  email: string;
  password: string;
  rememberMe: boolean;
}
