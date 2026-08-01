"use server";

import oracledb from "oracledb";
import { executeReturningId } from "@/lib/db";

export type AppointmentRequestInput = {
  patientName: string;
  patientPhone: string;
  patientEmail?: string;
  preferredAt?: string;
  notes?: string;
};

export type AppointmentRequestResult =
  | { ok: true; appointmentId: number }
  | { ok: false; error: string };

function defaultDoctorUserId(): number {
  const raw = process.env.DEFAULT_DOCTOR_USER_ID;
  if (raw) {
    const parsed = Number.parseInt(raw, 10);
    if (!Number.isNaN(parsed) && parsed > 0) {
      return parsed;
    }
  }
  return 1;
}

function normalizePhone(phone: string): string {
  return phone.replace(/\s+/g, "").trim();
}

export async function submitAppointmentRequest(
  input: AppointmentRequestInput,
): Promise<AppointmentRequestResult> {
  const patientName = input.patientName?.trim();
  const patientPhone = normalizePhone(input.patientPhone ?? "");
  const patientEmail = input.patientEmail?.trim() || null;
  const notes = input.notes?.trim() || null;

  if (!patientName || patientName.length < 2) {
    return { ok: false, error: "Please enter your full name." };
  }
  if (!patientPhone || patientPhone.length < 10) {
    return { ok: false, error: "Please enter a valid phone number." };
  }

  let scheduledAt: Date | null = null;
  if (input.preferredAt) {
    const parsed = new Date(input.preferredAt);
    if (Number.isNaN(parsed.getTime())) {
      return { ok: false, error: "Preferred date/time is invalid." };
    }
    scheduledAt = parsed;
  }

  try {
    const appointmentId = await executeReturningId(
      `INSERT INTO appointments (
         user_id, patient_name, patient_phone, patient_email,
         scheduled_at, status, notes
       ) VALUES (
         :userId, :patientName, :patientPhone, :patientEmail,
         :scheduledAt, 'requested', :notes
       )
       RETURNING id INTO :outId`,
      {
        userId: defaultDoctorUserId(),
        patientName,
        patientPhone,
        patientEmail,
        scheduledAt,
        notes,
        outId: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
      },
    );

    return { ok: true, appointmentId };
  } catch (err) {
    console.error("[submitAppointmentRequest] failed:", err);
    return {
      ok: false,
      error:
        "We could not save your request right now. Please call or WhatsApp the clinic directly.",
    };
  }
}
