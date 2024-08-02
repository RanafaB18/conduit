import { Component, inject, OnInit } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthForm, Login, Page, Register } from './auth.types';
import { AuthService } from '../services/auth.service';
import { injectMutation } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [InputComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  #fb = inject(FormBuilder).nonNullable;
  #activatedRoute = inject(ActivatedRoute);
  #authService = inject(AuthService);
   
  page = this.#activatedRoute.snapshot.url[0].path as Page;
  title = this.page === 'register' ? 'Sign up' : 'Sign in';

  form = this.#fb.group<AuthForm>({
    email: this.#fb.control(''),
    password: this.#fb.control('')
  });
  formQuery = injectMutation(() => ({
    mutationFn: (form: FormGroup) => {
      const user = form.value;
      if (this.page === 'register') {
        return this.#authService.signUp(user as Register);
      } else {
        return this.#authService.login(user as Login);
      }
    }
  }))
  

  
  ngOnInit(): void {
    if (this.page === 'register') {
      this.form.addControl('username', this.#fb.control(''));
    }
  }

  submitForm() {
    this.formQuery.mutate(this.form);
  }

  getControl(controlName: string) {
    return this.form.get(controlName) as FormControl;
  }
}
