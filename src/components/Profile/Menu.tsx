import {
    IonList,
    IonItem,
    IonLabel
} from '@ionic/react';
import { useHistory } from 'react-router';
import './Menu.css'
import React, { useState } from 'react';

const Menu: React.FC = () => {
    function getClassName(id: string) {
        return history.location.pathname === '/profile' && id === '1' ? 'btnMenu selectBtn' :
            history.location.pathname === '/factures' && id === '2' ? 'btnMenu selectBtn' :
                history.location.pathname === '/services' && id === '3' ? 'btnMenu selectBtn' :
                    history.location.pathname === '/commandes' && id === '4' ? 'btnMenu selectBtn' : 'btnMenu';
    }

    function getClassName2(id: string) {
        return history.location.pathname === '/profile' && id === '1' ? 'selectName' :
            history.location.pathname === '/factures' && id === '2' ? 'selectName' :
                history.location.pathname === '/services' && id === '3' ? 'selectName' :
                    history.location.pathname === '/commandes' && id === '4' ? 'selectName' : '';
    }

    const history = useHistory();

    return (
        <div className='menu'>
            <IonList className='list'>
                <IonItem routerLink="/profile"
                    className={getClassName('1') + ' marginItem'} lines={'none'}>
                    <span className={getClassName2('1') + ' name'}>Mon compte</span>
                </IonItem>
                <IonItem routerLink="/factures"
                    className={getClassName('2') + ' marginItem'} lines={'none'}>
                    <span className={getClassName2('2') + ' name'}>Mes factures</span>
                </IonItem>
                <IonItem routerLink="/services"
                    className={getClassName('3') + ' marginItem'} lines={'none'}>
                    <span className={getClassName2('3') + ' name'}>Mes services</span>
                </IonItem>
                <IonItem routerLink="/commandes"
                    className={getClassName('4') + ' marginItem'} lines={'none'}>
                    <span className={getClassName2('4') + ' name'}>Mes commandes</span>
                </IonItem>
            </IonList>
        </div>
    );
};

export default Menu;    
