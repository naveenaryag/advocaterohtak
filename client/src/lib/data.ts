import { BlogPost, Testimonial, PracticeArea, FAQ } from '@shared/schema';

export const practiceAreas: PracticeArea[] = [
  {
    id: '1',
    title: 'Criminal Law',
    icon: 'Scale',
    description: 'Expert representation in criminal cases including bail matters, anticipatory bail, and criminal trials',
    detailedDescription: 'Comprehensive criminal defense services covering all stages of criminal proceedings. With over 10 years of experience in Rohtak District Courts, I provide strategic defense in cases ranging from minor offenses to serious criminal charges. My expertise includes bail applications, quashing petitions, anticipatory bail, and trial advocacy.',
    relatedBlogSlugs: ['understanding-bail-rights-in-india', 'criminal-defense-strategies', 'anticipatory-bail-guide'],
  },
  {
    id: '2',
    title: 'Matrimonial Cases',
    icon: 'Heart',
    description: 'Sensitive handling of divorce, maintenance, custody, and domestic violence cases',
    detailedDescription: 'Compassionate legal support in family matters including divorce proceedings, maintenance claims, child custody battles, and domestic violence cases. I understand the emotional complexities involved and provide both legal expertise and empathetic counsel to help families navigate difficult transitions.',
    relatedBlogSlugs: ['divorce-process-in-india', 'child-custody-laws'],
  },
  {
    id: '3',
    title: 'Cheque Bounce (Section 138 NI Act)',
    icon: 'FileText',
    description: 'Recovery of dishonored cheque amounts and defending S.138 cases',
    detailedDescription: 'Specialized expertise in negotiable instruments cases under Section 138 of the Negotiable Instruments Act. Whether you need to recover money from bounced cheques or defend yourself against such allegations, I provide comprehensive legal strategies backed by thorough knowledge of procedural requirements and case law.',
    relatedBlogSlugs: ['cheque-bounce-cases-guide', 'section-138-ni-act'],
  },
  {
    id: '4',
    title: 'Civil Disputes',
    icon: 'Briefcase',
    description: 'Resolution of property disputes, contract matters, and civil litigation',
    detailedDescription: 'Expert handling of civil litigation matters including property disputes, partition suits, specific performance of contracts, declaration suits, and injunction applications. I adopt a strategic approach combining negotiation and litigation to achieve favorable outcomes for my clients.',
    relatedBlogSlugs: ['property-dispute-resolution'],
  },
  {
    id: '5',
    title: 'Bail Matters',
    icon: 'Shield',
    description: 'Urgent bail applications and anticipatory bail in all types of cases',
    detailedDescription: 'Swift and effective bail application services with a strong track record of securing bail for clients. I handle regular bail, anticipatory bail, and bail cancellation matters across all types of offenses. My prompt action and thorough legal preparation ensure the best possible chances of securing your release.',
    relatedBlogSlugs: ['understanding-bail-rights-in-india', 'anticipatory-bail-guide'],
  },
  {
    id: '6',
    title: 'Property Matters',
    icon: 'Home',
    description: 'Property registration, title verification, and property-related litigation',
    detailedDescription: 'Complete property law services including title verification, property registration, partition suits, possession matters, and property-related disputes. I ensure your property transactions are legally sound and represent you effectively in property litigation before courts and revenue authorities.',
    relatedBlogSlugs: ['property-dispute-resolution'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    caseType: 'Bail Matter',
    rating: 5,
    comment: 'Advocate Naveen Arya secured my bail within 48 hours. His prompt action and deep knowledge of criminal law saved me and my family from immense stress. Highly recommended for any criminal case.',
    date: '2024-01-15',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    caseType: 'Matrimonial Dispute',
    rating: 5,
    comment: 'Very professional and compassionate handling of my divorce case. Naveen Sir guided me through every step with patience and ensured fair settlement. His expertise in family law is exceptional.',
    date: '2024-02-20',
  },
  {
    id: '3',
    name: 'Amit Singh',
    caseType: 'Property Dispute',
    rating: 5,
    comment: 'Successfully resolved my long-standing property dispute. The strategic approach and courtroom skills demonstrated by Advocate Arya were outstanding. Worth every penny.',
    date: '2023-12-10',
  },
  {
    id: '4',
    name: 'Sunita Devi',
    caseType: 'Cheque Bounce Case',
    rating: 5,
    comment: 'Recovered full amount in my Section 138 case. The professional handling and regular updates throughout the case gave me confidence. Best advocate in Rohtak for financial disputes.',
    date: '2024-03-05',
  },
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What types of cases do you handle?',
    answer: 'I specialize in criminal law, matrimonial cases, property disputes, cheque bounce cases (Section 138), bail matters, and civil litigation. With over 10 years of experience practicing in Rohtak District Courts, I provide comprehensive legal representation across diverse practice areas.',
  },
  {
    id: '2',
    question: 'How much do you charge for legal services?',
    answer: 'Legal fees vary depending on the complexity of the case, court level, and time required. I offer transparent pricing with an initial consultation to discuss your case and provide a fee estimate. Emergency matters like bail applications are handled on priority with competitive rates.',
  },
  {
    id: '3',
    question: 'Can you help with urgent bail matters?',
    answer: 'Yes, I provide 24/7 availability for urgent bail matters. With extensive experience in securing bail and anticipatory bail, I ensure prompt filing of applications and represent clients effectively before the court. Contact me immediately for bail-related emergencies.',
  },
  {
    id: '4',
    question: 'Which courts do you practice in?',
    answer: 'I primarily practice in Rohtak District Courts, including the District Court, Additional District Courts, and various civil and criminal courts in Rohtak. I also appear before Higher Courts including Punjab & Haryana High Court when required.',
  },
  {
    id: '5',
    question: 'How can I schedule a consultation?',
    answer: 'You can schedule a consultation by calling me directly, sending a WhatsApp message, or filling out the contact form on this website. I offer both in-person consultations at my office and phone consultations for initial case assessment.',
  },
  {
    id: '6',
    question: 'Do you handle cases outside Rohtak?',
    answer: 'While my primary practice is in Rohtak, I can handle cases in nearby districts and appear before the Punjab & Haryana High Court. For matters outside my regular jurisdiction, I can coordinate with associates or advise on the best course of action.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'understanding-bail-rights-in-india',
    title: 'Understanding Your Bail Rights in India: A Comprehensive Guide for Rohtak Residents',
    excerpt: 'Learn about bail rights, types of bail, and the bail application process in Indian criminal law. Essential information for anyone facing criminal charges in Rohtak.',
    content: `<h2>Introduction to Bail Rights in India</h2>
<p>Bail is a fundamental right enshrined in Indian criminal jurisprudence. Understanding your bail rights is crucial if you or a loved one faces criminal charges. This comprehensive guide explains the bail system in India, specifically relevant to Rohtak District Courts.</p>

<h2>What is Bail?</h2>
<p>Bail is the temporary release of an accused person awaiting trial, sometimes on the condition that a sum of money be lodged to guarantee their appearance in court. The Indian legal system recognizes bail as a rule rather than an exception, except in specific circumstances.</p>

<h2>Types of Bail in India</h2>

<h3>1. Regular Bail</h3>
<p>Regular bail is sought after arrest and subsequent detention. It applies when the accused is already in judicial or police custody. The application is made before the court having jurisdiction over the offense.</p>

<h3>2. Anticipatory Bail</h3>
<p>Under Section 438 of the CrPC, anticipatory bail allows a person to seek bail in anticipation of arrest. This is particularly important in cases where arrest is imminent but has not yet occurred.</p>

<h3>3. Interim Bail</h3>
<p>Interim bail is temporary bail granted for a short period until the regular bail application is decided. It provides immediate relief while the main bail application is pending.</p>

<h2>Bail Application Process in Rohtak Courts</h2>
<p>In Rohtak District Courts, the bail application process involves several steps:</p>
<ul>
<li>Drafting of bail application with proper legal grounds</li>
<li>Filing before the appropriate court</li>
<li>Serving notice to the prosecution</li>
<li>Court hearing and arguments</li>
<li>Bail order and execution of bail bonds</li>
</ul>

<h2>Factors Considered by Courts</h2>
<p>When deciding bail applications, Rohtak courts consider:</p>
<ul>
<li>Nature and gravity of the offense</li>
<li>Severity of punishment</li>
<li>Criminal antecedents of the accused</li>
<li>Likelihood of the accused fleeing from justice</li>
<li>Possibility of tampering with evidence or witnesses</li>
<li>Personal and family circumstances</li>
</ul>

<h2>Why You Need an Experienced Advocate</h2>
<p>Navigating the bail process requires expertise in criminal law and familiarity with local court procedures. An experienced advocate in Rohtak can:</p>
<ul>
<li>Draft legally sound bail applications</li>
<li>Present compelling arguments before the court</li>
<li>Ensure compliance with all procedural requirements</li>
<li>Secure prompt release from custody</li>
</ul>

<h2>Contact for Bail Assistance in Rohtak</h2>
<p>If you need immediate assistance with bail matters in Rohtak, contact Advocate Naveen Arya for expert legal representation. With over 10 years of experience in criminal law and a strong track record of securing bail for clients, you can trust in professional and effective legal support.</p>`,
    author: 'Advocate Naveen Arya',
    publishedDate: '2024-01-15',
    readTime: '8 min read',
    image: '/blog-bail-rights.jpg',
    keywords: ['bail rights india', 'rohtak advocate', 'criminal lawyer rohtak', 'anticipatory bail', 'bail application'],
  },
  {
    id: '2',
    slug: 'cheque-bounce-cases-guide',
    title: 'Complete Guide to Cheque Bounce Cases Under Section 138 NI Act in Rohtak',
    excerpt: 'Everything you need to know about cheque bounce cases, legal remedies, and how to file or defend Section 138 cases in Rohtak District Courts.',
    content: `<h2>Understanding Cheque Bounce Cases</h2>
<p>Cheque bounce or dishonour of cheques is a common financial dispute in India. Section 138 of the Negotiable Instruments Act, 1881 makes dishonour of cheques a criminal offense, providing both the drawer and payee with specific legal remedies.</p>

<h2>What Constitutes a Cheque Bounce?</h2>
<p>A cheque is said to bounce when it is returned unpaid by the bank for reasons such as:</p>
<ul>
<li>Insufficient funds in the account</li>
<li>Signature mismatch</li>
<li>Account closed</li>
<li>Post-dated cheque presented before due date</li>
<li>Frozen account</li>
<li>Stop payment instructions</li>
</ul>

<h2>Legal Provisions - Section 138 NI Act</h2>
<p>Section 138 of the Negotiable Instruments Act provides for criminal liability when a cheque is dishonoured due to insufficient funds or exceeding arranged limits. The offense is punishable with imprisonment up to two years or fine up to twice the cheque amount, or both.</p>

<h2>Essential Elements of Section 138</h2>
<p>For a successful prosecution under Section 138, the following elements must be satisfied:</p>
<ul>
<li>A cheque must have been issued for discharge of a legally enforceable debt</li>
<li>The cheque must have been presented within its validity period</li>
<li>The cheque was dishonoured due to insufficient funds or exceeding arrangements</li>
<li>Legal notice was served within 30 days of receiving dishonour memo</li>
<li>The drawer failed to make payment within 15 days of notice</li>
<li>Complaint filed within 30 days of cause of action</li>
</ul>

<h2>Procedure to File Cheque Bounce Case in Rohtak</h2>
<h3>Step 1: Legal Notice</h3>
<p>Send a legal notice within 30 days of receiving the cheque dishonour memo. The notice must demand payment within 15 days.</p>

<h3>Step 2: Filing Complaint</h3>
<p>If payment is not received within 15 days, file a complaint before the appropriate Magistrate Court in Rohtak within 30 days.</p>

<h3>Step 3: Court Proceedings</h3>
<p>The court issues summons to the accused, records statements, examines evidence, and delivers judgment.</p>

<h2>Defenses Available to Accused</h2>
<p>Common defenses in Section 138 cases include:</p>
<ul>
<li>Cheque issued as security, not for payment</li>
<li>No legally enforceable debt existed</li>
<li>Procedural non-compliance by complainant</li>
<li>Insufficient funds due to garnishee orders or freezing of account</li>
<li>Signature forgery or alteration of cheque</li>
</ul>

<h2>Recent Amendments and Judgments</h2>
<p>The Negotiable Instruments (Amendment) Act, 2018 introduced interim compensation provisions. Courts can now direct the drawer to pay interim compensation up to 20% of the cheque amount.</p>

<h2>Why Hire an Expert Advocate in Rohtak?</h2>
<p>Cheque bounce cases involve strict procedural compliance and technical legal requirements. An experienced advocate can:</p>
<ul>
<li>Draft legally compliant notices and complaints</li>
<li>Ensure adherence to strict timelines</li>
<li>Present strong evidence and arguments</li>
<li>Maximize recovery or minimize liability</li>
</ul>

<h2>Conclusion</h2>
<p>Section 138 cases require prompt action and legal expertise. Whether you need to recover money from a bounced cheque or defend against such allegations, consult with Advocate Naveen Arya in Rohtak for professional legal assistance.</p>`,
    author: 'Advocate Naveen Arya',
    publishedDate: '2024-02-10',
    readTime: '10 min read',
    image: '/blog-cheque-bounce.jpg',
    keywords: ['cheque bounce', 'section 138', 'ni act', 'rohtak advocate', 'best lawyer rohtak', 'financial disputes'],
  },
  {
    id: '3',
    slug: 'property-dispute-resolution',
    title: 'Resolving Property Disputes in Rohtak: Legal Remedies and Court Procedures',
    excerpt: 'Expert guidance on property disputes, partition suits, title verification, and property litigation in Rohtak. Learn about your legal rights and remedies.',
    content: `<h2>Property Disputes in Rohtak: An Overview</h2>
<p>Property disputes are among the most common civil litigation matters in Rohtak. Whether involving family property partition, boundary disputes, or title conflicts, these cases require specialized legal expertise and familiarity with local revenue records and court procedures.</p>

<h2>Common Types of Property Disputes</h2>

<h3>1. Partition Suits</h3>
<p>Partition suits involve division of jointly owned property among co-owners. These are common in family property disputes where multiple legal heirs claim shares in ancestral property.</p>

<h3>2. Title Disputes</h3>
<p>Title disputes arise when multiple parties claim ownership of the same property based on different documents or inheritance claims.</p>

<h3>3. Boundary Disputes</h3>
<p>Disputes over property boundaries between neighboring properties are frequent, especially in rural areas of Rohtak district.</p>

<h3>4. Possession Disputes</h3>
<p>Cases involving illegal possession, encroachment, or wrongful eviction fall under this category.</p>

<h3>5. Specific Performance</h3>
<p>When a party to a property sale agreement refuses to complete the transaction, the other party can seek specific performance through court.</p>

<h2>Legal Remedies Available</h2>

<h3>Civil Suits</h3>
<p>File civil suits for declaration of title, partition, injunction, possession, or specific performance before the appropriate civil court in Rohtak.</p>

<h3>Revenue Court Proceedings</h3>
<p>Certain property matters fall under revenue court jurisdiction, including mutation cases and revenue record corrections.</p>

<h3>Injunction Applications</h3>
<p>Temporary or permanent injunctions can be sought to prevent illegal construction, encroachment, or disposal of disputed property.</p>

<h2>Property Verification Process</h2>
<p>Before purchasing property in Rohtak, conduct thorough verification:</p>
<ul>
<li>Title deed examination</li>
<li>Revenue record verification (jamabandi, fard, khasra)</li>
<li>Encumbrance certificate check</li>
<li>Physical inspection and boundary verification</li>
<li>Clearance of dues and taxes</li>
<li>Verification of development authority approvals</li>
</ul>

<h2>Partition of Property: Legal Process</h2>
<p>The partition process in Rohtak courts involves:</p>
<ul>
<li>Filing partition suit with schedule of property</li>
<li>Preliminary decree determining shares</li>
<li>Commissioner's report on physical partition possibility</li>
<li>Final decree specifying divided portions</li>
<li>Mutation of revenue records</li>
</ul>

<h2>Documents Required for Property Litigation</h2>
<ul>
<li>Original sale deed or title documents</li>
<li>Revenue records (jamabandi, registry)</li>
<li>Mutation records</li>
<li>Tax payment receipts</li>
<li>Survey documents and maps</li>
<li>Will or succession certificate (if applicable)</li>
<li>Previous court orders (if any)</li>
</ul>

<h2>Important Landmark Judgments</h2>
<p>Several Supreme Court judgments have shaped property law in India, including principles on:</p>
<ul>
<li>Adverse possession requirements</li>
<li>Benami transactions</li>
<li>Hindu Succession Act amendments</li>
<li>Rights of daughters in ancestral property</li>
</ul>

<h2>Alternative Dispute Resolution</h2>
<p>Property disputes can often be resolved through mediation or arbitration, saving time and legal expenses. Rohtak courts actively promote ADR mechanisms for civil disputes.</p>

<h2>Why Choose Advocate Naveen Arya?</h2>
<p>Property litigation requires deep understanding of:</p>
<ul>
<li>Civil and revenue laws</li>
<li>Local revenue records and procedures</li>
<li>Survey and settlement principles</li>
<li>Family law and succession</li>
<li>Rohtak court practices and procedures</li>
</ul>

<p>With extensive experience in property matters before Rohtak courts and revenue authorities, Advocate Naveen Arya provides comprehensive legal services from title verification to complex litigation.</p>

<h2>Conclusion</h2>
<p>Property disputes require both legal expertise and strategic approach. Whether you're buying property, facing a dispute, or seeking partition, professional legal advice is essential. Contact Advocate Naveen Arya for expert guidance on all property-related matters in Rohtak.</p>`,
    author: 'Advocate Naveen Arya',
    publishedDate: '2024-03-01',
    readTime: '12 min read',
    image: '/blog-property-dispute.jpg',
    keywords: ['property dispute', 'partition suit', 'rohtak advocate', 'property lawyer', 'title verification', 'land dispute'],
  },
];
