import { useState } from 'react';

import './SubList.css';
import Sub from './Sub';

const SubList = () => {
  const [basic, setBasic] = useState(10);
  const [pro, setPro] = useState(20);
  const [master, setMaster] = useState(30);

  return (
    <section className='main'>
      <div className='container --center-all '>
        <div className='title'>
          <h2>Pricing</h2>
          <div className='--line'></div>

          <div className='--flex-center --my2'>
            <p>Monthly</p>
            <div className='--mx2'>
              <span className='toggle-btn'>
                <div className='ball'></div>
              </span>
            </div>
            <p>Yearly</p>
          </div>
        </div>

        <div className='sub-plans'>
          <Sub plan={'Basic'} theme={'theme1'} price={basic} isBasic={true} />
          <Sub plan={'Pro'} theme={'theme2'} price={pro} isPro={true} />
          <Sub
            plan={'Master'}
            theme={'theme3'}
            price={master}
            isMaster={true}
          />
        </div>
      </div>
    </section>
  );
};

export default SubList;
