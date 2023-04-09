import React from "react";
import Icons from "../assets/img/svg/icons";

const PeriodStats = () => {
  return (
    <div className="stats__detailed period-stats">
      <div className="period-stats__header">
        <div>
          <button className="period-stats__tab">Доходы</button>
          <button className="period-stats__tab">Расходы</button>
        </div>
        <div className="period-stats__settings">
          <select className="period-stats__period">
            <option id="month">Месяц</option>
            <option id="week">Неделя</option>
            <option id="year">Год</option>
            <option id="custom">Другое...</option>
          </select>
          {Icons().plus}
        </div>
      </div>

      <div className="period-stats__content">
        <div className="period-stats__diagram"></div>
        <div className="period-stats__period-info period-info">
          <h2 className="period-info__title">Прошлый период:</h2>
          <ul className="period-info__list">
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
          </ul>
        </div>
        <div className="period-stats__period-info period-info">
          <h2 className="period-info__title">Текущий период:</h2>
          <ul className="period-info__list">
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
            <li className="period-info__item">30,000</li>
          </ul>
        </div>
        <div className="period-stats__total">+5,000 ₽/ +2,34 %</div>
      </div>
    </div>
  );
};

export default PeriodStats;
