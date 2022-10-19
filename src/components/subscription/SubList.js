import './SubList.css';
import Sub from './Sub';

const SubList = () => {
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
          <Sub plan={'Basic'} theme={'theme1'} price={'10'} />
          <Sub plan={'Pro'} theme={'theme2'} price={'20'} />
          <Sub plan={'Master'} theme={'theme3'} price={'30'} />
        </div>
      </div>
    </section>
  );
};

export default SubList;
