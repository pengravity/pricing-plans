import { useEffect, useState } from 'react';

import './SubList.css';
import Sub from './Sub';

const SubList = () => {
  const [basic, setBasic] = useState(10);
  const [pro, setPro] = useState(20);
  const [master, setMaster] = useState(30);

  const [yearly, setYearly] = useState(false);

  const handleClick = () => {
    setYearly(!yearly);
  };

  // discount 0.3 means 30%
  const calcYearly = (pricePerMonth, discount) => {
    return pricePerMonth * 12 * (1 - discount);
  };

  useEffect(() => {
    if (yearly) {
      setBasic(Math.round(calcYearly(basic, 0.3)));
      setPro(Math.round(calcYearly(pro, 0.3)));
      setMaster(Math.round(calcYearly(master, 0.3)));
    } else {
      setBasic(10);
      setPro(20);
      setMaster(30);
    }
  }, [yearly]);

  return (
    <section className='main'>
      <div className='container --center-all '>
        <div className='title'>
          <h2>Pricing</h2>
          <div className='--line'></div>

          <div className='--flex-center --my2'>
            <p>Monthly</p>
            <div className='--mx2'>
              <span
                className={yearly ? 'toggle-btn toggled' : 'toggle-btn'}
                onClick={handleClick}
              >
                <div className={yearly ? 'ball move' : 'ball'}></div>
              </span>
            </div>
            <p>Yearly</p>
          </div>
        </div>

        <div className='sub-plans'>
          <Sub
            plan={'Basic'}
            theme={'theme1'}
            price={basic}
            isBasic={true}
            yearly={yearly}
          />
          <Sub
            plan={'Pro'}
            theme={'theme2'}
            price={pro}
            isPro={true}
            yearly={yearly}
          />
          <Sub
            plan={'Master'}
            theme={'theme3'}
            price={master}
            isMaster={true}
            yearly={yearly}
          />
        </div>
      </div>
    </section>
  );
};

export default SubList;
