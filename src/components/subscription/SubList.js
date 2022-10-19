import { useState } from 'react';

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
            price={yearly ? Math.round(basic * 12 * 0.7) : basic}
            isBasic={true}
            yearly={yearly}
          />
          <Sub
            plan={'Pro'}
            theme={'theme2'}
            price={yearly ? Math.round(pro * 12 * 0.7) : pro}
            isPro={true}
            yearly={yearly}
          />
          <Sub
            plan={'Master'}
            theme={'theme3'}
            price={yearly ? Math.round(master * 12 * 0.7) : master}
            isMaster={true}
            yearly={yearly}
          />
        </div>
      </div>
    </section>
  );
};

export default SubList;
