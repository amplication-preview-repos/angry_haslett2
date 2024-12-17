import { AgentAssignmentWhereUniqueInput } from "../agentAssignment/AgentAssignmentWhereUniqueInput";
import { AgentAssignmentUpdateManyWithoutPropertiesInput } from "./AgentAssignmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  agentAssignment?: AgentAssignmentWhereUniqueInput | null;
  agentAssignments?: AgentAssignmentUpdateManyWithoutPropertiesInput;
  description?: string | null;
  price?: number | null;
  status?: "Option1" | null;
};
