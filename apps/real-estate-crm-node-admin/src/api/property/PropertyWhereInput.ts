import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentAssignmentWhereUniqueInput } from "../agentAssignment/AgentAssignmentWhereUniqueInput";
import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  agentAssignment?: AgentAssignmentWhereUniqueInput;
  agentAssignments?: AgentAssignmentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
};
