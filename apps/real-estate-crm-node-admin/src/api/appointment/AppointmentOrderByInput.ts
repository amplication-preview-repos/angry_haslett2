import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  agent?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  updatedAt?: SortOrder;
};
