/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var withdraw = new Transaction('withdrawal', amount);
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(withdraw);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;
  var deposit = 0;
  var withdrawal = 0;
  if (this.transactions.length === 0) {
    return 0;
  }
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposit += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      withdrawal += this.transactions[i].amount;
    }
  }
  balance = deposit - withdrawal;
  return balance;
};
