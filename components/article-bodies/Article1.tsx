/* eslint-disable react/no-unescaped-entities */
export default function Article1Body() {
  return (
    <div className="space-y-6 text-gray-800 leading-relaxed text-base">

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-brand-800">Rationale and Evidence</h2>

        <h3 className="font-semibold text-gray-900">Ethical Foundations and Professional Standards</h3>
        <p>
          At the core of modern medical ethics is the primacy of the physician's duty to the
          patient currently under care. The American Medical Association's Code of Medical Ethics
          explicitly states that the health professionals providing care at the end of life should
          be distinct from those involved in organ procurement decisions, in order to avoid both
          real and perceived conflicts of interest (American Medical Association).
        </p>
        <p>
          This separation safeguards the patient's welfare and trust in clinical judgment:
          decisions about withdrawal of life support, determination of death, and timing of care
          should never be influenced by donation or transplant pressures. Similarly, professional
          analyses of organ donation systems emphasize that maintaining visible structural
          safeguards is essential not because clinicians cannot act ethically in dual roles, but
          because trust depends on transparency and role clarity (Shaw & Shaw).
        </p>
        <p>
          The American College of Physicians (ACP) reinforces this position in its ethics position
          paper on organ transplantation, stating that decisions to continue, limit, or withdraw
          life-sustaining treatment must be grounded solely in the patient's prognosis,
          preferences, and best interests, and must remain independent of any potential benefit to
          transplant recipients (Esbensen et al.).
        </p>

        <h3 className="font-semibold text-gray-900">Public Perceptions and Trust</h3>
        <p>
          Decades of research have documented that fear of diminished care due to organ donation
          status is a substantive barrier to donation willingness among the public. Families and
          patients often express concern that clinicians might not "do everything possible" if a
          patient is a registered donor—a perception rooted in mistrust of healthcare systems and
          exacerbated by high-profile controversies about donation practices. Empirical studies
          show that perceived conflicts of interest between end-of-life care and organ procurement
          are strongly associated with lower donation intentions, particularly among historically
          marginalized communities (Russell et al.; Robinson et al.).
        </p>
        <p>
          Conceptual models of trust in organ donation and transplantation identify the
          clinician–family relationship at the bedside as the most immediate and fragile locus of
          trust formation. When families perceive that donation interests may influence care
          decisions, trust erodes rapidly—even when no misconduct occurs (Martínez-López et al.).
        </p>

        <h3 className="font-semibold text-gray-900">Clinical and Ethical Implications of Integrated Care Models</h3>
        <p>
          Clinical reviews of intensive care and organ donation processes highlight how dual
          obligations—to provide end-of-life care and simultaneously prepare for donation—can
          create ethical tension and perceived conflict. This is particularly evident in donation
          after circulatory death (DCD) pathways, where intensivists must balance analgesia,
          sedation, family support, and timing considerations (Vergano et al.).
        </p>
        <p>
          Consensus guidelines on brain death and death by neurologic criteria emphasize the
          necessity of separating determination of death from any organ procurement activities.
          The 2023 multisociety consensus guideline underscores that determination of death is a
          clinical act governed by strict prerequisites and standardized examinations—not a
          transplant-driven process (Greer et al.; Lewis et al.).
        </p>

        <h3 className="font-semibold text-gray-900">Legal and Policy Frameworks Designed to Protect Independence</h3>
        <p>
          U.S. legal frameworks reflect these ethical imperatives. The Uniform Anatomical Gift Act
          (UAGA) governs organ donation and treats such gifts as legally and conceptually distinct
          from medical treatment decisions. Donation may proceed only after death has been
          determined in accordance with accepted medical standards, and clinicians are protected
          only when acting in good faith and in compliance with law (National Conference of
          Commissioners on Uniform State Laws).
        </p>
        <p>
          The Organ Procurement and Transplantation Network (OPTN) ethical framework similarly
          emphasizes role separation and the primacy of patient-centered end-of-life care, stating
          that donation discussions should occur only after treatment decisions are made and
          documented (OPTN Ethics Committee).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-brand-800">Implementation</h2>
        <p>
          To ensure that this right is respected in practice, healthcare institutions and organ
          procurement organizations should take the following steps:
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <span className="font-semibold">Clear Policy and Structural Separation of Roles</span>
            <span> — Hospitals should codify policies that segregate clinical teams responsible
            for intensive care and end-of-life decisions from those who coordinate organ donation.
            Clinicians whose evaluation or compensation is tied to donation metrics should not
            participate in treatment-limitation decisions.</span>
          </li>
          <li>
            <span className="font-semibold">Documentation Standards</span>
            <span> — Documentation of goals of care, decisions to limit or withdraw treatment,
            and determination of death should precede any donation conversations and be subject
            to quality review.</span>
          </li>
          <li>
            <span className="font-semibold">Education and Communication Protocols</span>
            <span> — Clinicians should receive training in communicating end-of-life decisions
            before donation is introduced, explicitly stating that treatment decisions are
            independent of donor status.</span>
          </li>
          <li>
            <span className="font-semibold">Review and Oversight</span>
            <span> — Institutional ethics committees should review a subset of donation-eligible
            deaths to ensure that care decisions were not influenced by procurement
            considerations.</span>
          </li>
          <li>
            <span className="font-semibold">Public Assurance and Transparency</span>
            <span> — Hospitals and OPOs should publicly describe these safeguards to address one
            of the most persistent fears limiting donor registration: that donation compromises
            care.</span>
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-brand-800">Conclusion</h2>
        <p>
          Article 1 affirms that independent, patient-centered end-of-life care is foundational
          to ethical organ donation. Ethical codes, empirical evidence, clinical guidelines, and
          legal standards converge on a single conclusion: organ donation must never compete with,
          compromise, or appear to influence the care of the dying patient. Making this separation
          explicit, enforceable, and visible protects patients at their most vulnerable moment and
          strengthens public trust in the donation system as a whole.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-brand-800">References</h2>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
          <li>American Medical Association. AMA Code of Medical Ethics Opinion 6.1.4: Physician Responsibilities in Organ Donation and Transplantation. https://code-medical-ethics.ama-assn.org</li>
          <li>Esbensen KL, DeCamp M, Crigger EJ, Snyder Sulmasy L. Ethical issues in organ transplantation: A position paper from the American College of Physicians. <em>Ann Intern Med.</em> 2025. doi:10.7326/ANNALS-25-01738</li>
          <li>Shaw D, Shaw A. Who owns body parts? <em>J Med Ethics.</em> 2014;40(7):434-439. doi:10.1136/medethics-2012-101289</li>
          <li>Russell E, Robinson DHZ, Thompson NJ, Perryman JP, Arriola KRJ. Distrust in the healthcare system and organ donation intentions among African Americans. <em>J Community Health.</em> 2012;37(1):40-47. doi:10.1007/s10900-011-9413-3</li>
          <li>Robinson DHZ, Perryman JP, Thompson NJ, et al. Understanding African Americans' attitudes toward organ donation. <em>Prog Transplant.</em> 2015;25(1):7-15. doi:10.7182/pit2015434</li>
          <li>Martínez-López MV, et al. Mapping trust relationships in organ donation and transplantation: A conceptual model. <em>BMC Med Ethics.</em> 2023;24:93. doi:10.1186/s12910-023-00965-2</li>
          <li>Vergano M, et al. Ethical issues in end-of-life care and organ donation. <em>Intensive Care Med.</em> 2021;47:1015-1027. doi:10.1007/s00134-021-06441-0</li>
          <li>Greer DM, Kirschen MP, Lewis A, et al. Pediatric and adult brain death/death by neurologic criteria consensus guideline. <em>Neurology.</em> 2023;101(24):1112-1132. doi:10.1212/WNL.0000000000207740</li>
          <li>Lewis A, et al. The 2023 brain death/death by neurologic criteria guideline. <em>Continuum (Minneap Minn).</em> 2023;29(6):1573-1596.</li>
          <li>National Conference of Commissioners on Uniform State Laws. Uniform Anatomical Gift Act (2006; revised 2009). https://www.uniformlaws.org</li>
          <li>Organ Procurement and Transplantation Network Ethics Committee. Ethical principles in the allocation of human organs. https://optn.transplant.hrsa.gov</li>
        </ul>
      </section>

    </div>
  );
}
