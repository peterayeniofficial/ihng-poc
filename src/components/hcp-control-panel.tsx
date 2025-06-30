"use client";

import React, { useState } from "react";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

export default function HcpControlPanel() {
	const [showConnections, setShowConnections] = useState(true);
	const [showConnectionsOnMap, setShowConnectionsOnMap] = useState(true);
	return (
		<header className="py-4 w-full">
			<div className="flex justify-between">
				<Card className="w-[80%]">
					<CardContent className="flex items-start justify-between space-y-2">
						<div className="mt-4 flex space-x-4">
							<Avatar className="h-12 w-12">
								<AvatarImage
									src="/placeholder.svg?height=48&width=48"
									alt="Dr. Sarah Johnson"
								/>
								<AvatarFallback>SJ</AvatarFallback>
							</Avatar>
							<div>
								<h1 className="text-xl font-semibold text-gray-900">
									Dr. Sarah Johnson
								</h1>
								<p className="text-sm text-gray-500">Chief of Cardiology</p>
							</div>
						</div>

						<div className="mt-4 flex flex-col space-x-2">
							<div className="flex items-center space-x-6">
								<div className="flex items-center space-x-4 text-sm text-gray-600">
									<span>
										My Peers: <strong>232</strong>
									</span>
									<span>
										Following: <strong>124</strong>
									</span>
								</div>
							</div>
							<div>
								<Button className="text-white w-full">Create web</Button>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card className="w-[19%]">
					<CardContent className="flex flex-col justify-center h-full py-6 space-y-4">
						<div className="flex items-center space-x-2">
							<Switch
								checked={showConnections}
								onCheckedChange={setShowConnections}
								className="data-[state=checked]:bg-blue-600"
							/>
							<span className="text-sm text-gray-600">Show connections</span>
						</div>

						<div className="flex items-center space-x-2">
							<Switch
								checked={showConnectionsOnMap}
								onCheckedChange={setShowConnectionsOnMap}
								className="data-[state=checked]:bg-blue-600"
							/>
							<span className="text-sm text-gray-600">
								Show my connections on map
							</span>
						</div>
					</CardContent>
				</Card>
			</div>
		</header>
	);
}
