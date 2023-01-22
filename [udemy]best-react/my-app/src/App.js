import Expenses from './components/Expenses/Expenses';

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

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Lets's get started!"),
  //   React.createElement(Expenses, {items: expenses}),
  // );
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
