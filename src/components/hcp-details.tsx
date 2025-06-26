import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function HCPDetails() {
	return (
		<div className="flex flex-col gap-6 w-[40%]">
			<Card className="bg-gradient-to-br from-blue-50 to-purple-50">
				<CardContent className="p-6">
					<div className="text-center space-y-4">
						<Avatar className="h-20 w-20 mx-auto border-4 border-white shadow-lg">
							<AvatarImage
								src="/placeholder.svg?height=80&width=80"
								alt="Dr. Emily Carter"
							/>
							<AvatarFallback>EC</AvatarFallback>
						</Avatar>

						<div>
							<h3 className="font-semibold text-lg">Dr. Emily Carter</h3>
							<p className="text-sm text-gray-600">Cardiologist • 26 years</p>
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

						<div className="flex space-x-2">
							<Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
								View Profile
							</Button>
							<Button
								variant="outline"
								className="flex-1 bg-white text-gray-700 border-gray-300"
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
					<p className="text-sm text-gray-500">Success rate</p>
					<p className="text-2xl font-bold text-green-600">95%</p>
				</div>
			</div>

			{/* About */}
			<div>
				<h4 className="font-semibold text-gray-900 mb-2">About</h4>
				<p className="text-sm text-gray-600 leading-relaxed">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					lectus dui, viverra eu tempor vitae, consectetur ut nunc.
				</p>
				<p className="text-sm text-gray-600 leading-relaxed mt-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					lectus dui, viverra eu tempor vitae, consectetur ut nunc. Pellentesque
					ante dolor, vestibulum ut, faucibus quis dui. Vivamus sit amet dolor.
				</p>
			</div>

			{/* Education */}
			<div>
				<h4 className="font-semibold text-gray-900 mb-3">Education</h4>
				<div className="flex items-start space-x-3">
					<div className="w-8 h-8 bg-blue-600 rounded flex-shrink-0"></div>
					<div>
						<h5 className="font-medium text-gray-900">
							Harvard Medical University
						</h5>
						<p className="text-sm text-gray-600">Cardiology Degree</p>
						<p className="text-sm text-gray-600">
							Specialization in Heart Health
						</p>
						<p className="text-xs text-gray-500">Sept-Jun 2016</p>
					</div>
				</div>
			</div>
		</div>
	);
}
