import React from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

export default function Search() {
	return (
		<div className="relative">
			<SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
			<Input
				type="text"
				placeholder="Search"
				className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 "
			/>
		</div>
	);
}
