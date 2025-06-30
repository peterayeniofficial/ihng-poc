'use client'

import { useState, useCallback } from "react"
import HCPConnectionsMap from "@/components/hcp-connections-map"
import HcpControlPanel from "@/components/hcp-control-panel"
import HCPDetails from "@/components/hcp-details"
import Search from "@/components/search"
import { mockHCPData } from "@/data/mock-data"
import type { HCP } from "@/types/hcp"

export default function NetworkDetail() {
	const [searchTerm, setSearchTerm] = useState("")
	const [selectedHCP, setSelectedHCP] = useState<HCP | null>(null)
	const [focusedHCPId, setFocusedHCPId] = useState<string | null>(null)
	const [searchNotFound, setSearchNotFound] = useState(false)

	const handleSearch = useCallback(() => {
		if (!searchTerm.trim()) return

		const found = mockHCPData.find((hcp) =>
			hcp.name.toLowerCase().includes(searchTerm.toLowerCase())
		)

		if (found) {
			setSelectedHCP(found)
			setFocusedHCPId(found.id)
			setSearchNotFound(false)
		} else {
			setSelectedHCP(null)
			setFocusedHCPId(null)
			setSearchNotFound(true)
		}
	}, [searchTerm])

	const clearSearch = () => {
		setSearchTerm("")
		setSelectedHCP(null)
		setFocusedHCPId(null)
	}

	return (
		<>
			<HcpControlPanel />

			<section
				aria-label="Search section"
				className="w-full max-w-2xl"
			>
				<Search
					value={searchTerm}
					onChange={(val) => {
						setSearchTerm(val)
						setSearchNotFound(false)
					}}
					onSearch={handleSearch}
					onClear={clearSearch}
					placeholder="Search for an HCP by name..."
				/>
				{searchNotFound && (
					<p
						className="text-sm text-red-600 mt-2"
						role="alert"
						aria-live="polite"
					>
						No HCP found matching “{searchTerm}”.
					</p>
				)}
			</section>

			<section aria-labelledby="peerspace-heading" className="flex flex-col gap-4">
				<h1 id="peerspace-heading" className="text-lg font-semibold mb-2">
					PeerSpace
				</h1>

				<div className="flex flex-col md:flex-row flex-wrap gap-4">
					{/* HCP Info Panel */}
					<div className="w-full md:w-5/12 min-w-0" role="complementary" aria-label="Selected HCP Details">
						<HCPDetails selectedHCP={selectedHCP} onClose={() => setSelectedHCP(null)} />
					</div>

					{/* Graph View */}
					<div className="w-full md:w-7/12 min-w-0" role="region" aria-label="HCP Network Map">
						<HCPConnectionsMap
							focusedHCPId={focusedHCPId}
							onSelectHCP={(hcp) => setSelectedHCP(hcp)}
						/>
					</div>
				</div>
			</section>
		</>
	)
}
