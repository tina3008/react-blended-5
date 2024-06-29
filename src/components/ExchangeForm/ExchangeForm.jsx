import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
<<<<<<< Updated upstream

export const ExchangeForm = () => {
=======
import { fetchExchangeCurrency } from 'reduxState/operations';
import { useDispatch } from 'react-redux';

export const ExchangeForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const [amount, from, , to] = e.target.elements.currency.value.split(' ');
    dispatch(fetchExchangeCurrency({ amount, from, to }));
  };

>>>>>>> Stashed changes
  return (
    <form className={styles.form}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input title="Request format 15 USD in UAH" className={styles.input} />
    </form>
  );
};
