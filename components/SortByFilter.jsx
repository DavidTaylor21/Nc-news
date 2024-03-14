function SortByFilter({ setOrder, setSortBy, sortBy, order }) {
  function handleChangeSortBy(event) {
    setSortBy(event.target.value);
  }
  function handleChangeOrder(event) {
    setOrder(event.target.value);
  }

  return (
    <>
      <section className="sortby-filter">
        <label htmlFor="sortBy">Sort by: </label>
        <select name="sortBy" value={sortBy} onChange={handleChangeSortBy}>
          <option value="">-- Please Select --</option>
          <option value="comment_count">Comment count</option>
          <option value="created_at">Date posted</option>
          <option value="votes">Votes</option>
        </select>
      </section>
      <section className="orderby-filter">
        <label htmlFor="order">Order by: </label>
        <select name="order" value={order} onChange={handleChangeOrder}>
          <option value="">-- Please Select --</option>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </section>
    </>
  );
}
export default SortByFilter;
