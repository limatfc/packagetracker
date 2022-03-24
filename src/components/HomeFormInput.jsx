import "../styles/components/HomeFormInput.css";

export default function HomeFormInput({
  children,
  valueChangeHandler,
  placeholder,
}) {
  return (
    <div className="input-wrapper">
      <label className="label-wrapper">
        {children}
        <input
          type="number"
          placeholder={placeholder}
          onChange={valueChangeHandler}
        />
      </label>
      <small>
        The {children} field must have {placeholder.replace(/\s/g, "").length}
        characters.
      </small>
    </div>
  );
}
