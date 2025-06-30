import type { Node, Edge } from "reactflow"
import type { HCP } from "../types/hcp"

export const mockHCPData: HCP[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    title: "Chief of Cardiology",
     yearsOfExperience: 19,
    specialties: ["Interventional Cardiology", "Heart Failure", "Cardiac Imaging"],
    education: [
      { degree: "MD", institution: "Harvard Medical School", year: "2005" },
      { degree: "Fellowship in Cardiology", institution: "Mayo Clinic", year: "2010" },
    ],
    workExperience: [
      { position: "Chief of Cardiology", organization: "Metropolitan Hospital", duration: "2018 - Present" },
      { position: "Senior Cardiologist", organization: "City Medical Center", duration: "2012 - 2018" },
    ],
    publications: [
      {
        title: "Novel Approaches to Heart Failure Management",
        journal: "Journal of Cardiology",
        year: "2023",
        citations: 45,
      },
      { title: "Cardiac Imaging in Modern Practice", journal: "Circulation", year: "2022", citations: 78 },
      { title: "Interventional Techniques in Complex Cases", journal: "Heart Journal", year: "2021", citations: 92 },
    ],
    connections: [
      { hcpId: "2", type: "Co-authorship", description: "Co-authored 5 papers on cardiac imaging", strength: "Strong" },
      { hcpId: "3", type: "Workplace", description: "Worked together at City Medical Center", strength: "Medium" },
      { hcpId: "4", type: "Education", description: "Both completed fellowship at Mayo Clinic", strength: "Medium" },
      { hcpId: "5", type: "Research", description: "Collaborated on heart failure research", strength: "Strong" },
    ],
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    title: "Director of Cardiac Imaging",
     yearsOfExperience: 17,
    specialties: ["Cardiac MRI", "Echocardiography", "CT Angiography"],
    education: [
      { degree: "MD", institution: "Stanford Medical School", year: "2006" },
      { degree: "Fellowship in Cardiac Imaging", institution: "Cleveland Clinic", year: "2011" },
    ],
    workExperience: [
      { position: "Director of Cardiac Imaging", organization: "Metropolitan Hospital", duration: "2016 - Present" },
      { position: "Imaging Specialist", organization: "Regional Heart Center", duration: "2011 - 2016" },
    ],
    publications: [
      { title: "Advanced MRI Techniques in Cardiology", journal: "Radiology", year: "2023", citations: 67 },
      { title: "Cardiac Imaging in Modern Practice", journal: "Circulation", year: "2022", citations: 78 },
    ],
    connections: [
      { hcpId: "1", type: "Co-authorship", description: "Co-authored 5 papers on cardiac imaging", strength: "Strong" },
      { hcpId: "6", type: "Workplace", description: "Current colleagues at Metropolitan Hospital", strength: "Strong" },
    ],
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    title: "Electrophysiologist",
     yearsOfExperience: 11,
    specialties: ["Arrhythmia Management", "Device Implantation", "Ablation Procedures"],
    education: [
      { degree: "MD", institution: "Johns Hopkins", year: "2007" },
      { degree: "Fellowship in Electrophysiology", institution: "Duke University", year: "2013" },
    ],
    workExperience: [
      { position: "Senior Electrophysiologist", organization: "Heart Rhythm Center", duration: "2015 - Present" },
      { position: "Cardiologist", organization: "City Medical Center", duration: "2013 - 2015" },
    ],
    publications: [
      { title: "Modern Ablation Techniques", journal: "Heart Rhythm", year: "2023", citations: 34 },
      { title: "Device Management in Complex Cases", journal: "Pacing", year: "2022", citations: 56 },
    ],
    connections: [
      { hcpId: "1", type: "Workplace", description: "Worked together at City Medical Center", strength: "Medium" },
      { hcpId: "4", type: "Research", description: "Joint research on arrhythmia management", strength: "Medium" },
    ],
  },
  {
    id: "4",
    name: "Dr. Robert Kim",
    title: "Interventional Cardiologist",
     yearsOfExperience: 14,
    specialties: ["PCI", "Structural Heart", "Complex Coronary Interventions"],
    education: [
      { degree: "MD", institution: "UCLA Medical School", year: "2004" },
      { degree: "Fellowship in Interventional Cardiology", institution: "Mayo Clinic", year: "2009" },
    ],
    workExperience: [
      {
        position: "Director of Interventional Cardiology",
        organization: "Cardiac Institute",
        duration: "2017 - Present",
      },
      { position: "Interventional Cardiologist", organization: "University Hospital", duration: "2009 - 2017" },
    ],
    publications: [
      { title: "Complex PCI Strategies", journal: "Catheterization", year: "2023", citations: 89 },
      { title: "Structural Heart Interventions", journal: "JACC", year: "2022", citations: 123 },
    ],
    connections: [
      { hcpId: "1", type: "Education", description: "Both completed fellowship at Mayo Clinic", strength: "Medium" },
      { hcpId: "3", type: "Research", description: "Joint research on arrhythmia management", strength: "Medium" },
      {
        hcpId: "5",
        type: "Co-authorship",
        description: "Co-authored papers on interventional techniques",
        strength: "Strong",
      },
    ],
  },
  {
    id: "5",
    name: "Dr. Lisa Wang",
    title: "Heart Failure Specialist",
     yearsOfExperience: 19,
    specialties: ["Advanced Heart Failure", "Transplant Cardiology", "Mechanical Support"],
    education: [
      { degree: "MD", institution: "University of Pennsylvania", year: "2008" },
      { degree: "Fellowship in Heart Failure", institution: "Columbia University", year: "2014" },
    ],
    workExperience: [
      {
        position: "Director of Heart Failure Program",
        organization: "Advanced Heart Center",
        duration: "2019 - Present",
      },
      { position: "Heart Failure Cardiologist", organization: "Transplant Institute", duration: "2014 - 2019" },
    ],
    publications: [
      {
        title: "Novel Approaches to Heart Failure Management",
        journal: "Journal of Cardiology",
        year: "2023",
        citations: 45,
      },
      { title: "Mechanical Support Devices", journal: "Heart Failure", year: "2022", citations: 67 },
    ],
    connections: [
      { hcpId: "1", type: "Research", description: "Collaborated on heart failure research", strength: "Strong" },
      {
        hcpId: "4",
        type: "Co-authorship",
        description: "Co-authored papers on interventional techniques",
        strength: "Strong",
      },
      { hcpId: "6", type: "Education", description: "Both trained at Columbia University", strength: "Weak" },
    ],
  },
  {
    id: "6",
    name: "Dr. James Thompson",
    title: "Preventive Cardiologist",
     yearsOfExperience: 12,
    specialties: ["Lipid Management", "Hypertension", "Cardiovascular Prevention"],
    education: [
      { degree: "MD", institution: "Northwestern University", year: "2009" },
      { degree: "Fellowship in Preventive Cardiology", institution: "Columbia University", year: "2015" },
    ],
    workExperience: [
      {
        position: "Director of Preventive Cardiology",
        organization: "Metropolitan Hospital",
        duration: "2020 - Present",
      },
      { position: "Preventive Cardiologist", organization: "Wellness Heart Center", duration: "2015 - 2020" },
    ],
    publications: [
      { title: "Lipid Management Guidelines", journal: "Prevention", year: "2023", citations: 78 },
      { title: "Hypertension in Modern Practice", journal: "Hypertension", year: "2022", citations: 45 },
    ],
    connections: [
      { hcpId: "2", type: "Workplace", description: "Current colleagues at Metropolitan Hospital", strength: "Strong" },
      { hcpId: "5", type: "Education", description: "Both trained at Columbia University", strength: "Weak" },
    ],
  },
]

export function createNetworkData(centerHcpId: string): { nodes: Node[]; edges: Edge[] } {
  const centerHcp = mockHCPData.find((hcp) => hcp.id === centerHcpId)
  if (!centerHcp) return { nodes: [], edges: [] }

  const nodes: Node[] = []
  const edges: Edge[] = []
  const connectedHcpIds = new Set<string>()

  // Add center node
  nodes.push({
    id: centerHcp.id,
    type: "hcp",
    position: { x: 0, y: 0 },
    data: {
      name: centerHcp.name,
      title: centerHcp.title,
      specialties: centerHcp.specialties,
      isCenter: true,
    },
  })

  // Add directly connected nodes
  centerHcp.connections.forEach((connection, index) => {
    const connectedHcp = mockHCPData.find((hcp) => hcp.id === connection.hcpId)
    if (connectedHcp) {
      connectedHcpIds.add(connection.hcpId)

      // Position nodes in a circle around the center
      const angle = (index * 2 * Math.PI) / centerHcp.connections.length
      const radius = 300
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius

      nodes.push({
        id: connectedHcp.id,
        type: "hcp",
        position: { x, y },
        data: {
          name: connectedHcp.name,
          title: connectedHcp.title,
          specialties: connectedHcp.specialties,
          isCenter: false,
        },
      })

      // Add edge
      edges.push({
        id: `${centerHcp.id}-${connectedHcp.id}`,
        source: centerHcp.id,
        target: connectedHcp.id,
        type: "connection",
        data: {
          type: connection.type,
          description: connection.description,
          strength: connection.strength,
          source: centerHcp.name,
          target: connectedHcp.name,
        },
      })
    }
  })

  // Add second-degree connections
  let secondDegreeIndex = 0
  connectedHcpIds.forEach((hcpId) => {
    const hcp = mockHCPData.find((h) => h.id === hcpId)
    if (hcp) {
      hcp.connections.forEach((connection) => {
        const secondDegreeHcp = mockHCPData.find((h) => h.id === connection.hcpId)
        if (
          secondDegreeHcp &&
          connection.hcpId !== centerHcpId &&
          !connectedHcpIds.has(connection.hcpId) &&
          !nodes.find((n) => n.id === connection.hcpId)
        ) {
          // Position second-degree nodes further out
          const angle = (secondDegreeIndex * 2 * Math.PI) / 8
          const radius = 500
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          nodes.push({
            id: secondDegreeHcp.id,
            type: "hcp",
            position: { x, y },
            data: {
              name: secondDegreeHcp.name,
              title: secondDegreeHcp.title,
              specialties: secondDegreeHcp.specialties,
              isCenter: false,
            },
          })

          edges.push({
            id: `${hcp.id}-${secondDegreeHcp.id}`,
            source: hcp.id,
            target: secondDegreeHcp.id,
            type: "connection",
            data: {
              type: connection.type,
              description: connection.description,
              strength: connection.strength,
              source: hcp.name,
              target: secondDegreeHcp.name,
            },
          })

          secondDegreeIndex++
        }
      })
    }
  })

  return { nodes, edges }
}
