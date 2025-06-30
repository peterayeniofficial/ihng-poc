'use client'

import { useState, useCallback } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import HCPConnectionsMap from "@/components/hcp-connections-map"
import HcpControlPanel from "@/components/hcp-control-panel"
import HCPDetails from "@/components/hcp-details"
import Search from "@/components/search"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { mockHCPData } from "@/data/mock-data"
import type { HCP } from "@/types/hcp"

export default function Page() {
	const [searchTerm, setSearchTerm] = useState("")
	const [selectedHCP, setSelectedHCP] = useState<HCP | null>(null)
	const [focusedHCPId, setFocusedHCPId] = useState<string | null>(null)
	const [searchNotFound, setSearchNotFound] = useState(false)


	// Handles Enter-to-search logic
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
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
					<HcpControlPanel />

					<Search
						value={searchTerm}
						onChange={(val) => {
							setSearchTerm(val)
							setSearchNotFound(false) // clear not-found state as user types
						}}
						onSearch={handleSearch}
						onClear={clearSearch}
						placeholder="Search for an HCP by name..."
					/>
					{searchNotFound && (
						<p className="text-sm text-red-600 mt-2">No HCP found matching “{searchTerm}”.</p>
					)}

					<section>
						<h2 className="text-lg font-semibold mb-4">PeerSpace</h2>
						<div className="flex flex-col md:flex-row gap-4">
							<HCPDetails selectedHCP={selectedHCP} onClose={() => setSelectedHCP(null)} />
							<HCPConnectionsMap
								focusedHCPId={focusedHCPId}
								onSelectHCP={(hcp) => setSelectedHCP(hcp)}
							/>
						</div>
					</section>
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
