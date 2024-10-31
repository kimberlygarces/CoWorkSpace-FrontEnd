import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Workspace {
  nombreSalon: string;
  descripcion: string;
  maxAsistentes: number; // Changed to number for better type safety
  disponibilidad: string;
  membership: string;
}

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {
  Workspaces: Workspace[] = [
    { nombreSalon: 'Salón A', descripcion: 'Salón amplio con proyector', maxAsistentes: 50, disponibilidad: 'Disponible', membership: '3' },
    { nombreSalon: 'Salón B', descripcion: 'Ideal para reuniones pequeñas', maxAsistentes: 20, disponibilidad: 'No disponible', membership: '2' },
    { nombreSalon: 'Salón C', descripcion: 'Espacio moderno y versátil', maxAsistentes: 30, disponibilidad: 'Disponible', membership: '1' },
  ];

  WorkspaceForm: FormGroup;
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.WorkspaceForm = this.fb.group({
      nombreSalon: ['', Validators.required],
      descripcion: ['', Validators.required],
      maxAsistentes: ['', [Validators.required, Validators.min(1)]], // Added validation for a minimum value
      disponibilidad: ['', Validators.required],
      membership: ['', Validators.required]
    });
  }

  addWorkspace() {
    if (this.WorkspaceForm.valid) {
      if (this.editingIndex !== null) {
        // Update existing workspace
        this.Workspaces[this.editingIndex] = this.WorkspaceForm.value;
        this.editingIndex = null; // Reset editing index
      } else {
        // Add new workspace
        this.Workspaces.push(this.WorkspaceForm.value);
      }
      this.WorkspaceForm.reset();
    }
  }

  editWorkspace(index: number) {
    this.editingIndex = index; // Set editing index
    this.WorkspaceForm.setValue({
      nombreSalon: this.Workspaces[index].nombreSalon,
      descripcion: this.Workspaces[index].descripcion,
      maxAsistentes: this.Workspaces[index].maxAsistentes,
      disponibilidad: this.Workspaces[index].disponibilidad,
      membership: this.Workspaces[index].membership
    });
  }

  deleteWorkspace(index: number) {
    this.Workspaces.splice(index, 1);
  }
}
