import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "agent";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.agent?.toString() || String(record.id);
};
