import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import NetworkDetail from "@/components/network-detail"

export default function Page() {


	return (
		<SidebarProvider>
			<AppSidebar />

			<SidebarInset>
				<main
					className="flex flex-1 flex-col gap-4 p-4 pt-0"
					role="main"
					aria-label="Healthcare professional graph and search area"
				>
					<NetworkDetail />
				</main>
			</SidebarInset>
		</SidebarProvider>
	)
}
