import { React } from "react";

export default function SortOrderControls({ sort, setSort, order, setOrder }) {
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <form>
      <label>
        sort by:
        <select value={sort} onChange={handleSortChange}>
          <option value="created_at">date</option>
          <option value="comment_count">comments</option>
          <option value="votes">votes</option>
        </select>
      </label>
      <label>
        in
        <select value={order} onChange={handleOrderChange}>
          <option value="DESC">descending</option>
          <option value="ASC">ascending</option>
        </select>
        order
      </label>
    </form>
  );
}
