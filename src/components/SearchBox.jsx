import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </label>
  );
};

export default SearchBox;
