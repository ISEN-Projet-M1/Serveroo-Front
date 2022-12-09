import './Connexion.css';
import img from '../assets/svg/storyset/password.svg'
import { logoGoogle } from 'ionicons/icons';

import { IonGrid, IonRow, IonCol,IonInput, IonLabel, IonItem, IonCheckbox, IonButton,IonIcon} from '@ionic/react';

interface ContainerProps { }

const Inscription: React.FC<ContainerProps> = () => {
  return (
    <div>
        <IonGrid>
            <IonRow>
                <IonCol size='12'>
                    <IonItem lines='none'>
                        <IonLabel position="stacked" className='label'>
                            <IonRow>Adresse mail<p className='rouge'>*</p></IonRow></IonLabel>
                        <IonInput className='ion-input' placeholder="exemple@email.com"></IonInput>
                    </IonItem>
                </IonCol>
                    
            </IonRow>
            <IonRow>
                <IonCol size='12'>
                    <IonItem lines='none'>
                        <IonLabel position="stacked" className='label'>
                            <IonRow>Mot de passe<p className='rouge'>*</p></IonRow></IonLabel>
                        <IonInput className='ion-input' placeholder="Mot de passe"></IonInput>
                    </IonItem>
                </IonCol>
                    
            </IonRow>
            <IonRow>
                <IonCol size='12'>
                    <IonItem lines='none'>
                        <IonCheckbox className='ion-checkbox'></IonCheckbox>
                        <IonLabel className='connexion'>Restez connecté·e ?</IonLabel>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size='12'>
                   <img className='imgConnexion' src={img} alt="storyset"/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonButton expand="block" color="light" className='btn2'><IonIcon src={logoGoogle} className="google ion-icon"></IonIcon>S'inscrire avec Google</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton expand="block" color="primary">S'inscrire</IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
        
    </div>
  );
};

export default Inscription;
