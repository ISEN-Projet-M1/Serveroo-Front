import {
    IonContent,
    useIonViewDidEnter,
    useIonViewWillEnter,
    useIonViewWillLeave,
    IonList,
    IonItem,
    IonLabel
} from '@ionic/react';
import {useHistory} from 'react-router';
import './Menu.css'
import React, {useState} from 'react';

const Menu: React.FC = () => {
    function getClassName(id: string) {
        return history.location.pathname === '/profile' && id === '1' ?  'btnMenu selectBtn' :
            history.location.pathname === '/factures' && id === '2' ?  'btnMenu selectBtn' :
                history.location.pathname === '/services' && id === '3' ?  'btnMenu selectBtn' :
                    history.location.pathname === '/commandes' && id === '4' ?  'btnMenu selectBtn' : 'btnMenu';
    }

    const history = useHistory();

    return (
        <div className='menu'>
            <IonList>
                <IonItem id='1' routerLink="/profile"
                         className={getClassName('1')}>
                    <IonLabel>Mon compte</IonLabel>
                </IonItem>
                <IonItem id='2' routerLink="/factures"
                         className={getClassName('2')}>
                    <IonLabel>Mes factures</IonLabel>
                </IonItem>
                <IonItem id='3' routerLink="/services"
                         className={getClassName('3')}>
                    <IonLabel>Mes services</IonLabel>
                </IonItem>
                <IonItem routerLink="/commandes"
                         className={getClassName('4')}>
                    <IonLabel>Mes commandes</IonLabel>
                </IonItem>
            </IonList>


            {/* <div className={'btnMenu ' + (nomClasse == 1) ? 'selectBtn' : ''} onClick={e => (routeChange('/profile'))}>
                <span className='nameSelect'>Mon compte</span>
            </div>
            <div className={'btnMenu ' + (nomClasse == 2) ? 'selectBtn' : ''} onClick={e => (routeChange('/profile/factures'))}>
                <span className='name'>Mes factures</span>
            </div>
            <div className={'btnMenu ' + (nomClasse == 3) ? 'selectBtn' : ''} onClick={e => (routeChange('/profile/services'))}>
                <span className='name'>Mes services</span>
            </div>
            <div className={'btnMenu ' + (nomClasse == 4) ? 'selectBtn' : ''} onClick={e => (routeChange('/profile/commandes'))}>
                <span className='name'>Mes commandes</span>
            </div> */}
            {/*<IonContent onLoad={setbackground}></IonContent>*/}
        </div>
    );
};

export default Menu;    
