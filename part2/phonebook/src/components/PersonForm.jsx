import styles from './PersonForm.module.css'

const PersonForm = ({addPerson, newName, handleNameInput, newNumber, handleNumberInput}) => (
  <form onSubmit={addPerson} className={styles.form}>
    <div className={styles.input_group}>
      <label htmlFor="name" className={styles.label}>name:</label>
      <input id="name" value={newName} onChange={handleNameInput} className={styles.input} />
    </div>
    <div className={styles.input_group}>
      <label htmlFor="number" className={styles.label}>number:</label>
      <input id="number" value={newNumber} onChange={handleNumberInput} className={styles.input} />
    </div>
    <div>
      <button type="submit" className={styles.add_button}>add</button>
    </div>
  </form>
);

export default PersonForm;
