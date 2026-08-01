"use client";

import { useActionState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import {
  submitAppointmentRequest,
  type AppointmentRequestResult,
} from "@/lib/appointments/actions";
import { ScrollReveal } from "./ScrollReveal";
import styles from "../public.module.css";

const initialState: AppointmentRequestResult = { ok: false, error: "" };

async function requestAction(
  _prev: AppointmentRequestResult,
  formData: FormData,
): Promise<AppointmentRequestResult> {
  return submitAppointmentRequest({
    patientName: String(formData.get("patientName") ?? ""),
    patientPhone: String(formData.get("patientPhone") ?? ""),
    patientEmail: String(formData.get("patientEmail") ?? "") || undefined,
    preferredAt: String(formData.get("preferredAt") ?? "") || undefined,
    notes: String(formData.get("notes") ?? "") || undefined,
  });
}

export function AppointmentRequestForm() {
  const [state, formAction, pending] = useActionState(
    requestAction,
    initialState,
  );

  return (
    <section
      id="request-appointment"
      className={`${styles.section} ${styles.sectionAlt}`}
      aria-labelledby="request-heading"
    >
      <ScrollReveal>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Appointment request</p>
          <h2 id="request-heading" className={styles.sectionTitle}>
            Request a consultation
          </h2>
          <p className={styles.sectionLead}>
            Submit your details — the clinic will confirm by phone or WhatsApp.
            No payment required at this stage.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={60}>
        <form action={formAction} className={styles.requestForm}>
          <Stack spacing={2}>
            {state.ok && (
              <Alert severity="success">
                Request received. We will contact you shortly to confirm.
              </Alert>
            )}
            {!state.ok && state.error ? (
              <Alert severity="error">{state.error}</Alert>
            ) : null}

            <TextField
              name="patientName"
              label="Full name"
              required
              autoComplete="name"
            />
            <TextField
              name="patientPhone"
              label="Phone number"
              required
              autoComplete="tel"
              inputMode="tel"
            />
            <TextField
              name="patientEmail"
              label="Email (optional)"
              type="email"
              autoComplete="email"
            />
            <TextField
              name="preferredAt"
              label="Preferred date & time (optional)"
              type="datetime-local"
              slotProps={{ inputLabel: { shrink: true } }}
            />
            <TextField
              name="notes"
              label="Brief reason for visit (optional)"
              multiline
              minRows={3}
            />
            <Button type="submit" variant="contained" disabled={pending}>
              {pending ? "Sending…" : "Submit request"}
            </Button>
          </Stack>
        </form>
      </ScrollReveal>
    </section>
  );
}
