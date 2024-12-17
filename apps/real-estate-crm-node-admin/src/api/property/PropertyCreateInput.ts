import { AgentAssignmentWhereUniqueInput } from "../agentAssignment/AgentAssignmentWhereUniqueInput";
import { AgentAssignmentCreateNestedManyWithoutPropertiesInput } from "./AgentAssignmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  agentAssignment?: AgentAssignmentWhereUniqueInput | null;
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutPropertiesInput;
  description?: string | null;
  price?: number | null;
  status?: "Option1" | null;
};
