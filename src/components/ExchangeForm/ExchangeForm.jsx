import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { exchangeCurrency } from 'service/exchangeAPI';

export const ExchangeForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const [amount, from, , to] = e.target.elements.currency.value.split(' ');
    exchangeCurrency({ amount, from, to });
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
