import React from "react";
import Icons from "../../assets/img/svg/icons";

const AccountStats = ({ format, data }) => {
  const getTotalBalance = () => {
    return data.reduce((total, account) => (total += account.balance), 0);
  };

  return (
    <div className="stats__item recent-stats">
      <h2 className="recent-stats__label">Счета {Icons().wallet}</h2>

      {data ? (
        <div className="recent-stats__content">
          {data.slice(-3).map((account) => (
            <div className="recent-stats__row" key={account.id}>
              <div className="recent-stats__category">{account.name}</div>
              <div></div>
              <div className="recent-stats__sum">{format(account.balance)}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="recent-stats__content">Загрузка...</div>
      )}

      <div className="recent-stats__total">
        <div className="recent-stats__total-label">Итого:</div>
        <div className="recent-stats__total-sum">
          {data ? format(getTotalBalance()) : "Загрузка..."}
        </div>
      </div>
    </div>
  );
};

export default AccountStats;
