import {
    IonContent,
    IonItem,
    IonLabel,
    IonPage,
    IonRadio,
    IonRadioGroup,
    RadioGroupCustomEvent,
} from '@ionic/react';
import './Menu.css'

const Menu: React.FC = () => {
    return (
        <div className='menu'>
            <IonContent className="ion-padding">
                <IonRadioGroup>
                    <IonItem>
                        <IonLabel className='nameOption'>Mon compte</IonLabel>
                        <IonRadio value="account"></IonRadio>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Mes factures</IonLabel>
                        <IonRadio value="factures"></IonRadio>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Mes services</IonLabel>
                        <IonRadio value="services"></IonRadio>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Mes commandes</IonLabel>
                        <IonRadio value="commandes"></IonRadio>
                    </IonItem>
                </IonRadioGroup>
            </IonContent>
        </div>
    );
};

export default Menu;    
