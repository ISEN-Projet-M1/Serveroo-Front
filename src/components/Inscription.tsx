import './Inscription.css';
import '../assets/svg/login_inscription/google.svg';
import { logoGoogle } from 'ionicons/icons';

import { IonGrid, IonRow, IonCol,IonInput, IonLabel, IonItem, IonSelect, IonSelectOption, IonCheckbox, IonButton, IonIcon} from '@ionic/react';

interface ContainerProps { }

const Inscription: React.FC<ContainerProps> = () => {
  return (
    <div>
        <IonGrid>
            <IonRow>
                <IonCol size="5">
                    <IonItem lines='none'>
                        <IonLabel position="stacked" className='label'>
                            <IonRow>Nom<p className='rouge'>*</p>
                            </IonRow></IonLabel>
                        <IonInput className='test ion-input' placeholder="Nom"></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol size="2"></IonCol>
                <IonCol size="5">
                    <IonItem lines='none'>
                        <IonLabel position="stacked" className='label'>
                            <IonRow>Prénom<p className='rouge'>*</p></IonRow></IonLabel>
                        <IonInput className='test ion-input' placeholder="Prénom"></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size='12'><IonItem lines='none'>
                    <IonLabel position="stacked" className='label'>
                        <IonRow>Adresse mail<p className='rouge'>*</p></IonRow></IonLabel>
                    <IonInput className='ion-input' placeholder="exemple@email.com"></IonInput>
                </IonItem></IonCol>
                
            </IonRow>
            <IonRow>
                <IonCol size='5'>
                    <IonItem lines='none'>
                        <IonLabel position="stacked" className='label'>
                            <IonRow>Mot de passe<p className='rouge'>*</p></IonRow></IonLabel>
                        <IonInput className='test ion-input' placeholder="Mot de passe"></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol size='2'></IonCol>
                <IonCol size='5'>
                    <IonItem lines='none'>
                        <IonLabel position="stacked" className='label'>
                            <IonRow>Confirmation du mot de passe<p className='rouge'>*</p></IonRow></IonLabel>
                        <IonInput className='test ion-input' placeholder="Confirmation du mot de passe"></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size='12'>
                    <IonItem lines='none'>
                        <IonLabel position="stacked" className='label'>
                            <IonRow>Quel est votre statut? <p className='rouge'>*</p></IonRow></IonLabel>
                        <IonSelect className='ion-select' placeholder="Etudiant" interface='popover'>
                            <IonSelectOption value="etudiant">Etudiant·e</IonSelectOption>
                            <IonSelectOption value="enseignant">Professeur·e</IonSelectOption>
                            <IonSelectOption value="chercheur">Chercheur·euse</IonSelectOption>
                            <IonSelectOption value="particulier">Particulier·e</IonSelectOption>
                            <IonSelectOption value="professionnel">Professionnel·le</IonSelectOption>
                            <IonSelectOption value="autre">Autre</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonCol>
                
            </IonRow>
            <IonRow>
                <IonCol size='12'>
                    <IonItem lines='none'>
                        <IonLabel position="stacked" className='label'>Nom de l'école/entreprise</IonLabel>
                        <IonInput className='ion-input' placeholder="Nom de l'école/entreprise"></IonInput>
                    </IonItem>
                </IonCol>
                
            </IonRow>
            <IonRow className='cond'>
                <IonCol size='12'>
                    <IonItem lines='none'>
                        <IonCheckbox className='ion-checkbox'></IonCheckbox>
                        <IonLabel className='conditions '>J’accepte les conditions générales et la politique de confidentialité de Serveroo</IonLabel>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size='12'>
                    <IonItem lines='none'>
                        <IonCheckbox className='ion-checkbox'></IonCheckbox>
                        <IonLabel className='conditions'>J'accepte de recevoir des informations concernant les produits de Serveroo</IonLabel>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow className='inscrire'>
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
