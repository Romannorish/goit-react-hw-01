import PropTypes from "prop-types";

import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <div className={css.transactionHistory}>
      <table>
        <thead>
          <tr>
            <th className={css.transacTh}>Type</th>
            <th className={css.transacTh}>Amount</th>
            <th className={css.transacTh}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={css.transacTd}>{type}</td>
              <td className={css.transacTd}>{amount}</td>
              <td className={css.transacTd}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
