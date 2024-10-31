import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface Membership {
  descripcion: string;
  nivel: string;
}

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {
  memberships: Membership[] = [
    { descripcion: 'GOLD', nivel: '3' },
    { descripcion: 'SILVER', nivel: '2' },
    { descripcion: 'BRONZE', nivel: '1' }
  ];
  membershipForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.membershipForm = this.fb.group({
      descripcion: ['', Validators.required],
      nivel: ['', Validators.required]
    });
  
  }
    addMembership() {
      if (this.membershipForm.valid) {
        this.memberships.push(this.membershipForm.value);
        this.membershipForm.reset();
      }
    }
  
    editMembership(index: number) {
      this.membershipForm.setValue({
        descripcion: this.memberships[index].descripcion,
        nivel: this.memberships[index].nivel
      });
      this.memberships.splice(index, 1);
    }
  
    deleteMembership(index: number) {
      this.memberships.splice(index, 1);
    }
  }

