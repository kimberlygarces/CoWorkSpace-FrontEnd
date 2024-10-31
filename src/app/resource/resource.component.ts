import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface resource {
  descripcion: string;
  Nombre: string;
}

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent {
  resources: resource[] = [
    { descripcion: 'eventos elegantes', Nombre: 'salon 1' },
    { descripcion: 'eventos elegantes', Nombre: 'salon 2' },
    { descripcion: 'eventos elegantes', Nombre: 'salon 3' }
  ];
  
  resourceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resourceForm = this.fb.group({
      descripcion: ['', Validators.required],
      Nombre: ['', Validators.required] // Cambié 'nivel' a 'Nombre'
    });
  }

  addresources() {
    if (this.resourceForm.valid) {
      this.resources.push(this.resourceForm.value);
      this.resourceForm.reset();
    }
  }

  editresources(index: number) {
    this.resourceForm.setValue({
      descripcion: this.resources[index].descripcion,
      Nombre: this.resources[index].Nombre // Cambié 'nivel' a 'Nombre'
    });
    this.resources.splice(index, 1); // Considera no eliminar el recurso al editar
  }

  deleteresources(index: number) {
    this.resources.splice(index, 1);
  }
}
