export interface CaseStudy {
  slug: string
  cat: string
  color1: string
  color2: string
  emoji: string
  meta: string
  title: string
  oneLiner: string
  tags: string[]
  context: string
  role: string
  approach: string[]
  deliverables: string[]
  results: string[]
  challenges: string
  nextSteps: string
}

export const CASES: CaseStudy[] = [
  {
    slug: 'aerial', cat: 'Conservation Tech', color1: '#1a4731', color2: '#0E7C7B', emoji: '🛰️',
    meta: 'Lead · Save the Elephants · Voi, Kenya · Mar 2024–Present',
    title: 'Aerial Survey Modernisation at Save the Elephants',
    oneLiner: "Leading East Africa's shift from manual aerial wildlife counts to a TB-scale, camera-based imagery pipeline built for machine-assisted census.",
    tags: ['Aerial Survey', 'Machine Learning', 'Computer Vision', 'Data Pipeline', 'QA/QC', 'OCC'],
    context: "Across East Africa, aerial wildlife censuses have long depended on trained observers counting animals from low-flying aircraft in real time. The method is foundational but carries known limits: observer fatigue, undercounting in dense herds, double-counting across overlapping transects, and results that can't be re-examined once the plane lands. Save the Elephants set out to modernise this by moving to oblique camera counts (OCC) paired with AI-assisted processing — so every animal is captured in a permanent, reviewable image record. The challenge was building the whole data backbone: how terabytes of imagery are collected, structured, tagged, quality-controlled, and made analysis-ready for ML.",
    role: "Wildlife Survey Technology & Research Officer, serving as lead on aerial survey reform since March 2024. Responsible for end-to-end technical strategy: designing the camera-based workflow, standing up the TB-scale imagery pipeline, benchmarking AI/ML platforms, and making datasets clean enough for automated detection and human-in-the-loop annotation.",
    approach: [
      "Reframed census from real-time human counting to image-first OCC capture, converting ephemeral observations into a permanent, auditable visual record.",
      "Designed a structured TB-scale ingestion and storage pipeline with consistent hierarchies, naming conventions, and survey-block organisation.",
      "Built a metadata layer linking each image to GPS track, timestamp, altitude, transect/block ID, and camera settings.",
      "Established QA/QC checkpoints (coverage gaps, blur screening, GPS-image sync, duplicate handling) before data reaches analysis.",
      "Benchmarked AI/ML detection platforms against representative imagery rather than committing to a vendor prematurely.",
      "Standardised datasets into ML-consumable formats with human-in-the-loop annotation conventions.",
      "Documented the full workflow into repeatable SOPs so it can scale across seasons and transfer to new teams.",
    ],
    deliverables: [
      "A standardised, documented OCC survey workflow covering capture-through-analysis.",
      "A TB-scale aerial imagery pipeline with defined storage structure and metadata schema.",
      "A QA/QC protocol and checklist applied at capture and ingestion.",
      "An AI/ML platform benchmarking assessment comparing accuracy, throughput, and cost.",
      "Analysis-ready datasets plus human-in-the-loop annotation guidelines.",
      "SOPs and training materials enabling the workflow to scale and transfer.",
    ],
    results: [
      "Established a permanent, reviewable image archive for surveys that previously left no re-examinable record — making counts auditable and defensible to donors and government partners.",
      "Processed and structured an estimated [~12 TB] of aerial imagery across [~8] survey flights into a query-ready pipeline.",
      "Reduced estimated double-/under-counting error vs manual observation by [~20–30%] in benchmark comparisons.",
      "Cut per-image processing time by [~40%] via AI-assisted detection with human review.",
      "Benchmarked [~3–4] detection platforms, producing a vendor-neutral recommendation.",
      "Improved metadata completeness to [~95%] of images with full flight/GPS/block tagging.",
    ],
    challenges: "Managing terabyte-scale imagery in a field-based East African context surfaced real constraints around storage, bandwidth, and backup — pipeline design must account for limited connectivity. Off-the-shelf models didn't transfer cleanly to local wildlife, confirming human-in-the-loop is essential. Change management mattered as much as technology: shifting experienced teams from a trusted manual tradition required clear SOPs and demonstrating defensibility. Metadata discipline at capture is the single highest-leverage QA investment.",
    nextSteps: "Extend the validated OCC pipeline to additional blocks and seasons for a longitudinal archive; move from benchmarking to a production human-in-the-loop ML counting workflow with locally validated models; formalise coverage and uncertainty reporting so figures ship with auditable confidence; and package SOPs for transfer to partner organisations across East Africa.",
  },
  {
    slug: 'aibench', cat: 'Conservation Tech', color1: '#1e3a5f', color2: '#0E7C7B', emoji: '🤖',
    meta: 'Technical Lead · Save the Elephants · Kenya',
    title: 'Benchmarking AI Image-Processing Platforms for Aerial Wildlife Counts',
    oneLiner: 'An end-to-end, field-grounded evaluation of AI/ML platforms — turning vendor demos into auditable adoption decisions for East African surveys.',
    tags: ['AI/ML', 'Benchmarking', 'Computer Vision', 'Human-in-the-Loop', 'R', 'Python'],
    context: "Aerial census remains the backbone of large-mammal monitoring, but manual photo-counting of OCC imagery is slow, costly, and hard to audit. As STE's image archives grew faster than analysts could process them, several AI platforms claimed automated detection — but their accuracy figures came from datasets unlike STE's: different altitudes, sensors, sun angles, vegetation, and species. Before committing budget or survey reputations, STE needed an independent, reproducible benchmark on real STE imagery and real field constraints.",
    role: "Technical lead for the platform benchmarking effort within the broader modernisation program. Responsible for evaluation design, dataset curation and ground-truthing, running platforms and scoring outputs, designing the human-in-the-loop QA/QC workflow, and producing the comparative analysis and adoption recommendation.",
    approach: [
      "Defined evaluation criteria up front from field requirements — recall/precision by species and density, count accuracy vs ground-truth, throughput, cost per image, data residency, and realistic human-review load.",
      "Curated a representative benchmark set from STE's own OCC archives with an expert-verified ground-truth layer so every platform was scored on identical imagery.",
      "Ran each platform end-to-end, scoring outputs for false negatives (dense herds), false positives (rocks, shadows, livestock), and species confusion.",
      "Designed a human-in-the-loop workflow with confidence thresholds for auto-accept vs mandatory review, capturing corrections as feedback.",
      "Built reproducible QA/QC and scoring in R and Python (Conda) so the benchmark could be re-run as models updated.",
      "Tested platforms against East African operational constraints — connectivity, upload volumes, data sovereignty, analyst time.",
      "Synthesised results into a weighted decision matrix and recommendation with explicit failure-mode caveats.",
    ],
    deliverables: [
      "Comparative benchmark report scoring each platform on accuracy, throughput, cost, and field-readiness.",
      "Expert-verified ground-truth dataset and curation protocol, reusable for future re-tests.",
      "Reproducible scoring pipeline (R / Python) computing recall, precision, count error, and confusion metrics.",
      "Human-in-the-loop annotation and QA/QC workflow specification.",
      "Weighted decision matrix with documented weighting rationale.",
      "Adoption recommendation memo with known failure modes and a phased rollout suggestion.",
    ],
    results: [
      "Established STE's first independent, reproducible benchmark for aerial-imagery AI — replacing vendor-reported accuracy with figures measured on STE's own imagery.",
      "Evaluated [~4–6 platforms] end-to-end against [~3,000–5,000 annotated images] spanning [~8–12 species].",
      "Best platform hit [~90% recall] on low-density animals but dropped to [~65–70%] in dense herds — directly shaping human-review thresholds.",
      "Human-in-the-loop workflow cut analyst counting time by [~50–60%] vs fully manual photo-counting.",
      "Quantified species-confusion patterns so teams knew which counts needed closer review.",
      "Produced a cost-per-survey comparison showing [~30–40%] processing-cost variation across platforms.",
      "Recommendation adopted as the basis for STE's next-phase platform decision.",
    ],
    challenges: "No platform performed uniformly well — the real deliverable was a map of where each one breaks, not a single 'winner'. Dense herd aggregations were hardest across the board, confirming human-in-the-loop is non-negotiable for now. Vendor-reported figures proved poorly comparable to STE imagery. Building credible ground-truth was itself labour-intensive. Key learning: defining criteria from field constraints first surfaced deal-breakers pure accuracy metrics would have hidden.",
    nextSteps: "Re-run the benchmark as platforms ship updates and expand ground-truth coverage; use captured corrections to fine-tune detection on STE imagery targeting the dense-herd failure mode; pilot the recommended platform on a live survey to validate throughput and cost; and integrate accepted counts into Power BI / Tableau dashboards to close the loop from imagery to decision-ready figures.",
  },
  {
    slug: 'hecx', cat: 'Training & M&E', color1: '#7c3d12', color2: '#E08A1E', emoji: '🎓',
    meta: 'Lead Designer & Facilitator · STE · Tsavo, Kenya',
    title: 'A Field-Ready Trainer-of-Trainers Program for Human–Elephant Coexistence',
    oneLiner: 'Turning scattered coexistence workshops into a standardised, measurable Trainer-of-Trainers system that delivers consistently across cohorts in the Tsavo landscape.',
    tags: ['Trainer-of-Trainers', 'Curriculum Design', 'Monitoring & Evaluation', 'Survey123', 'Capacity Building', 'Tsavo'],
    context: "In the human-dominated rangelands around Tsavo, crop-raiding and elephant incursions push communities and elephants into costly conflict. STE's Human-Elephant Coexistence (HECx) program equips frontline community members, scouts, and farmers with deterrent methods and conflict-response skills. But coexistence knowledge only scales if it can be taught reliably. Workshops were being delivered with uneven curriculum coverage, inconsistent facilitation between cohorts, and weak feedback loops — making it hard to know whether training changed practice in the field.",
    role: "Lead designer and facilitator for HECx Trainer-of-Trainers delivery and the supporting M&E framework. Responsible for integrating curriculum, facilitation practice, and monitoring into one field-ready package; running ToT workshops; managing post-training follow-up; and driving consistency improvements across cohorts.",
    approach: [
      "Mapped the existing HECx curriculum into a modular, sequenced ToT package so every cohort covered the same core content regardless of facilitator.",
      "Designed facilitation guides and trainer scripts pairing each technical module with adult-learning techniques, role-plays, and demonstrations.",
      "Built lightweight, field-usable M&E instruments: pre/post knowledge checks, facilitation observation rubrics, and competency sign-offs.",
      "Facilitated ToT workshops — modelling sessions live, then having trainees co-deliver under observation before sign-off.",
      "Set up structured post-training follow-ups to coach trainers, troubleshoot field problems, and verify correct application.",
      "Standardised data capture into Survey123 workflows feeding a single cohort-over-cohort dataset.",
      "Ran a consistency review loop comparing rubric scores and knowledge gains to find weak modules and refine the package.",
    ],
    deliverables: [
      "Modular HECx Trainer-of-Trainers curriculum package with sequenced modules and learning objectives.",
      "Facilitation guides, trainer scripts, and demonstration checklists for repeatable delivery.",
      "M&E toolkit: pre/post assessments, facilitation rubric, and competency sign-off sheets.",
      "Survey123-based data capture workflow feeding a consolidated dataset.",
      "Post-training follow-up and coaching protocol.",
      "Cohort comparison summaries used to refine modules and brief leadership and donors.",
    ],
    results: [
      "Created a single field-ready ToT package replacing ad-hoc delivery with a standardised, repeatable system across the Tsavo HECx program.",
      "Trained and certified [~30 community trainers and scouts] across [~5 cohorts], reaching an estimated [~600 farmers and community members].",
      "Lifted average pre-to-post assessment scores by [~35 percentage points] across cohorts.",
      "Improved delivery consistency — facilitation rubric spread converged from [~25%] between best/worst sessions to [under ~10%].",
      "Post-training follow-ups confirmed correct field application in [~80% of sampled sites].",
      "Gave leadership and donors auditable, cohort-level evidence of quality and reach instead of attendance counts alone.",
    ],
    challenges: "Translating expert-led, intuition-heavy field training into a script a newly trained local facilitator could deliver faithfully was harder than expected; early drafts over-assumed prior knowledge. Building M&E field teams would actually use meant ruthlessly simplifying instruments for offline, mobile, low-connectivity conditions. The biggest learning: consistency is an iterative product, not a one-time design. Multilingual delivery and varying literacy required demonstration-first, low-text facilitation.",
    nextSteps: "Extend the standardised package to additional HECx landscapes beyond Tsavo and localise for language and literacy; move follow-up data into a live Power BI dashboard for continuous monitoring; add longer-horizon outcome tracking linking training to actual conflict-incident reduction; and formalise a refresher and re-certification cycle.",
  },
  {
    slug: 'rnaseq', cat: 'Bioinformatics', color1: '#2d1b69', color2: '#5B7388', emoji: '🧬',
    meta: 'Research Assistant (Hybrid) · NETA Discovery · 2024–2026',
    title: 'RNA-seq Differential Expression for Epilepsy Research',
    oneLiner: 'A reproducible, auditable RNA-seq pipeline in R/DESeq2 surfacing candidate genes and pathways for epilepsy research, paired with literature biocuration.',
    tags: ['RNA-seq', 'DESeq2', 'R', 'Differential Expression', 'Reproducible Research', 'Pathway Analysis'],
    context: "As a hybrid Research Assistant with NETA Discovery (Sydney, remote from Kenya, Mar 2024–Jan 2026), I supported a neuroscience program investigating the molecular basis of epilepsy. The team needed transcriptomic analysis they could trust and defend: differential expression results that were statistically sound, fully reproducible, and traceable from raw counts to final gene lists — plus structured synthesis of a fast-moving literature. This is the clearest demonstration of my lab-to-pipeline pathway: the same auditable, reproducible discipline I apply to TB-scale wildlife imagery, applied to molecular data.",
    role: "Research Assistant (Hybrid, remote from Kenya) — owned the RNA-seq differential expression analysis in R/DESeq2 end to end, from QC through pathway interpretation, and led literature biocuration and pathway mapping for evidence synthesis.",
    approach: [
      "Designed a reproducible R project (scripted, version-controlled in GitHub, fixed Conda/renv environment) so every result regenerates from raw counts in one run.",
      "Ran systematic pre-analysis QC: library-size and distribution checks, sample-correlation heatmaps, and PCA on variance-stabilised counts to detect outliers and batch effects.",
      "Performed differential expression with DESeq2 — negative-binomial model, appropriate design formulae, shrinkage estimators (apeglm/ashr), and Benjamini–Hochberg FDR control.",
      "Generated diagnostic visualisations — MA, volcano, dispersion plots, and clustered heatmaps — to make statistical behaviour inspectable.",
      "Conducted GO/KEGG/Reactome over-representation and gene-set enrichment, translating gene lists into candidate epilepsy pathways.",
      "Built a structured literature biocuration workflow extracting gene–pathway–phenotype relationships into a searchable evidence table.",
      "Documented assumptions, thresholds, and software versions in READMEs so collaborators could audit every conclusion.",
    ],
    deliverables: [
      "A version-controlled R/DESeq2 repository that regenerates all QC, DE, and enrichment outputs from raw counts.",
      "Ranked DE result tables (adjusted p-values, shrunken fold-changes, gene annotations) per contrast.",
      "A publication-ready figure set: PCA, correlation heatmaps, MA/volcano plots, dispersion diagnostics, top-gene heatmaps.",
      "Pathway and gene-set enrichment summaries linking DE genes to candidate processes.",
      "A curated, searchable literature evidence table cross-linked to the analysis findings.",
      "Analysis documentation enabling independent reproduction and peer review.",
    ],
    results: [
      "Delivered a fully reproducible pipeline regenerating the complete analysis from raw counts in a single run [~100% of figures/tables script-generated, 0 manual edits].",
      "Surfaced a shortlist of candidate genes and pathways, narrowing the experimental search space [~25–40 significant DE genes at FDR<0.05; ~6–10 enriched pathways].",
      "Cut evidence-synthesis time through structured biocuration [~150 papers screened, ~60 curated; triage time reduced ~40%].",
      "Caught and resolved data-quality issues at QC before they could bias conclusions [~1–2 problematic samples flagged].",
      "Strengthened reproducibility: a collaborator re-ran the analysis independently and reached identical results.",
      "Complemented this with 10+ peer reviews on PreReview, reinforcing a scrutiny-ready standard.",
    ],
    challenges: "Working hybrid and remote across time zones meant analysis decisions had to be self-documenting — I leaned hard into written methods notes and reproducible scripts, which became a strength. Epilepsy transcriptomics involves subtle effect sizes and noisy signals, so I learned to resist over-interpreting borderline results and let conservative FDR control do its job. QC is not a formality — upfront PCA and correlation checks repeatedly caught issues that would have corrupted downstream enrichment. Biocuration taught me that synthesis is itself a methodology.",
    nextSteps: "Extend the pipeline into a parameterised, portable workflow (an nf-core/rnaseq-style front end feeding DESeq2) to ingest new datasets — including public GEO/SRA re-analyses — with minimal reconfiguration; add automated parameterised Quarto reporting per run; link the curated evidence table to DE outputs in a small dashboard; and transfer this auditable discipline directly into conservation genomics and AI-assisted monitoring at Save the Elephants.",
  },
]

export const SKILLS = [
  { group: 'Aerial Survey & Monitoring', items: ['Oblique camera counts (OCC)', 'Workflow design & standardisation', 'QA/QC for large imagery', 'Census accuracy'] },
  { group: 'AI / ML Monitoring', items: ['Platform evaluation & benchmarking', 'Human-in-the-loop annotation', 'TB-scale dataset handling', 'ML/data workflow design'] },
  { group: 'Data Analysis & Reporting', items: ['R', 'Python (Conda)', 'Julia', 'Power BI', 'Tableau', 'Donor reporting'] },
  { group: 'GIS & Field Data Systems', items: ['ArcGIS', 'Survey123 workflows', 'Field data collection & logistics'] },
  { group: 'Research & Lab', items: ['RNA-seq / DESeq2', 'PCR & DNA extraction', 'Metabarcoding', 'SNP / genetics support'] },
  { group: 'Program Delivery', items: ['Trainer-of-Trainers (ToT)', 'M&E systems', 'Multi-stakeholder engagement', 'Field logistics'] },
]

export const ABOUT_BIO = [
  "I'm Gliday Yuka Luvonga, a wildlife survey technology and research officer based in Voi, Kenya. My work sits where conservation field operations meet data science: I lead the modernisation of aerial surveys at Save the Elephants, replacing manual census methods with camera-based, AI-assisted pipelines that handle terabyte-scale imagery. My goal is straightforward — to make wildlife monitoring across East Africa not just faster, but more accurate, reproducible, and auditable.",
  "My path here runs through the lab as much as the field. I hold dual M.Sc. degrees, in Biotechnology from Punjabi University Patiala and in Zoology from Guru Nanak Dev University, both completed with First Class Honours. Along the way I've worked on carotenoid bioaccessibility, RNA-seq differential expression in R and DESeq2, SNP-based genetics, and metabarcoding. That bench-to-field range is what lets me translate messy real-world conservation problems into clear data and analytics requirements.",
  "Beyond the survey work, I help build the human side of conservation. I've designed and facilitated Training-of-Trainers workshops for human–elephant coexistence, supported conservation agriculture demo farms and Tsavo schools education monitoring, and contributed to open science through more than ten peer reviews on PreReview. I care about credible, measurable impact — and about systems that the next person can pick up and trust.",
]

export const COPY = {
  writingIntro: "My published and reviewed work spans nutraceutical science, conservation, and open peer review. Below you'll find peer-reviewed and conference output alongside my contributions to PreReview, where I've completed 10+ open reviews. For the complete and current record, see my ORCID profile.",
  contactIntro: "I'm always glad to talk about wildlife survey technology, AI-assisted monitoring, or conservation data work across East Africa — whether you're a potential collaborator, partner, or fellow researcher. The best ways to reach me are below.",
  experienceIntro: "The full arc — from lab benches in India to field survey operations in Kenya. Bench-to-field range built across seven roles on three continents.",
  recognitionIntro: "Awards, credentials, and the community and teaching work alongside the research.",
}

export interface Role {
  org: string
  title: string
  location: string
  dates: string
  note: string
  tag: string
}

/* Full professional history (most recent first) */
export const EXPERIENCE: Role[] = [
  {
    org: 'Save the Elephants (STE)', title: 'Wildlife Survey Technology & Research Officer',
    location: 'Voi, Kenya', dates: 'Mar 2024 – Present', tag: 'Conservation Tech',
    note: 'Lead for aerial survey modernisation — camera-based + AI-assisted census on TB-scale imagery, plus HECx Trainer-of-Trainers and cross-functional conservation projects.',
  },
  {
    org: 'Shamba AI', title: 'Founder / Research Officer',
    location: 'Nairobi, Kenya', dates: 'Feb 2024 – Present', tag: 'AgriTech',
    note: 'Built an AI-enabled agriculture concept for climate-smart decision-making and yield improvement; prototyped ML/data workflows from field requirements.',
  },
  {
    org: 'NETA Discovery', title: 'Research Assistant (Hybrid)',
    location: 'Sydney, Australia', dates: 'Mar 2024 – Jan 2026', tag: 'Bioinformatics',
    note: 'Analysed RNA-seq datasets in R (DESeq2) and supported literature biocuration / pathway analysis for epilepsy research.',
  },
  {
    org: 'Punjabi University Patiala', title: 'Research Apprentice',
    location: 'Patiala, India', dates: 'Sept 2021 – Jan 2024', tag: 'Lab Research',
    note: 'Executed nutraceutical and gastrointestinal bioaccessibility studies (in vitro / in vivo); contributed analyses, figures, and drafts for manuscripts and reviews.',
  },
  {
    org: 'Acentric Research Labs', title: 'Research Intern',
    location: 'Chandigarh, India', dates: 'May 2022 – Aug 2022', tag: 'Genomics',
    note: 'Identified cancer risk variants via genomic data analysis in R / Julia, producing interpretable summaries for downstream research.',
  },
  {
    org: 'NextGen Helper', title: 'Bioinformatics Intern',
    location: 'New Delhi, India', dates: 'Jun 2022 – Aug 2022', tag: 'ML',
    note: 'Applied machine-learning methods for genomic pattern recognition, improving signal detection in high-dimensional datasets.',
  },
  {
    org: 'Guru Nanak Dev University', title: 'Lab Assistant',
    location: 'Amritsar, India', dates: 'Oct 2019 – Apr 2021', tag: 'Teaching',
    note: 'Supported zoology / genetics lab practicals and entomology / nematology activities, improving lab readiness and data capture.',
  },
]

export const AWARDS = [
  { title: 'Indian Government Scholarship (ICCR)', detail: 'For M.Sc. Biotechnology (2021–2023), Punjabi University, India' },
  { title: "Dean's Roll of Honour", detail: 'Best graduating student, B.Sc. Biology — Pwani University, Kenya' },
]

export const CERTIFICATIONS = [
  { title: 'Soft Skills & Business Training', detail: 'Yusudi Skills2Grow Program · Jun–Jul 2019' },
  { title: 'Basic Digital Skills', detail: 'eMobilis Mobile Technology Institute · Jun 2019' },
  { title: 'Computer Applications', detail: 'Hertford International College · Feb–Jun 2014' },
]

export const MEMBERSHIPS = [
  { title: 'Biochemistry & Biotechnology Professionals Society of Kenya', detail: 'BBPSK · Member BBP-00199' },
  { title: 'Red Cross Society of Kenya', detail: 'Active member · Jun 2017 – Present' },
]

export const ACTIVITIES = [
  { title: 'Workshops, conferences & environmental hackathons', detail: 'Ongoing professional development' },
  { title: 'Taught Zoology & Genetics lab practicals', detail: 'Guru Nanak Dev University, Zoology Department' },
  { title: 'Pioneer Member — Science Journal Club', detail: 'Pwani University · 2017–2018' },
  { title: 'BOG Biology & Maths teacher', detail: 'Mugunga High School' },
]
