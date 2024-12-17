import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyListRelationFilter } from "../property/PropertyListRelationFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentWhereInput = {
  agentName?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  clients?: ClientListRelationFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  properties?: PropertyListRelationFilter;
  property?: PropertyWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
};
