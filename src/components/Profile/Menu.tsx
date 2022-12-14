import { useHistory } from 'react-router';
import './Menu.css'

const Menu: React.FC = () => {

    const history = useHistory();

    const routeChange = (path: string) => {
        history.push(path);
    }


    return (
        <div className='menu'>
            <div className='btnMenu selectBtn' onClick={e => routeChange('/profile')}>
                <span className='nameSelect'>Mon compte</span>
            </div>
            <div className='btnMenu' onClick={e => routeChange('/profile/factures')}>
                <span className='name'>Mes factures</span>
            </div>
            <div className='btnMenu' onClick={e => routeChange('/profile/services')}>
                <span className='name'>Mes services</span>
            </div>
            <div className='btnMenu' onClick={e => routeChange('/profile/commandes')}>
                <span className='name'>Mes commandes</span>
            </div>
        </div>
    );
};

export default Menu;    
