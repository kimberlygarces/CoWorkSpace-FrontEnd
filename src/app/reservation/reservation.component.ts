import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Reservation {
  Fecha: string;
  horaI: string;
  horaF: string;
  idMiembro: string;
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  reservations: Reservation[] = [
    { Fecha: '05-12-2024', horaI: '15:00', horaF: '19:00', idMiembro: '1' },
    { Fecha: '05-12-2024', horaI: '14:00', horaF: '18:00', idMiembro: '2' },
    { Fecha: '05-12-2024', horaI: '13:00', horaF: '17:00', idMiembro: '3' }
  ];
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      Fecha: ['', Validators.required],
      horaI: ['', Validators.required],
      horaF: ['', Validators.required],
      idMiembro: ['', Validators.required]
    });
  }

  addreservation() {
    if (this.reservationForm.valid) {
      this.reservations.push(this.reservationForm.value);
      this.reservationForm.reset();
    }
  }

  editreservation(index: number) {
    this.reservationForm.setValue({
      Fecha: this.reservations[index].Fecha,
      horaI: this.reservations[index].horaI,
      horaF: this.reservations[index].horaF,
      idMiembro: this.reservations[index].idMiembro
    });
    this.reservations.splice(index, 1);
  }

  deletereservation(index: number) {
    this.reservations.splice(index, 1);
  }
}
