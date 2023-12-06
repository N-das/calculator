import styles from "./App.module.css";
const display = ({ displayValue }) => {
  return (
    <input
      type="text"
      className={styles.display}
      value={displayValue}
      placeholder="0"
      readOnly
    />
  );
};
export default display;
