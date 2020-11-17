import React from 'react'

const Filter = ({value, set}) => {
    return (
      <div>
        filter shown with <input value={value} onChange={e => set(e.target.value)} />
      </div>
    );
};

export default Filter;