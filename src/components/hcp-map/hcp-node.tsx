"use client";

import { Handle, NodeProps, Position } from "reactflow";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HCPNode({ data }: NodeProps) {
	return (
		<div
			className={cn(
				"w-12 h-12 rounded-full bg-blue-100 border border-blue-400 flex items-center justify-center shadow-md cursor-pointer relative",
				data.isCenter ? "bg-blue-600 text-white" : "",
			)}
			onMouseEnter={data.onHover}
			onMouseLeave={data.onUnhover}
		>
			<User className="w-6 h-6" />
			{/* Handles are optional if you're using edges with arrows */}
			<Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
			<Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
		</div>
	);
}
