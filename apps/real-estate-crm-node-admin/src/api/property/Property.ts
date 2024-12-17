import { AgentAssignment } from "../agentAssignment/AgentAssignment";

export type Property = {
  address: string | null;
  agentAssignment?: AgentAssignment | null;
  agentAssignments?: Array<AgentAssignment>;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
