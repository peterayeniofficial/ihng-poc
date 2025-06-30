export interface HCP {
	id: string;
	name: string;
	title: string;
	yearsOfExperience: number;
	specialties: string[];
	education: {
		degree: string;
		institution: string;
		year: string;
	}[];
	workExperience: {
		position: string;
		organization: string;
		duration: string;
	}[];
	publications: {
		title: string;
		journal: string;
		year: string;
		citations: number;
	}[];
	connections: {
		hcpId: string;
		type: "Co-authorship" | "Workplace" | "Education" | "Research";
		description: string;
		strength: "Strong" | "Medium" | "Weak";
	}[];
}
