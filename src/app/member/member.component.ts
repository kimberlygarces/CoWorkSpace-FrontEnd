import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface member {
  nombre: string;
  correo: string; 
  telefono: string; 
  membresia: string; 
}

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  members: member[] = [];
  memberForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.memberForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      membresia: ['', Validators.required] 
    });
  }

  ngOnInit() {
    // Agregar miembros simulados
    this.members.push(
      { membresia:'Bronze', nombre: 'Juan Perez', correo: 'juan.perez@example.com', telefono: '123456789' },
      { membresia:'Silver', nombre: 'Maria Gomez', correo: 'maria.gomez@example.com', telefono: '987654321' },
      { membresia:'Gold', nombre: 'Carlos Lopez', correo: 'carlos.lopez@example.com', telefono: '456789123' }
    );
  }

  addmember() {
    if (this.memberForm.valid) {
      this.members.push(this.memberForm.value);
      this.memberForm.reset();
    }
  }

  editmember(index: number) {
    this.memberForm.setValue({
      nombre: this.members[index].nombre,
      correo: this.members[index].correo,
      telefono: this.members[index].telefono,
      membresia: this.members[index].membresia 
    });
    this.members.splice(index, 1); 
  }

  deletemember(index: number) {
    this.members.splice(index, 1);
  }
}
