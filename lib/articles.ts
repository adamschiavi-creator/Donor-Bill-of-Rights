export interface Article {
  id: number;
  slug: string;
  title: string;
  summary: string;
  body: string;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "article-1-independent-end-of-life-care",
    title: "Right to Independent, Patient-Centered End-of-Life Care",
    summary:
      "Prospective organ donors and patients at the end of life have the right to receive the highest quality medical care focused exclusively on their individual clinical needs, comfort, and best interests—completely independent of any consideration of organ donation or procurement. Decisions regarding continuation, limitation, or withdrawal of life-sustaining treatment must be made by the treating clinical team and surrogate decision-makers without influence from organ procurement priorities or transplant imperatives.",
    body: "",
  },
  {
    id: 2,
    slug: "article-2-values-honored",
    title: "Right to Have One\u2019s Values Honored \u2014 Including Sanctity of Life and Sanctity of Function",
    summary:
      "Prospective organ donors and patients facing end-of-life decisions have the right to have their personal values honored in medical decision-making, including values grounded in a \u201csanctity of life\u201d framework, a \u201csanctity of function\u201d framework, or a combination of the two. Decisions regarding continuation or limitation of life-sustaining treatment must be guided by the patient\u2019s expressed or inferred values, not by institutional norms, clinician preferences, or assumptions about moral obligation. Organ donation discussions must respect these value frameworks and may not pressure patients or families to adopt a \u201clife at all costs\u201d or donation-centric ethic.",
    body: "",
  },
  {
    id: 3,
    slug: "article-3-right-to-fair-allocation",
    title: "The Right to Fair and Transparent Organ Allocation",
    summary:
      "Organs must be allocated according to established, publicly available criteria that prioritize medical urgency and compatibility, not wealth, status, or geography.",
    body: `[PLACEHOLDER — Replace with Article 3 text before March 25]

Every patient awaiting transplantation has the right to an allocation system that is fair, transparent, and governed by clinical criteria. Allocation policies must be publicly available and reviewed regularly to incorporate advances in medicine and to address documented disparities.

No patient should be advantaged or disadvantaged based on their financial resources, celebrity status, social connections, or geographic accident of birth. Where geographic disparities exist, they must be acknowledged and actively mitigated.`,
  },
  {
    id: 4,
    slug: "article-4-right-to-privacy-and-confidentiality",
    title: "The Right to Privacy and Confidentiality",
    summary:
      "Donor and recipient medical information must be protected with the highest standards of confidentiality, shared only as medically necessary and legally permitted.",
    body: `[PLACEHOLDER — Replace with Article 4 text before March 25]

The medical information of organ donors and transplant recipients is among the most sensitive health data in existence. All parties — organ procurement organizations, transplant centers, and follow-up care providers — must safeguard this information in compliance with applicable privacy laws and ethical standards.

Disclosure of identifying information between donor families and recipients should occur only through established, consented processes designed to protect both parties.`,
  },
  {
    id: 5,
    slug: "article-5-right-to-know-donation-status",
    title: "The Right to Know and Confirm Donor Status",
    summary:
      "Individuals have the right to register, update, and confirm their donation status at any time through accessible, reliable systems.",
    body: `[PLACEHOLDER — Replace with Article 5 text before March 25]

Every person who chooses to register as an organ donor has the right to verify their registration is accurately recorded and accessible to decision-makers at the time of death. Registration systems must be interoperable, reliably maintained, and accessible for review and amendment at any time.

This Article also addresses the responsibility of the healthcare system to check donor registries before any surrogate decision process begins, ensuring that the individual's stated wishes are honored.`,
  },
  {
    id: 6,
    slug: "article-6-right-to-non-discrimination",
    title: "The Right to Non-Discrimination in Access and Listing",
    summary:
      "No patient may be denied evaluation for transplant listing based on race, ethnicity, gender, age, disability, or socioeconomic status.",
    body: `[PLACEHOLDER — Replace with Article 6 text before March 25]

Access to transplant evaluation and listing must be free from discrimination based on race, ethnicity, national origin, sex, gender identity, sexual orientation, disability, age, religion, or financial status. Documented disparities in referral rates, listing practices, and post-transplant outcomes require urgent, sustained attention.

Transplant programs and referring providers bear joint responsibility for identifying and eliminating discriminatory barriers in their practice patterns.`,
  },
  {
    id: 7,
    slug: "article-7-right-to-cultural-and-religious-respect",
    title: "The Right to Cultural and Religious Respect",
    summary:
      "Donation and transplantation practices must acknowledge and respect the cultural and religious beliefs of donors, families, and recipients.",
    body: `[PLACEHOLDER — Replace with Article 7 text before March 25]

Organ donation and transplantation intersect with some of the most profound personal, cultural, and religious dimensions of human experience. All participants in the donation ecosystem must be trained to respect diverse cultural perspectives on death, the body, and bodily integrity.

Where cultural or religious objections are raised, they must be met with genuine respect and alternative approaches explored, without judgment or coercion.`,
  },
  {
    id: 8,
    slug: "article-8-right-to-transparency-in-outcomes",
    title: "The Right to Transparency in System Performance and Outcomes",
    summary:
      "Outcome data for organ procurement organizations and transplant centers must be publicly reported in standardized, understandable formats.",
    body: `[PLACEHOLDER — Replace with Article 8 text before March 25]

Donors, donor families, recipients, and the public have the right to understand how the organ donation system is performing. Outcome data — including procurement rates, discard rates, transplant survival rates, and equity metrics — must be reported publicly in standardized formats that are accessible to non-specialists.

Accountability requires visibility. Opacity in system performance data undermines public confidence and impedes quality improvement.`,
  },
  {
    id: 9,
    slug: "article-9-right-to-family-involvement",
    title: "The Right to Family Involvement and Support",
    summary:
      "Donor families have the right to be included in the donation process with compassion, to receive timely updates, and to access grief support resources.",
    body: `[PLACEHOLDER — Replace with Article 9 text before March 25]

The family of a deceased donor is engaged at one of the most painful moments of their lives. They have the right to be treated with dignity, compassion, and transparency throughout the donation process. This includes receiving timely, honest communication about what donation entails, what organs and tissues are being recovered, and how the process will proceed.

Organ procurement organizations must ensure that grief support resources are made available to donor families at no cost, and that follow-up contact is offered in the months after donation.`,
  },
  {
    id: 10,
    slug: "article-10-right-to-support-services",
    title: "The Right to Support Services for Living Donors",
    summary:
      "Living organ donors have the right to comprehensive medical and psychosocial support before, during, and after donation, without bearing undue financial burden.",
    body: `[PLACEHOLDER — Replace with Article 10 text before March 25]

Living donation is an act of extraordinary generosity that carries real medical risk. Living donors have the right to a thorough independent evaluation, long-term follow-up care, and psychosocial support without incurring financial hardship from the donation process itself.

Programs relying on living donors bear an ethical obligation to ensure that financial and logistical barriers do not discourage or penalize the act of donation.`,
  },
  {
    id: 11,
    slug: "article-11-right-to-access-regardless-of-ability-to-pay",
    title: "The Right to Access Transplantation Regardless of Ability to Pay",
    summary:
      "Financial barriers must not prevent any eligible patient from being evaluated for, listed for, or receiving a life-saving transplant.",
    body: `[PLACEHOLDER — Replace with Article 11 text before March 25]

The inability to afford transplantation — including surgical costs, immunosuppressive medications, and post-transplant follow-up — should not determine whether a patient lives or dies. This Article calls for systemic efforts to ensure that financial barriers to transplant access are identified, documented, and actively addressed by transplant programs, payers, and policymakers.

A donated organ is a gift from one person to another; the healthcare system should not be a tollbooth on that gift.`,
  },
  {
    id: 12,
    slug: "article-12-right-to-recipient-communication",
    title: "The Right to Thoughtful Donor-Recipient Communication",
    summary:
      "Both donor families and recipients have the right to participate in structured communication programs that respect boundaries and support healing.",
    body: `[PLACEHOLDER — Replace with Article 12 text before March 25]

Many donor families and transplant recipients wish to connect with one another. Both parties have the right to participate in structured, supported programs that facilitate this communication with appropriate boundaries, privacy protections, and psychosocial support.

These programs recognize that donation creates a unique bond between strangers, and that when carefully managed, this connection can be a powerful source of healing and meaning for all involved.`,
  },
  {
    id: 13,
    slug: "article-13-right-to-donor-family-recognition",
    title: "The Right to Meaningful Donor Family Recognition",
    summary:
      "The families of deceased donors have the right to be honored and acknowledged for their gift in ways that are meaningful to them.",
    body: `[PLACEHOLDER — Replace with Article 13 text before March 25]

The decision to donate a loved one's organs is among the most selfless acts a family can make. Donor families have the right to be meaningfully recognized — not as a marketing exercise for procurement organizations, but as a genuine expression of gratitude and respect for an irreplaceable gift.

Recognition programs should be designed with donor families, not for them, and should offer options that reflect diverse cultural practices and personal preferences.`,
  },
  {
    id: 14,
    slug: "article-14-right-to-quality-and-safety",
    title: "The Right to Quality and Safety Standards",
    summary:
      "All participants in the donation and transplantation system have the right to benefit from rigorous quality oversight, continuous improvement, and prompt investigation of adverse events.",
    body: `[PLACEHOLDER — Replace with Article 14 text before March 25]

Patients, donors, and the public have the right to a donation and transplantation system governed by rigorous quality standards, subject to independent oversight, and committed to continuous improvement. When adverse events occur, they must be investigated transparently, with findings shared appropriately across the system to prevent recurrence.

Quality and safety are not bureaucratic aspirations; they are ethical obligations.`,
  },
  {
    id: 15,
    slug: "article-15-right-to-advocacy-and-representation",
    title: "The Right to Advocacy and Systemic Representation",
    summary:
      "Donors, donor families, and transplant recipients have the right to meaningful representation in the governance and policy decisions of the organ donation and transplantation system.",
    body: `[PLACEHOLDER — Replace with Article 15 text before March 25]

The people most affected by the organ donation and transplantation system — donors, donor families, recipients, and waitlisted patients — have the right to meaningful participation in the governance, policy development, and quality oversight of that system. Token representation is insufficient.

This Article calls for structural inclusion of patient and family voices at every level of policy-making, from local transplant program committees to national regulatory and oversight bodies.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
