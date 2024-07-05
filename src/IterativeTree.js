import React from 'react';

const IterativeTree = ({ tree }) => {
  const renderTree = (nodes) => {
    const stack = [...nodes].reverse();
    
    const result = [];

    while (stack.length > 0) {
      const node = stack.pop();
      result.push(
        <li key={node.id}>
          {node.name}
          {node.children.length > 0 && (
            <ul>
              {renderTree(node.children)}
            </ul>
          )}
        </li>
      );
    }

    return result;
  };

  return <ul>{renderTree(tree)}</ul>;
};

export default IterativeTree;