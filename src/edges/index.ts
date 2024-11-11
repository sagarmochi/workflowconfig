import type { Edge, EdgeTypes } from '@xyflow/react';

export const initialEdges: Edge[] = [
  { id: 'a->b', source: 'a', target: 'b'},
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
