import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentUpdateInput = {
  agent?: string | null;
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  location?: string | null;
};
