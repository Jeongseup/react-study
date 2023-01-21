import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Cat insurance1',
      amount: 10.11,
      date: new Date(2023, 1, 22),
    },
    {
      id: 'e2',
      title: 'Cat insurance2',
      amount: 20.11,
      date: new Date(2023, 1, 22),
    },
    {
      id: 'e3',
      title: 'Cat insurance3',
      amount: 30.13,
      date: new Date(2023, 1, 22),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is test </p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
