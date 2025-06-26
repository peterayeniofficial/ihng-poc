"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Settings, Download, Share, Zap } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent } from "./ui/card";

export default function HCPConnectionsMap() {
	const [showConnections] = useState(true);

	// Sample network nodes for the visualization
	const networkNodes = [
		{
			id: 1,
			x: 300,
			y: 200,
			avatar: "/placeholder.svg?height=60&width=60",
			name: "Dr. Smith",
		},
		{
			id: 2,
			x: 500,
			y: 150,
			avatar: "/placeholder.svg?height=60&width=60",
			name: "Dr. Johnson",
		},
		{
			id: 3,
			x: 400,
			y: 300,
			avatar: "/placeholder.svg?height=60&width=60",
			name: "Dr. Williams",
		},
		{
			id: 4,
			x: 600,
			y: 250,
			avatar: "/placeholder.svg?height=60&width=60",
			name: "Dr. Brown",
		},
		{
			id: 5,
			x: 350,
			y: 400,
			avatar: "/placeholder.svg?height=60&width=60",
			name: "Dr. Davis",
		},
		{
			id: 6,
			x: 550,
			y: 350,
			avatar: "/placeholder.svg?height=60&width=60",
			name: "Dr. Miller",
		},
		{
			id: 7,
			x: 450,
			y: 500,
			avatar: "/placeholder.svg?height=60&width=60",
			name: "Dr. Wilson",
		},
		{
			id: 8,
			x: 700,
			y: 300,
			avatar: "/placeholder.svg?height=60&width=60",
			name: "Dr. Moore",
		},
		{
			id: 9,
			x: 250,
			y: 350,
			avatar: "/placeholder.svg?height=60&width=60",
			name: "Dr. Taylor",
		},
		{
			id: 10,
			x: 650,
			y: 450,
			avatar: "/placeholder.svg?height=60&width=60",
			name: "Dr. Anderson",
		},
	];

	const connections = [
		[1, 2],
		[1, 3],
		[2, 4],
		[3, 5],
		[4, 6],
		[5, 7],
		[6, 8],
		[7, 9],
		[8, 10],
		[3, 6],
		[2, 8],
		[5, 10],
	];
	return (
		<div className="h-full w-[60%] relative overflow-hidden">
			<Card className="h-full">
				<CardContent>
					<div className="flex-1 relative">
						{/* Network Visualization */}

						<svg className="w-full h-full">
							{/* Render connections */}
							{showConnections &&
								connections.map(([from, to], index) => {
									const fromNode = networkNodes.find((n) => n.id === from);
									const toNode = networkNodes.find((n) => n.id === to);
									if (!fromNode || !toNode) return null;

									return (
										<line
											key={index}
											x1={fromNode.x}
											y1={fromNode.y}
											x2={toNode.x}
											y2={toNode.y}
											stroke="#e5e7eb"
											strokeWidth="1"
											opacity="0.6"
										/>
									);
								})}
						</svg>

						{/* Render nodes */}
						{networkNodes.map((node) => (
							<div
								key={node.id}
								className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform"
								style={{ left: node.x, top: node.y }}
							>
								<Avatar className="h-12 w-12 border-2 border-white shadow-lg">
									<AvatarImage
										src={node.avatar || "/placeholder.svg"}
										alt={node.name}
									/>
									<AvatarFallback>
										{node.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>
							</div>
						))}
					</div>

					{/* Right sidebar tools */}
					<div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-2">
						<Button variant="ghost" size="icon" className="bg-white shadow-sm">
							<Zap className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="bg-white shadow-sm">
							<Share className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="bg-white shadow-sm">
							<Download className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="bg-white shadow-sm">
							<Settings className="h-4 w-4" />
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
