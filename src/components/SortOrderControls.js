import { React, useSearchParams } from "react";
import getSortOrderParams from "../utils/get-sort-order-params";

export default function SortOrderControls() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortAndOrder = (event) => {
    event.preventDefault();
    let params = getSortOrderParams(event.target);
  };

  return (<form>
    <label name="sort_by">
        sort_by:
    </label>
    <select value={}></select>
  </form>);
}
