import { FetchMeal } from './components';

const Home = () => {
  return (
    <>
      <div className='container-xl'>
        <div className='flex'>
          <div
            className='h-[320px] w-[540px]'
            style={{ background: `url(${require('assets/images/meal_d_01.jpg')}) no-repeat center / cover` }}
          />
          <div className='flex-1 bg-dark-600'></div>
        </div>
      </div>

      <FetchMeal />
    </>
  );
};

export default Home;
