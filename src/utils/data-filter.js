export default function dataFilter(apiReturnedArray, filterKey, filterValue) {
  const arrayToReturn = [...apiReturnedArray];

  if (filterKey && !filterValue) {
    return arrayToReturn.filter((datum) => {
      return datum.hasOwnProperty(filterKey);
    });
  } else if (!filterKey && filterValue) {
    return arrayToReturn.filter((object) => {
      return Object.values(object).includes(filterValue);
    });
  } else if (filterKey && filterValue) {
    return arrayToReturn.filter((object) => {
      return (
        Object.values(object).includes(filterValue) &&
        Object.hasOwnProperty(filterKey)
      );
    });
  } else {
    return arrayToReturn;
  }
}
