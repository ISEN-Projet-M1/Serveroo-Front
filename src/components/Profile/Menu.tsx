import { IonContent, useIonViewDidEnter, useIonViewWillEnter, useIonViewWillLeave, IonList, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router';
import './Menu.css'
import React, { useState } from 'react';

const Menu: React.FC = () => {
    let [nomClasse, setNomClasse] = useState(0);

    useIonViewDidEnter(() => {
        console.log(history.location.pathname)
        let Label;
        switch(history.location.pathname) {
            case '/factures':
                Label = document.getElementById('2');
                Label?.classList.add('selectBtn', 'btnMenu');
                break;
            case '/services':
                Label = document.getElementById('3');
                Label?.classList.add('selectBtn', 'btnMenu');
                break;
            case '/commandes':
                Label = document.getElementById('4');
                Label?.classList.add('selectBtn', 'btnMenu');
                break;
            case '/profile':
                Label = document.getElementById('1');
                Label?.classList.add('selectBtn', 'btnMenu');
                break;
            default:
                break;
        }
    });

    useIonViewWillLeave(() => {
        setNomClasse(2);
        console.log("sortie");
        console.log((nomClasse === 1) ? 'egal à 1' : 'autre' + nomClasse);
    });
    // useIonViewWillEnter(() => {
    //     console.log("enter");
    //     switch (history.location.pathname) {
    //         case '/profile/factures':
    //             setNomClasse(2);
    //             console.log(nomClasse)
    //             break;
    //         case '/profile/services':
    //             setNomClasse(3);
    //             console.log(nomClasse)
    //             break;
    //         case '/profile/commandes':
    //             setNomClasse(4);
    //             console.log(nomClasse)
    //             break;
    //         case '/profile':
    //             setNomClasse(1);
    //             console.log(nomClasse)
    //             break;
            
    //         default:
    //             console.log("default")
    //             break;
    //     }
    // });

    const history = useHistory();

    const routeChange = (path: string) => {
        history.push(path);
    }

    function setbackground() {
        console.log(history.location.pathname)
        console.log((nomClasse === 1) ? 'selectBtn' : '')
        switch (history.location.pathname) {
            case '/profile/factures':
                setNomClasse(2);
                console.log(nomClasse)
                break;
            case '/profile/services':
                setNomClasse(3);
                console.log(nomClasse)
                break;
            case '/profile/commandes':
                setNomClasse(4);
                console.log(nomClasse)
                break;
            case '/profile':
                setNomClasse(1);
                console.log(nomClasse)
                break;
            
            default:
                console.log("default")
                break;
        }
    }

    return (
        <div className='menu'>
            <IonList>
                <IonItem id='1' routerLink="/profile" className={'btnMenu '}>
                    <IonLabel>Mon compte</IonLabel>
                </IonItem>
                <IonItem id='2' routerLink="/factures" className={'btnMenu '}>
                    <IonLabel>Mes factures</IonLabel>
                </IonItem>
                <IonItem id='3' routerLink="/services" className={'btnMenu '}>
                    <IonLabel>Mes services</IonLabel>
                </IonItem>
                <IonItem routerLink="/commandes" className={'btnMenu '}>
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
            <IonContent onLoad={setbackground}></IonContent>
        </div>
    );
};

export default Menu;    
