import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientUpdateManyWithoutAgentAssignmentsInput } from "./ClientUpdateManyWithoutAgentAssignmentsInput";
import { PropertyUpdateManyWithoutAgentAssignmentsInput } from "./PropertyUpdateManyWithoutAgentAssignmentsInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentUpdateInput = {
  agentName?: string | null;
  client?: ClientWhereUniqueInput | null;
  clients?: ClientUpdateManyWithoutAgentAssignmentsInput;
  endDate?: Date | null;
  properties?: PropertyUpdateManyWithoutAgentAssignmentsInput;
  property?: PropertyWhereUniqueInput | null;
  startDate?: Date | null;
};
