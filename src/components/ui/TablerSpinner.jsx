import React from 'react';

function TablerSpinner({ size = 'md', color = 'primary', ...rest }) {
  let className = 'spinner-border';

  if (size === 'sm') {
    className += ' spinner-border-sm';
  }

  if (color) {
    className += ` text-${color}`;
  }

  return (
    <span className={className} role="status" {...rest}>
      <span className="visually-hidden">Loading...</span>
    </span>
  );
}

export default TablerSpinner;
