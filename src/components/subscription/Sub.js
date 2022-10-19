import './Sub.css';

const Sub = ({ plan, theme, price, isBasic, isPro, isMaster }) => {
  return (
    <div className='price-box --card'>
      <div className={`box --p2 ${theme}`}>
        <p className='--text-light'>{plan}</p>
        <h4 className='--text-light'>
          <span>$</span>
          <span className='basic'>{price}</span>
        </h4>
        {isPro && <p className='--text-light'>Everything in Basic, plus</p>}
        {isMaster && <p className='--text-light'>Everything in Pro, plus</p>}
      </div>
      <div className='features'>
        <ul>
          {isBasic && <li>Unlimited Pages</li>}
          {isBasic && <li>Unlimited Bandwith</li>}
          {isBasic && <li>500GB Storage</li>}

          {isPro && <li>10 Backups</li>}
          {isPro && <li>Email Support</li>}
          {isPro && <li>GitHub Tool</li>}

          {isMaster && <li>20 Backups</li>}
          {isMaster && <li>Push Notifications</li>}
          {isMaster && <li>Priority Support</li>}
        </ul>
        <button className={`btn ${theme}`}>Buy Now</button>
      </div>
    </div>
  );
};

export default Sub;
