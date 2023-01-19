import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formulario!: FormGroup;
  submitted = false;
  mgsLength = false;
  maxLength = 14;
  clearValue: any;
  showCard = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      cpf: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.mgsLength = true;

    if (this.formulario.valid) {
      this.clearValue = ' ';
      this.showCard = true;
      this.submitted = false;
      this.mgsLength = false;
    }
  }

  get registerFormControl() {
    return this.formulario.get('cpf'), this.formulario.controls;
  }

  testOnClick() {
    alert('Chama um metodo.');
  }
}
