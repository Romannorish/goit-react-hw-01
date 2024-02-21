import css from './TransactionHistory.module.css'

export default function TransactionHistory ({items}) {
  return (
    <div className={css.tableContainer}>
     <table>
  <thead className={css.table}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
{items.map(({id,type,amount,currency})=> (
    <tbody key={id}>
    <tr >
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody>
))}
  
</table>
    </div>
  )
}

