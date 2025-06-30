'use client'
import React from "react"
import { Search as SearchIcon, X } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

interface SearchProps {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
  onClear?: () => void
  placeholder?: string
}

export default function Search({
  value,
  onChange,
  onSearch,
  onClear,
  placeholder = "Search"
}: SearchProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch()
    }
  }

  return (
    <div className="relative w-full">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2"
      />
      {value && onClear && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
        >
          <X className="w-3 h-3 text-gray-500" />
        </Button>
      )}
    </div>
  )
}
