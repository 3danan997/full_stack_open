import { Fragment } from "react";
import styles from "./Persons.module.css";

const Persons = ({ persons, handleDeletePerson }) =>
  persons.length > 0 ? (
    <table className={styles.table}>
      <tbody>
        {persons.map((person) => (
          <Fragment key={person.id}>
            <tr>
              <td style={{paddingRight:'50px'}}>{person.name}</td>
              <td style={{paddingRight:'50px'}}>{person.number}</td>
              <td><button onClick={() => handleDeletePerson(person.id)} className={styles.delete_button}>delete</button></td>
            </tr>
          </Fragment>
        ))}
      </tbody>
    </table>
  ) : (
    <div> no match found </div>
  );

export default Persons;
