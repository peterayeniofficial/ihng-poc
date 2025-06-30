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
			<div className="flex flex-col lg:flex-row justify-between gap-4">
				<Card className="w-full lg:w-[80%]">
					<CardContent className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6">
						{/* Avatar and Identity */}
						<div className="flex items-center gap-4">
							<Avatar className="h-12 w-12">
								<AvatarImage
									src="/placeholder.svg?height=48&width=48"
									alt="Avatar of Dr. Sarah Johnson"
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

						{/* Stats and Action */}
						<div className="flex flex-col items-start sm:items-end gap-3 w-full sm:w-auto">
							<div className="flex gap-6 text-sm text-gray-600">
								<span>
									My Peers: <strong>232</strong>
								</span>
								<span>
									Following: <strong>124</strong>
								</span>
							</div>
							<Button className="w-full sm:w-auto" aria-label="Create web">
								Create web
							</Button>
						</div>
					</CardContent>
				</Card>

				<Card className="w-full lg:w-[19%]">
					<CardContent className="flex flex-col justify-center h-full py-6 gap-4">
						<div className="flex items-center gap-3">
							<Switch
								id="toggle-connections"
								checked={showConnections}
								onCheckedChange={setShowConnections}
								aria-checked={showConnections}
								className="data-[state=checked]:bg-blue-600"
							/>
							<label
								htmlFor="toggle-connections"
								className="text-sm text-gray-600"
							>
								Show connections
							</label>
						</div>

						<div className="flex items-center gap-3">
							<Switch
								id="toggle-map-connections"
								checked={showConnectionsOnMap}
								onCheckedChange={setShowConnectionsOnMap}
								aria-checked={showConnectionsOnMap}
								className="data-[state=checked]:bg-blue-600"
							/>
							<label
								htmlFor="toggle-map-connections"
								className="text-sm text-gray-600"
							>
								Show my connections on map
							</label>
						</div>
					</CardContent>
				</Card>
			</div>
		</header>
	);
}
