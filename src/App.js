import React, { useState } from 'react';
import RecursiveTree from './RecursiveTree';
import IterativeTree from './IterativeTree';
import AddNodeForm from './AddNodeForm';
import './App.css';

const initialTree = [
  {
    id: 1,
    name: 'Lorem',
    children: [
      { id: 2, name: 'Ipsum', children: [] },
      { id: 3, name: 'Dolor', children: [
        { id: 4, name: 'Orci', children: [
          { id: 5, name: 'Quis', children: [
            { id: 6, name: 'Odio', children: [] },  
          ] },
        ] },
      ] },
      { id: 7, name: 'Sit', children: [
        { id: 8, name: 'Amet', children: [] },
        { id: 9, name: 'Consectetur', children: [] },
      ] },
      { id: 10, name: 'Adipiscing', children: [
        { id: 11, name: 'Elit', children: [
          { id: 12, name: 'Vestibulum', children: [] },
          { id: 13, name: 'Vitae', children: [] },
        ] },
      ] },
    ],
  },
];


function App() {
  const [tree, setTree] = useState(initialTree);
  const [renderMode, setRenderMode] = useState('recursive');

  const addNode = (parentId, newNodeName) => {
    const newNode = { id: Date.now(), name: newNodeName, children: [] };
    const updatedTree = addNodeToTree(tree, parentId, newNode);

    setTree(updatedTree);
  };

  const addNodeToTree = (nodes, parentId, newNode) => {
    return nodes.map(node => {
      if (node.id === parentId) {
        return { ...node, children: [...node.children, newNode] };
      }
      if (node.children.length > 0) {
        return { ...node, children: addNodeToTree(node.children, parentId, newNode) };
      }
      return node;
    });
  };

  return (
    <div className="App">
      <h1>Category Tree</h1>
      <div>
        <button onClick={() => setRenderMode('recursive')}>Recursive</button>
        <button onClick={() => setRenderMode('iterative')}>Iterative</button>
      </div>
      {renderMode === 'recursive' ? (
        <RecursiveTree tree={tree} />
      ) : (
        <IterativeTree tree={tree} />
      )}
      <AddNodeForm addNode={addNode} />
    </div>
  );
}

export default App;