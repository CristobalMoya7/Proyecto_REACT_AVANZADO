import clsx from "clsx";

const CheckBox = ({ className, label, ...props }) => {
  return (
    <div className={clsx("checkBox", className)}>
      <label className="checkBox-label">
        <span>Venta o compra</span>
        <input className="checkBox-input" type="checkbox" {...props} />

        <span>{label}</span>
      </label>
    </div>
  );
};

export default CheckBox;
