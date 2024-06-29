import { RiExchangeDollarFill } from 'react-icons/ri';
import { fetchExchangeCurrency } from 'reduxState/operations';
import { useDispatch } from 'react-redux';
import styles from './ExchangeForm.module.css';


export const ExchangeForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const [amount, from, , to] = e.target.elements.currency.value.split(' ');
    dispatch(fetchExchangeCurrency({ amount, from, to }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        title="Request format 15 USD in UAH"
        className={styles.input}
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        placeholder="15 USD in UAH"
        name="currency"
        required
      />
    </form>
  );
};
