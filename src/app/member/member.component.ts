import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from '../models/Models';
import { MemberService } from '../services/member.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  members: Member[] = [];
  memberForm: FormGroup;
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder, private memberService: MemberService) {
    this.memberForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      numeroTelefono: ['', Validators.required],
      membershipId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.findAllMembers().subscribe((data: Member[]) => {
      this.members = data;
    });
  }

  addMember() {
    if (this.memberForm.valid) {
      const memberData = this.memberForm.value;
      if (this.editingIndex !== null) {
        memberData.id = this.members[this.editingIndex].id;
        this.memberService.updateMember(memberData).subscribe((updatedMember: Member) => {
          this.members[this.editingIndex!] = updatedMember;
          this.editingIndex = null;
          this.memberForm.reset();
        });
      } else {
        this.memberService.createMember(memberData).subscribe((newMember: Member) => {
          this.members.push(newMember);
          this.memberForm.reset();
        });
      }
    }
  }

  editMember(index: number) {
    const member = this.members[index];
    this.memberForm.setValue({
      nombre: member.nombre || '',
      email: member.email || '',
      numeroTelefono: member.numeroTelefono || '',
      membershipId: member.membershipId !== undefined ? member.membershipId : null
    });
    this.editingIndex = index;
  }

  deleteMember(member: Member) {
    if (member.id !== undefined && member.id !== null) {
      this.memberService.deleteMember(member.id).subscribe(() => {
        this.members = this.members.filter(m => m.id !== member.id);
      });
    } else {
      console.error('Member ID is undefined or null');
    }
  }
}
