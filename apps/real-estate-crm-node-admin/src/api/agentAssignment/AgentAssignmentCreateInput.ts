import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientCreateNestedManyWithoutAgentAssignmentsInput } from "./ClientCreateNestedManyWithoutAgentAssignmentsInput";
import { PropertyCreateNestedManyWithoutAgentAssignmentsInput } from "./PropertyCreateNestedManyWithoutAgentAssignmentsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  agentName?: string | null;
  client?: ClientWhereUniqueInput | null;
  clients?: ClientCreateNestedManyWithoutAgentAssignmentsInput;
  endDate?: Date | null;
  properties?: PropertyCreateNestedManyWithoutAgentAssignmentsInput;
  property?: PropertyWhereUniqueInput | null;
  startDate?: Date | null;
};
