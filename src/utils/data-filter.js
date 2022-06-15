export default function dataFilter(apiReturnedArray, filterKey, filterValue) {
  const arrayToReturn = [...apiReturnedArray];

  if (filterKey) {
    return arrayToReturn.filter((datum) => {
      return datum.hasOwnProperty(filterKey);
    });
  }
  if (!filterKey && filterValue) {
    return arrayToReturn.filter((object) => {
      return Object.values(object).includes(filterValue);
    });
  }
  return arrayToReturn;
}
