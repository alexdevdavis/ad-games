import { React } from "react";

export default function SortOrderControls({ sort, setSort, order, setOrder }) {
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <form className="sort-order-controls">
      <label>
        sort by:
        <select
          className="sort-order-controls__select"
          value={sort}
          onChange={handleSortChange}
        >
          <option
            className="sort-order-controls__select--option"
            value="created_at"
          >
            date
          </option>
          <option
            className="sort-order-controls__select--option"
            value="comment_count"
          >
            comments
          </option>
          <option className="sort-order-controls__select--option" value="votes">
            votes
          </option>
        </select>
      </label>
      <label>
        in
        <select
          className="sort-order-controls__select"
          value={order}
          onChange={handleOrderChange}
        >
          <option className="sort-order-controls__select--option" value="DESC">
            descending
          </option>
          <option className="sort-order-controls__select--option" value="ASC">
            ascending
          </option>
        </select>
        order
      </label>
    </form>
  );
}
