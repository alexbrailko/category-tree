import React, { useState } from 'react';

const AddNodeForm = ({ addNode }) => {
  const [parentId, setParentId] = useState('');
  const [newNodeName, setNewNodeName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parentId && newNodeName) {
      addNode(parseInt(parentId), newNodeName);
      setParentId('');
      setNewNodeName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={parentId}
        onChange={(e) => setParentId(e.target.value)}
        placeholder="Parent ID"
        data-testid="parentIdInput"
        required
      />
      <input
        type="text"
        value={newNodeName}
        onChange={(e) => setNewNodeName(e.target.value)}
        placeholder="New Node Name"
        data-testid="newNodeInput"
        required
      />
      <button type="submit" data-testid="addNode">Add Node</button>
    </form>
  );
};

export default AddNodeForm;