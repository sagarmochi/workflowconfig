import type { NodeTypes } from "@xyflow/react";

import { PositionLoggerNode } from "./PositionLoggerNode";
import { AppNode } from "./types";

export const initialNodes: AppNode[] = [
  {
    id: "a",
    type: "input",
    position: { x: 0, y: 0 },
    data: { label: "Start"  },
    style: {
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      border: "2px solid #72A4B4",
      fontSize : '8px'
    },
  },
  {
    id: "b",
    position: { x: 0, y: 100 },
    data: { label: "End", },
    style: {
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      fontSize : '8px',
      border: "2px solid #72A4B4",
    },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
