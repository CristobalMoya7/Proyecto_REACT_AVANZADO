import { Button } from "./Button";
function FilterTag({ tags, onTagClick }) {
  return (
    <div className="filter-tag">
      <h2>Filter by Tag:</h2>
      {tags.map((tag, index) => (
        <Button key={index} onClick={() => onTagClick(tag)}>
          {tag}
        </Button>
      ))}
    </div>
  );
}

export default FilterTag;
