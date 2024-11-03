
export interface Event {
    id?: number;
    descripcion?: string;
    fecha?: Date;
    horaInicio?: string;
    horaFin?: string;
    capacidadAsistentes?: number;
    estado?: string;
    memberId?: number;
    workspaceId?: number;
  }

  export interface Member {
    id: number;
    nombre: string;
    email?: string;
    numeroTelefono?: string;
    membershipId?: number;
  }

  export interface Membership {
    id?: number;
    descripcion?: string;
    nivel?: string;
  }

  export interface Reservation {
    id?: number;
    fecha?: Date;
    horaInicio?: string;
    horaFin?: string;
    memberId?: number;
    workspaceId?: number;
  }

  export interface Resource {
    id?: number;
    nombre?: string;
    descripcion?: string;
  }

  export interface Workspace {
    id?: number;
    nombre?: string;
    descripcion?: string;
    numeroMaximoAsistentes?: number;
    disponibilidad?: string;
    membershipId?: number;
    resources?: Resource[];
  }