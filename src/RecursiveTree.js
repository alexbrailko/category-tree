import React from 'react';

const RecursiveTree = ({ tree }) => {
  return (
    <ul>
      {tree.map(node => (
        <li key={node.id}>
          {node.name}
          {node.children.length > 0 && <RecursiveTree tree={node.children} />}
        </li>
      ))}
    </ul>
  );
};

export default RecursiveTree;