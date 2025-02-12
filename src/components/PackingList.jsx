import React, {useState} from 'react';
import Item from './Item';

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
    const [sortBy, setSortBy] = useState("packed");
    let sortedItem;
    if (sortBy === "input") sortedItem = items;
    
    if (sortBy === "description") sortedItem = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    
    if(sortBy === "packed") sortedItem = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  
    return (
  
      <div className="list">
        <ul>
          {sortedItem.map((item) => (<Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="input">Sort by Input Order</option>
            <option value="description">Sort by Description</option>
            <option value="packed">Sort by Packed Status</option>
          </select>
          <button onClick={onClearList}>Clear List</button>
        </div>
      </div>
  
    )
}

export default PackingList