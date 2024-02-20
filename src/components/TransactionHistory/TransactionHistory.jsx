import css from './TransactionHistory.module.css'

export default function TransactionHistory ({items}) {
  return (
    <div className={css.tableContainer}>
     <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
{items.map(({id,type,amount,currency})=> (
    <tbody key={id} className={css.tr}>
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

