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
    <div className="relative w-full" role="search" aria-label="Search form">
      {/* Visually hidden label for screen readers */}
      <label htmlFor="search-input" className="sr-only">
        {placeholder}
      </label>

      {/* Search Icon */}
      <SearchIcon
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
        aria-hidden="true"
      />

      {/* Search Input */}
      <Input
        id="search-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2"
        aria-label={placeholder}
        aria-describedby="search-description"
      />

      {/* Clear Button */}
      {value && onClear && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          aria-label="Clear search input"
        >
          <X className="w-3 h-3 text-gray-500" aria-hidden="true" />
        </Button>
      )}

      {/* Optional helper text (hidden but useful for a11y) */}
      <span id="search-description" className="sr-only">
        Press Enter to search. Press clear button to reset input.
      </span>
    </div>
  )
}
