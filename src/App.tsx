/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { initialNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import { Editor } from "@monaco-editor/react";


const sampleJson: any = {
  "name": "NewWorkflow_nni4v",
  "description": "",
  "version": 1,
  "tasks": [
    {
      "name": "event",
      "taskReferenceName": "event_ref",
      "type": "EVENT",
      "sink": "sqs:internal_event_name",
      "inputParameters": {}
    },
    {
      "name": "http",
      "taskReferenceName": "http_ref",
      "type": "HTTP",
      "inputParameters": {
        "uri": "https://orkes-api-tester.orkesconductor.com/api",
        "method": "GET",
        "accept": "application/json",
        "contentType": "application/json",
        "encode": true
      }
    }
  ],
  "inputParameters": [],
  "outputParameters": {},
  "schemaVersion": 2,
  "restartable": true,
  "workflowStatusListenerEnabled": false,
  "ownerEmail": "sagar.mochi@bharatpe.com",
  "timeoutPolicy": "ALERT_ONLY",
  "timeoutSeconds": 0,
  "failureWorkflow": ""
}

const updatedJson = `const data = ${JSON.stringify(sampleJson)}`

export default function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  return (
    <div style={{width : '100%', height : '100%', display : 'flex'}}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
      <Editor height="90vh" width="50%" options={{wordWrap : 'on',autoIndent : 'full'}} defaultLanguage="javascript" defaultValue={updatedJson}  />
    </div>
  );
}
