import React from 'react';

const TechItem = ({ tech, onDelete }) => {
  return (
    <li>
      {tech}
      <button type="button" onClick={onDelete}>
        Remover
      </button>
    </li>
  );
};

export default TechItem;
