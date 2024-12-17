import { AgentAssignmentWhereUniqueInput } from "../agentAssignment/AgentAssignmentWhereUniqueInput";
import { AgentAssignmentCreateNestedManyWithoutClientsInput } from "./AgentAssignmentCreateNestedManyWithoutClientsInput";
import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  agentAssignment?: AgentAssignmentWhereUniqueInput | null;
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutClientsInput;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
