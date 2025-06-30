/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { HCP } from "@/types/hcp";

interface HCPDetailsProps {
	selectedHCP: HCP | null;
	onClose: () => void;
}

export default function HCPDetails({ selectedHCP, onClose }: HCPDetailsProps) {
	return (
		<section
			className="flex flex-col gap-6 w-full lg:w-[40%]"
			role="region"
			aria-label={`Details about ${selectedHCP?.name}`}
		>
			<Card className="bg-gradient-to-br from-blue-50 to-purple-50 shadow-md">
				<CardContent className="p-6">
					<div className="text-center space-y-4">
						<Avatar className="h-20 w-20 mx-auto border-4 border-white shadow-lg">
							<AvatarImage
								src="/placeholder.svg?height=80&width=80"
								alt={`Profile picture of ${selectedHCP?.name}`}
							/>
							<AvatarFallback aria-hidden="true">SJ</AvatarFallback>
						</Avatar>

						<div>
							<h2 className="font-semibold text-lg">{selectedHCP?.name}</h2>
							<p className="text-sm text-gray-600">
								{selectedHCP?.title} • {selectedHCP?.yearsOfExperience} years
							</p>
						</div>

						<p className="text-sm text-gray-700 leading-relaxed">
							Experienced and compassionate doctor specializing in cardiology
						</p>

						<div className="flex justify-center space-x-8 text-center">
							<div>
								<p className="text-sm text-gray-500">Peers</p>
								<p className="font-semibold">232</p>
							</div>
							<div>
								<p className="text-sm text-gray-500">Following</p>
								<p className="font-semibold">124</p>
							</div>
						</div>

						<div
							className="flex space-x-2"
							role="group"
							aria-label="Profile actions"
						>
							<Button
								className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
								aria-label="View full profile"
							>
								View Profile
							</Button>
							<Button
								variant="outline"
								className="flex-1 bg-white text-gray-700 border-gray-300"
								aria-label="Download resume"
							>
								Resume
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>

			<div className="grid grid-cols-2 gap-4">
				<div>
					<p className="text-sm text-gray-500">Patients Served</p>
					<p className="text-2xl font-bold text-green-600">1000</p>
				</div>
				<div>
					<p className="text-sm text-gray-500">Success Rate</p>
					<p className="text-2xl font-bold text-green-600">95%</p>
				</div>
			</div>

			<section aria-labelledby="about-heading">
				<h3 id="about-heading" className="font-semibold text-gray-900 mb-2">
					About
				</h3>
				<p className="text-sm text-gray-600 leading-relaxed">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					lectus dui, viverra eu tempor vitae, consectetur ut nunc.
				</p>
				<p className="text-sm text-gray-600 leading-relaxed mt-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					lectus dui, viverra eu tempor vitae, consectetur ut nunc. Pellentesque
					ante dolor, vestibulum ut, faucibus quis dui. Vivamus sit amet dolor.
				</p>
			</section>

			<section aria-labelledby="education-heading">
				<h3 id="education-heading" className="font-semibold text-gray-900 mb-3">
					Education
				</h3>
				<div className="flex items-start space-x-3">
					<div
						className="w-8 h-8 bg-blue-600 rounded flex-shrink-0"
						aria-hidden="true"
					/>
					<div>
						<h4 className="font-medium text-gray-900">
							Harvard Medical University
						</h4>
						<p className="text-sm text-gray-600">Cardiology Degree</p>
						<p className="text-sm text-gray-600">
							Specialization in Heart Health
						</p>
						<p className="text-xs text-gray-500">Sept–Jun 2016</p>
					</div>
				</div>
			</section>
		</section>
	);
}
