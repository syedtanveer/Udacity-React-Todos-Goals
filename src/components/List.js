import React from 'react';

const List = (props) => {
  return (
    <ul className="list-group">
      {Array.isArray(props.items) && props.items.map((item) => (
        <li className='list-group-item' key={item.id}>
          <span
            onClick={() => props.toggle && props.toggle(item.id)}
            style={{ textDecoration: item.complete ? 'line-through' : 'none' }}>
            {item.name}
          </span>
          <button type="button" className='close' onClick={() => props.remove(item)}>
            <span aria-label="remove" role="img">&#10060;</span>
          </button>
        </li>
      ))}
    </ul>
  )
}
export default List;