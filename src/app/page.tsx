import { AppSidebar } from "@/components/app-sidebar";
import HCPConnectionsMap from "@/components/hcp-connections-map";
import HcpControlPanel from "@/components/hcp-control-panel";
import HCPDetails from "@/components/hcp-details";
import Search from "@/components/search";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
					<HcpControlPanel />
					<Search />
					<section>
						<h2 className="text-lg font-semibold mb-4">PeerSpace</h2>
						<div className="flex flex-col md:flex-row gap-4">
							<HCPDetails />
							<HCPConnectionsMap />
						</div>
					</section>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
