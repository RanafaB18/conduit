import { FormControl } from '@angular/forms';

export type AuthForm = {
  email: FormControl<string>;
  password: FormControl<string>;
  username?: FormControl<string>;
};

export type Page = 'register' | 'login';

export type Login = {
  email: string;
  password: string;
};

export type Register = {
  username: string;
  email: string;
  password: string;
};
