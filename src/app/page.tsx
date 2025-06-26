import { AppSidebar } from "@/components/app-sidebar";
import HcpControlPanel from "@/components/hcp-control-panel";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
					<HcpControlPanel />
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
