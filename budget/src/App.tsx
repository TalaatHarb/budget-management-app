import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import TitleHeader from './components/TitleHeader/TitleHeader';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import NewTransactionForm from './components/NewTransactionForm/NewTransactionForm';
import BalanceDisplay from './components/BalanceDisplay/BalanceDisplay';
import InOutSummary from './components/InOutSummary/InOutSummary';

function App() {
  return (
    <Container>
      <TitleHeader title='Budget' />
      <BalanceDisplay />
      <InOutSummary />
      <TransactionHistory />
      <NewTransactionForm />
    </Container>
  );
}

export default App;
