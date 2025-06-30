"use client"

import { memo } from "react"
import { type EdgeProps, getBezierPath } from "reactflow"

interface ConnectionEdgeData {
  type: string
  description: string
  strength: string
  source: string
  target: string
}

function ConnectionEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}: EdgeProps<ConnectionEdgeData>) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })

  const getEdgeColor = (type: string) => {
    switch (type) {
      case "Co-authorship":
        return "#3b82f6"
      case "Workplace":
        return "#10b981"
      case "Education":
        return "#f59e0b"
      case "Research":
        return "#8b5cf6"
      default:
        return "#6b7280"
    }
  }

  const getStrokeWidth = (strength: string) => {
    switch (strength) {
      case "Strong":
        return 3
      case "Medium":
        return 2
      case "Weak":
        return 1
      default:
        return 2
    }
  }

  return (
    <>
      <path
        id={id}
        className="react-flow__edge-path hover:stroke-4 transition-all duration-200 cursor-pointer"
        d={edgePath}
        stroke={getEdgeColor(data?.type || "")}
        strokeWidth={getStrokeWidth(data?.strength || "")}
        fill="none"
        markerEnd="url(#react-flow__arrowclosed)"
      />

      {/* Edge Label */}
      <foreignObject
        width={120}
        height={30}
        x={labelX - 60}
        y={labelY - 15}
        className="overflow-visible"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <div className="flex items-center justify-center">
          <div className="bg-white px-2 py-1 rounded-full border text-xs font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            {data?.type || "Connection"}
          </div>
        </div>
      </foreignObject>
    </>
  )
}

export default memo(ConnectionEdge)
