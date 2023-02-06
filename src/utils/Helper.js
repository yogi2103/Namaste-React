export function filterData(searchInput, restaurants) {
    const filtereddata = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchInput)
    );
    return filtereddata;
  }  