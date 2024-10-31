import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Event {
  descripcion: string;
  fecha: string;
  horaI: string;
  horaF: string;
  estado: string;
  miembro: string;
  salon: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events: Event[] = [
    {
      descripcion: 'Evento de Prueba',
      fecha: '2024-11-01',
      horaI: '10:30',
      horaF: '10:30',
      estado: 'Activo',
      miembro: '1 - Bronze',
      salon: 'Salón A'
    },
    {
      descripcion: 'Reunión de Trabajo',
      fecha: '2024-11-02',
      horaI:'10:30',
      horaF: '10:30',
      estado: 'Programado',
      miembro: '2 - Silver',
      salon: 'Salón B'
    },
    {
      descripcion: 'Taller de Capacitación',
      fecha: '2024-11-03',
      horaI: '10:30',
      horaF:'10:30',
      estado: 'Confirmado',
      miembro: '3 - Gold',
      salon: 'Salón C'
    }
  ];

  eventForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      horaI: ['', Validators.required],
      horaF: ['', Validators.required],
      estado: ['', Validators.required],
      miembro: ['', Validators.required],
      salon: ['', Validators.required]
    });
  }

  addevent() {
    if (this.eventForm.valid) {
      this.events.push(this.eventForm.value);
      this.eventForm.reset();
    }
  }

  editevent(index: number) {
    this.eventForm.setValue({
      descripcion: this.events[index].descripcion,
      fecha: this.events[index].fecha,
      horaI: this.events[index].horaI,
      horaF: this.events[index].horaF,
      estado: this.events[index].estado,
      miembro: this.events[index].miembro,
      salon: this.events[index].salon
    });
    this.events.splice(index, 1);
  }

  deleteevent(index: number) {
    this.events.splice(index, 1);
  }
}
