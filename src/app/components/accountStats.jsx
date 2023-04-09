import React from "react";
import Icons from "../assets/img/svg/icons";
import budgetApi from "../../api/budgetApi";

const AccountStats = ({ total, format }) => {
  return (
    <div className="stats__item recent-stats">
      <h2 className="recent-stats__label">Счета {Icons().wallet}</h2>
      <div className="recent-stats__content">
        {budgetApi.accounts.slice(-3).map((account) => (
          <div className="recent-stats__row" key={account.id}>
            <div className="recent-stats__category">{account.name}</div>
            <div className="recent-stats__sum">{format(account.balance)}</div>
          </div>
        ))}
      </div>
      <div className="recent-stats__total">
        <div className="recent-stats__total-label">Итого:</div>
        <div className="recent-stats__total-sum">{format(total)}</div>
      </div>
    </div>
  );
};

export default AccountStats;
