const List = ({ items = [], resourceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <>
          <ItemComponent key={i} {...{ [resourceName]: item }} />
          <div style={{ borderBottom: "1px solid grey" }}></div>
        </>
      ))}
    </>
  );
};

export default List;
