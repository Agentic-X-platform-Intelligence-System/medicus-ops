/**
 * Public portfolio content — replace placeholder values with confirmed facts.
 * Search for "UPDATE:" before launch.
 */

export type CredentialStop = {
  year: string;
  title: string;
  detail: string;
};

export type ProcedureItem = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
};

export type ConditionItem = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
};

export const palette = {
  ink: "#0A1628",
  graphite: "#243041",
  porcelain: "#F7F8FA",
  steel: "#8B95A5",
  gold: "#C9A227",
  whatsapp: "#25D366",
} as const;

export const siteContent = {
  doctor: {
    /** UPDATE: brother's display name */
    name: "Dr. Abhinav Gade",
    credentials: "MBBS · MS · MCh (Urology)",
    specialtyLine:
      "Consultant Urologist — Laparoscopic, Robotic & Endourological Surgery",
    trustLine:
      "Precise surgical care with a focus on minimally invasive urology.",
    yearsExperience: 12,
    imagePath: "/images/doctor.png",
    imageAlt:
      "Dr. Abhinav Gade, Consultant Urologist in professional attire with stethoscope",
  },
  seo: {
    siteName: "Dr. Abhinav Gade — Urologist in Nashik",
    defaultDescription:
      "Dr. Abhinav Gade, consultant urologist in Nashik (Nashik Road) — laparoscopic and robotic surgery, kidney stones, and prostate health. Book an appointment or enquire on WhatsApp.",
    locale: "en_IN",
  },
  contact: {
    /** E.164 for tel: links — same line as WhatsApp unless clinic landline is confirmed */
    phone: "+919960912675",
    /** WhatsApp number without + (wa.me format) */
    whatsapp: "919960912675",
    email: "",
    address: {
      street: "Nashik Road",
      city: "Nashik",
      region: "Maharashtra",
      postalCode: "422101",
      country: "IN",
    },
    hours: "Mon–Sat · 9:00 AM – 6:00 PM",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Nashik+Road,+Nashik,+Maharashtra+422101&output=embed",
  },
  affiliations: [
    {
      name: "Magnum Multispecialty Hospital",
      role: "Consultant Urologist",
    },
  ],
  memberships: ["Urological Society of India (USI)"],
  credentialRail: [
    {
      year: "2012",
      title: "MBBS",
      detail: "Undergraduate medical degree",
    },
    {
      year: "2016",
      title: "MS (General Surgery)",
      detail: "Postgraduate surgical training",
    },
    {
      year: "2019",
      title: "MCh (Urology)",
      detail: "Superspecialty urology",
    },
    {
      year: "2020",
      title: "Fellowship — Laparoscopic Urology",
      detail: "Advanced minimally invasive training",
    },
    {
      year: "2021",
      title: "Consultant appointment",
      detail: "Consultant Urologist — Magnum Multispecialty Hospital",
    },
  ] satisfies CredentialStop[],
  procedures: [
    {
      slug: "robotic-prostate-surgery",
      title: "Robotic Prostate Surgery",
      summary:
        "Da Vinci–assisted radical prostatectomy for localised prostate cancer with emphasis on nerve-sparing technique and functional recovery.",
      body: [
        "Robotic surgery allows magnified 3D vision and wristed instruments for precise dissection in the pelvis.",
        "Candidates are assessed with PSA, MRI, and biopsy staging before a shared decision on surgery vs other modalities.",
        "Hospital stay is typically short; catheter duration and return to continence vary by case — discussed pre-operatively.",
      ],
    },
    {
      slug: "laparoscopic-nephrectomy",
      title: "Laparoscopic Nephrectomy",
      summary:
        "Keyhole removal of part or all of a kidney for tumours, non-functioning kidneys, or living-donor preparation.",
      body: [
        "Laparoscopic approach reduces incision size and often speeds recovery compared with open surgery.",
        "Partial nephrectomy preserves renal function when tumour size and location allow.",
        "Pre-operative imaging and anaesthetic assessment guide the surgical plan.",
      ],
    },
    {
      slug: "kidney-stone-treatment",
      title: "Kidney Stone Treatment (RIRS / PCNL / ESWL)",
      summary:
        "Endoscopic and percutaneous options for renal and ureteric stones, tailored to stone size, location, and composition.",
      body: [
        "Retrograde intrarenal surgery (RIRS) uses a flexible scope for upper tract stones.",
        "PCNL treats larger stones through a small back access tract.",
        "Prevention counselling covers hydration, diet, and metabolic workup for recurrent formers.",
      ],
    },
    {
      slug: "turp-bph",
      title: "TURP for Benign Prostatic Hyperplasia",
      summary:
        "Transurethral resection to relieve urinary obstruction when medication is insufficient.",
      body: [
        "Indicated for failed medical therapy, retention, or complications of BPH.",
        "Discuss expected improvements in flow, nocturia, and rare risks including retrograde ejaculation.",
        "Follow-up includes symptom scores and PSA monitoring as appropriate.",
      ],
    },
    {
      slug: "varicocele-microsurgery",
      title: "Varicocele Microsurgery",
      summary:
        "Subinguinal microsurgical repair for symptomatic varicocele or infertility-related indications.",
      body: [
        "Microscopic technique aims to preserve arterial and lymphatic supply while ligating refluxing veins.",
        "Outpatient or short-stay procedure with return to desk work often within a week.",
        "Semen parameters may improve over months — repeat analysis guides fertility planning.",
      ],
    },
  ] satisfies ProcedureItem[],
  conditions: [
    {
      slug: "kidney-stones",
      title: "Kidney Stones",
      summary:
        "Hard deposits in the urinary tract causing flank pain, blood in urine, or infection — common and treatable.",
      body: [
        "Symptoms include sudden severe side pain, nausea, and urinary urgency. Fever with pain needs urgent care.",
        "Diagnosis uses urine tests, ultrasound or CT, and stone analysis after passage or removal.",
        "Prevention focuses on fluid intake, dietary changes, and treating underlying metabolic causes.",
      ],
    },
    {
      slug: "prostate-enlargement",
      title: "Prostate Enlargement (BPH)",
      summary:
        "Non-cancerous prostate growth that can slow urine flow and increase frequency, especially at night.",
      body: [
        "Evaluation includes symptom questionnaire, examination, and PSA to exclude cancer where indicated.",
        "Treatment steps up from lifestyle changes to medication and surgery when needed.",
        "Severe retention or recurrent infections may need procedural intervention.",
      ],
    },
    {
      slug: "prostate-cancer",
      title: "Prostate Cancer",
      summary:
        "One of the most common cancers in men — many cases are slow-growing and detected early via screening.",
      body: [
        "Risk rises with age and family history. PSA and MRI-guided biopsy refine diagnosis.",
        "Management ranges from active surveillance to surgery, radiation, or systemic therapy by stage.",
        "Multidisciplinary discussion aligns treatment with cancer control and quality of life.",
      ],
    },
    {
      slug: "urinary-incontinence",
      title: "Urinary Incontinence",
      summary:
        "Involuntary leakage after prostate surgery or with ageing — often improvable with targeted therapy.",
      body: [
        "Types include stress, urge, and mixed incontinence — each has different first-line treatments.",
        "Pelvic floor physiotherapy and medication help many patients before surgical options.",
        "Post-prostatectomy incontinence often improves over months; persistent cases may need slings or artificial sphincter.",
      ],
    },
    {
      slug: "uti",
      title: "Urinary Tract Infection",
      summary:
        "Bacterial infection of bladder or kidneys — more common in women but significant in men when recurrent.",
      body: [
        "Symptoms: burning, frequency, cloudy urine; upper tract infection adds fever and flank pain.",
        "Men with UTI often need imaging to rule out obstruction or stones.",
        "Recurrence warrants culture-guided antibiotics and structural evaluation.",
      ],
    },
  ] satisfies ConditionItem[],
} as const;

export function getProcedure(slug: string): ProcedureItem | undefined {
  return siteContent.procedures.find((p) => p.slug === slug);
}

export function getCondition(slug: string): ConditionItem | undefined {
  return siteContent.conditions.find((c) => c.slug === slug);
}

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteContent.contact.whatsapp}`;
  if (!message) {
    return base;
  }
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function telUrl(): string {
  return `tel:${siteContent.contact.phone}`;
}
