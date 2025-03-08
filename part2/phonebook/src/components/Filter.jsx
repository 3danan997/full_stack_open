import styles from "./Filter.module.css";
const Filter = ({ filterByName, handleFilterInput }) => (
  <div className={styles.filter}>
    <label htmlFor="" className={styles.label}>Search by name:</label>
    <input value={filterByName} onChange={handleFilterInput} className={styles.input} />
  </div>
);

export default Filter;
