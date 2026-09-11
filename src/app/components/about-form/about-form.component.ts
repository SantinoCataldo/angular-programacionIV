import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-form',
  imports: [ReactiveFormsModule],
  templateUrl: './about-form.component.html',
  styleUrl: './about-form.component.css'
})
export class AboutFormComponent {
  private fb = inject(FormBuilder);

  enviado = false;

  formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email, Validators.minLength(10)]],
    rol: ['', [Validators.required]],
    aceptaTerminos: [false, [Validators.requiredTrue]]
  });

  get nombre() { return this.formulario.get('nombre'); }
  get email() { return this.formulario.get('email'); }
  get rol() { return this.formulario.get('rol'); }
  get aceptaTerminos() { return this.formulario.get('aceptaTerminos'); }

  onSubmit(): void {
    if (this.formulario.valid) {
      this.enviado = true;
      this.formulario.reset({ aceptaTerminos: false });

      setTimeout(() => {
        this.enviado = false;
      }, 3500);
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}
