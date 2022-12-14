import './Menu.css'

const Menu: React.FC = () => {

    function goProfile() {
        window.location.href = '/profile';
    }

    function goFactures() {
        window.location.href = '/profile/factures';
    }

    function goServices() {
        window.location.href = '/profile/services';
    }

    function goCommandes() {
        window.location.href = '/profile/commandes';
    }

    return (
        <div className='menu'>
            <div className='btnMenu selectBtn' onClick={goProfile}>
                <span className='nameSelect'>Mon compte</span>
            </div>
            <div className='btnMenu' onClick={goFactures}>
                <span className='name'>Mes factures</span>
            </div>
            <div className='btnMenu' onClick={goServices}>
                <span className='name'>Mes services</span>
            </div>
            <div className='btnMenu' onClick={goCommandes}>
                <span className='name'>Mes commandes</span>
            </div>

        </div>
    );
};

export default Menu;    
