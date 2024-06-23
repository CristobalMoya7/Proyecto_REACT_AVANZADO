import clsx from "clsx";
import "./SelectList.css";

const SelectList = ({ className, label, optionsArray, value, onChange }) => {
  return (
    <div className={clsx("select-option", className)}>
      <label className="selectList-label">{label}</label>
      {optionsArray.map((item, index) => (
        <div key={index} className="checkbox-item">
          <input
            type="checkbox"
            value={item}
            checked={value.includes(item)}
            onChange={(event) => onChange(event, item)}
          />
          <label>{item}</label>
        </div>
      ))}
    </div>
  );
};

export default SelectList;
