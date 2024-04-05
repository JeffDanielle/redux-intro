import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {

  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);

// Modern way of fetching the state in redux
// function BalanceDisplay() {
//   const { balance: currentBalance } = useSelector((state) => state.account);

//   return <div className="balance">{formatCurrency(currentBalance)}</div>;
// }

// export default BalanceDisplay;
