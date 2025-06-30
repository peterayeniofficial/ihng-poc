"use client"

import { memo } from "react"
import { Handle, Position, type NodeProps } from "reactflow"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User } from "lucide-react"

interface HCPNodeData {
  name: string
  title: string
  specialties: string[]
  isCenter?: boolean
}

function HCPNode({ data, selected }: NodeProps<HCPNodeData>) {
  const { name, title, specialties, isCenter } = data

  return (
    <>
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
      <Handle type="target" position={Position.Left} className="opacity-0" />
      <Handle type="source" position={Position.Right} className="opacity-0" />

      <Card
        className={`
          min-w-[200px] cursor-pointer transition-all duration-200 hover:shadow-lg
          ${isCenter ? "ring-2 ring-blue-500 shadow-lg scale-110" : ""}
          ${selected ? "ring-2 ring-blue-300" : ""}
        `}
      >
        <div className="p-3">
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`
              w-8 h-8 rounded-full flex items-center justify-center
              ${isCenter ? "bg-blue-600" : "bg-gray-100"}
            `}
            >
              <User className={`w-4 h-4 ${isCenter ? "text-white" : "text-gray-600"}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`font-medium text-sm truncate ${isCenter ? "text-blue-900" : ""}`}>{name}</p>
              <p className="text-xs text-gray-600 truncate">{title}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {specialties.slice(0, 2).map((specialty, index) => (
              <Badge key={index} variant={isCenter ? "default" : "secondary"} className="text-xs">
                {specialty}
              </Badge>
            ))}
            {specialties.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{specialties.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </Card>
    </>
  )
}

export default memo(HCPNode)
