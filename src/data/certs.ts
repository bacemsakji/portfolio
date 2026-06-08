export interface Cert {
  id: string;
  title: string;
  issuer: string;
  description?: string;
}

export const certs: Cert[] = [
  {
    id: "ccna1",
    title: "CCNA1",
    issuer: "Cisco",
    description: "Networking fundamentals — IP addressing, subnetting, routing basics.",
  },
  {
    id: "tcf",
    title: "TCF — C1",
    issuer: "France Éducation International",
    description: "Advanced French proficiency certification.",
  },
  {
    id: "ctf",
    title: "CTF Competitor",
    issuer: "PicoCTF & others",
    description:
      "Solved cryptography challenges including RSA, ECDSA, and Coppersmith-based attacks in PicoCTF and community competitions.",
  },
  {
    id: "cpc",
    title: "CPC Club Member",
    issuer: "Competitive Programming Club",
    description: "Active member participating in algorithmic problem-solving and team challenges.",
  },
];
