import React, { useState } from 'react';

const DUMMY_LIST = [
  {
    title: 'first task',
    id: 1,
  },

  {
    title: 'second task',
    id: 2,
  },
  {
    title: 'third task',
    id: 3,
  },
  {
    title: 'fourth task',
    id: 4,
  },
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState('select');
  const handleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const handleListItem = (e) => {
    setTitle(e.target.innerText);
    setIsOpen(false);
  };

  return (
    <div
      className="dropdown-wrapper p-3 w-25 mt-5 mx-auto bg-muted shadow-lg rounded"
      onMouseLeave={handleDropdown}
    >
      <div
        className="bg-light px-2"
        onMouseEnter={handleDropdown}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <h4 className="dropdown-title py-2 pointer">{title}</h4>

        <div>
          {!isOpen ? (
            <img
              alt="down"
              src="https://img.icons8.com/material-outlined/24/undefined/down--v1.png"
            />
          ) : (
            <img src="https://img.icons8.com/material-outlined/24/undefined/up.png" alt="up" />
          )}
        </div>
      </div>
      {isOpen && (
        <div>
          <ul style={{ listStyle: 'none', padding: '10px' }}>
            {DUMMY_LIST.map((item) => (
              <li onClick={handleListItem} key={item.id} style={{ cursor: 'pointer' }}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
