import { Client } from "../client/Client";

export type Appointment = {
  agent: string | null;
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  location: string | null;
  updatedAt: Date;
};
