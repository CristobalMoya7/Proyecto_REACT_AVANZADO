import clsx from "clsx";

function FilterName({ className, placeholder, ...props }) {
  return (
    <div className={clsx("Filter-name", className)}>
      <label className="Filter-name-label">
        <input
          className="Filter-name-input"
          type="text"
          placeholder="Busca"
          {...props}
        ></input>
      </label>
    </div>
  );
}

export default FilterName;
