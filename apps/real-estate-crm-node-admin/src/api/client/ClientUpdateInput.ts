import { AgentAssignmentWhereUniqueInput } from "../agentAssignment/AgentAssignmentWhereUniqueInput";
import { AgentAssignmentUpdateManyWithoutClientsInput } from "./AgentAssignmentUpdateManyWithoutClientsInput";
import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  agentAssignment?: AgentAssignmentWhereUniqueInput | null;
  agentAssignments?: AgentAssignmentUpdateManyWithoutClientsInput;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
