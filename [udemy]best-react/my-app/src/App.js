import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
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

  const addExpenseHandler = (expense) => {
    console.log('in app.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
