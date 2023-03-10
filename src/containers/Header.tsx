import { DropdownMenu } from 'components';
import { AppMenu } from 'containers';
import { Link } from 'react-router-dom';
import { publicRoute } from 'routes';

const Header = () => {
  return (
    <header className='bg-dark-500 sticky top-0 shadow-md z-50'>
      <div className='container-lg min-h-[64px] flex items-center'>
        <div className='flex-1 flex items-center justify-between gap-10'>
          <Link to={publicRoute.home.path}>
            <img src={require('assets/icons/logo_app.png')} className='h-[40px] hover:scale-105' />
          </Link>
          <div className='flex items-center gap-3 ml-auto'>
            <AppMenu />
          </div>

          <DropdownMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
