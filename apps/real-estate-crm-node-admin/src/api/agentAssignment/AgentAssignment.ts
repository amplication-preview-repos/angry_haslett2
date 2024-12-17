import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type AgentAssignment = {
  agentName: string | null;
  client?: Client | null;
  clients?: Array<Client>;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  properties?: Array<Property>;
  property?: Property | null;
  startDate: Date | null;
  updatedAt: Date;
};
