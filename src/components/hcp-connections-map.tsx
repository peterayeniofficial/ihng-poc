/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useEffect, useCallback, useState } from "react"
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  ReactFlowProvider,
  useReactFlow,
  type NodeTypes,
  type EdgeTypes,
} from "reactflow"
import "reactflow/dist/style.css"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import HCPNode from "@/components/hcp-map/hcp-node"
import ConnectionEdge from "@/components/hcp-map/connection-edge"
import { mockHCPData, createNetworkData } from "../data/mock-data"
import type { HCP } from "../types/hcp"

const nodeTypes: NodeTypes = { hcp: HCPNode }
const edgeTypes: EdgeTypes = { connection: ConnectionEdge }

interface HCPConnectionsMapProps {
  focusedHCPId: string | null
  onSelectHCP: (hcp: HCP) => void
}

function NetworkGraph({ focusedHCPId, onSelectHCP }: HCPConnectionsMapProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const { fitView, getNode } = useReactFlow()

  // Tooltip state
interface ConnectionData {
  source: string
  target: string
  description: string
  type: string
  strength: string
}

const [hoveredConnection, setHoveredConnection] = useState<ConnectionData | null>(null)
const [hoveredHCP, setHoveredHCP] = useState<HCP | null>(null)


  // Load all nodes/edges on mount
 useEffect(() => {
  const centerId = focusedHCPId || (mockHCPData.length > 0 ? mockHCPData[0].id : "")
  const { nodes: allNodes, edges: allEdges } = createNetworkData(centerId, {
    onHover: (hcp) => setHoveredHCP(hcp),
    onUnhover: () => setHoveredHCP(null),
  })
  setNodes(allNodes)
  setEdges(allEdges)
}, [setNodes, setEdges, focusedHCPId])

  // Focus node when focusedHCPId changes
  useEffect(() => {
    if (focusedHCPId) {
      const node = getNode(focusedHCPId)
      if (node) {
        setTimeout(() => {
          fitView({ nodes: [node], padding: 0.5, duration: 800 })
        }, 100)
      }
    }
  }, [focusedHCPId, getNode, fitView])

  const handleNodeClick = useCallback(
    (nodeId: string) => {
      const hcp = mockHCPData.find((h) => h.id === nodeId)
      if (hcp) {
        onSelectHCP(hcp)
      }
    },
    [onSelectHCP]
  )

  const handleEdgeHover = useCallback((edgeId: string | null, connectionData?: ConnectionData | null) => {
    setHoveredConnection(connectionData || null)
  }, [])

  return (
    <div className="w-full h-screen relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodeClick={(_, node) => handleNodeClick(node.id)}
        fitView
        attributionPosition="bottom-left"
      >
        <Background />
        <Controls />
      </ReactFlow>

	  {hoveredHCP && (
  <div className="absolute top-4 left-4 z-20">
    <Card className="w-80">
      <CardHeader>
        <CardTitle className="text-base">{hoveredHCP.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <p className="text-sm text-muted-foreground">{hoveredHCP.title}</p>
        <p className="text-xs">Experience: {hoveredHCP.yearsOfExperience} years</p>
        <div className="flex flex-wrap gap-1">
          {hoveredHCP.specialties.map((s, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {s}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
)}

      {hoveredConnection && (
        <div className="absolute top-4 right-4 z-20">
          <Card className="w-80">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Connection Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">
                <strong>{hoveredConnection.source}</strong> ↔ <strong>{hoveredConnection.target}</strong>
              </p>
              <p className="text-sm">{hoveredConnection.description}</p>
              <div className="flex gap-1 mt-2">
                <Badge variant="secondary" className="text-xs">
                  {hoveredConnection.type}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {hoveredConnection.strength}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default function HCPConnectionsMapWrapper(props: HCPConnectionsMapProps) {
  return (
    <ReactFlowProvider>
      <NetworkGraph {...props} />
    </ReactFlowProvider>
  )
}
