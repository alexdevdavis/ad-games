export default function dataFilter(apiReturnedArray, filterKey, filterValue) {
  const arrayToReturn = [...apiReturnedArray];

  if (filterKey && !filterValue) {
    return arrayToReturn.filter((datum) => {
      return datum.hasOwnProperty(filterKey);
    });
  } else if (!filterKey && filterValue) {
    return arrayToReturn.filter((datum) => {
      return Object.values(datum).includes(filterValue);
    });
  } else if (filterKey && filterValue) {
    return arrayToReturn.filter((datum) => {
      return (
        Object.values(datum).includes(filterValue) &&
        datum.hasOwnProperty(filterKey)
      );
    });
  } else {
    return arrayToReturn;
  }
}
