import {
    IonButton,
    IonCol,
    IonContent,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonRadio,
    IonRadioGroup,
    IonRow,
    IonSelect,
    IonSelectOption,
    useIonViewDidEnter,
} from '@ionic/react';
import './Profile.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Profile/Menu';

import robot from '../../assets/svg/profile/robot.svg'
import { closeOutline } from 'ionicons/icons';

const Profile: React.FC = () => {
    useIonViewDidEnter(() => {
        cancelEdit();

    });

    function setFormEditProfile() {
        let toHiddenEdit = document.querySelectorAll('.toHiddenEdit');
        let toHiddenEditForm = document.querySelectorAll('.editProfile');
        for (let i = 0; i < toHiddenEdit.length; i++) {
            toHiddenEdit[i].setAttribute('style', 'display: none');
        }
        for (let i = 0; i < toHiddenEditForm.length; i++) {
            toHiddenEditForm[i].setAttribute('style', 'display: block');
        }
    }

    function cancelEdit() {
        let toHiddenEdit = document.querySelectorAll('.toHiddenEdit');
        let toHiddenEditForm = document.querySelectorAll('.editProfile');
        for (let i = 0; i < toHiddenEdit.length; i++) {
            toHiddenEdit[i].setAttribute('style', 'display: block');
        }
        for (let i = 0; i < toHiddenEditForm.length; i++) {
            toHiddenEditForm[i].setAttribute('style', 'display: none');
        }
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <Navbar />

                <IonRow>
                    <IonCol size='4'>
                        <div>
                            <Menu></Menu>
                        </div>
                        <div className='firstColProfile'>
                            <img src={robot}></img>
                        </div>
                    </IonCol>

                    <IonCol size='8'>
                        <a className='titleProfile'>Bienvenue Pilou !</a>
                        <div className='border profile'>
                            <IonCol>
                                <IonRow className='rowProfil'>
                                    <p className='secondTitle'>Mon profil</p>
                                    <IonIcon className='closePopUp ion-icon editProfile' size="large" src={closeOutline} onClick={cancelEdit}></IonIcon>
                                </IonRow>
                                <div className='editProfile'>
                                    <form className='formEditProfile'>
                                        <IonCol size="5">
                                            <IonItem lines='none'>
                                                <IonLabel position="stacked" className='label'>Nom</IonLabel>
                                                <IonInput className='ion-input' placeholder="FOURNET"></IonInput>
                                            </IonItem>
                                            <IonItem lines='none'>
                                                <IonLabel position="stacked" className='label'>Prénom</IonLabel>
                                                <IonInput className='ion-input' placeholder="Pilou"></IonInput>
                                            </IonItem>
                                            <IonItem lines='none'>
                                                <IonLabel position="stacked" className='label'>Email</IonLabel>
                                                <IonInput className='ion-input' type="email" placeholder="piloufournet@gmail.com"></IonInput>
                                            </IonItem>

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

                                            <IonItem lines='none'>
                                                <IonLabel position="stacked" className='label'>Ecole</IonLabel>
                                                <IonInput className='ion-input' placeholder="ISEN LILLE"></IonInput>
                                            </IonItem>
                                            <IonButton color="primary" className='btnProfileFormMdpOublie'><span className='btnProfileTextMdpOublie'>Modifier mon mot de passe</span></IonButton>

                                        </IonCol>
                                        <IonRow className='btnEditProfile'>
                                            <IonButton color="primary" className='btnProfileForm'><span className='btnProfileText'>Valider</span></IonButton>
                                        </IonRow>
                                    </form>
                                </div>

                                <div className='toHiddenEdit'>

                                    <div className='textImportant'>
                                        <span>Pilou FOURNET</span><br></br>
                                        <span>piloufournet@gmail.com</span>
                                    </div>

                                    <div className='textImportant'>
                                        <span>Statut : </span><a className='secondText'>Etudiant</a><br></br>
                                        <span>Ecole : </span><a className='secondText'>ISEN LILLE</a>
                                    </div>

                                    <IonButton color="primary" className='btnProfile' onClick={setFormEditProfile}><span className='btnProfileText'>Editer mon profil</span></IonButton>

                                </div>


                            </IonCol>
                        </div>

                        <div className='border factures toHiddenEdit'>
                            <IonCol>
                                <p className='secondTitle'>Ma dernière facture</p>

                                <div className='textImportant'>
                                    <span>Référence</span><br></br>
                                    <span className='secondText'>FR492937T1020974</span>
                                </div>

                                <div className='textImportant'>
                                    <span>Date</span><br></br>
                                    <span className='secondText'>6 Juin 2022</span>
                                </div>

                                <div className='textImportant'>
                                    <span>Montant</span><br></br>
                                    <span className='secondText'>0.00€</span>
                                </div>
                                <IonButton color="primary" className='btnProfile'><span className='btnProfileText'>Télécharger</span></IonButton>

                            </IonCol>
                        </div>
                        <div className='toHiddenEdit'>
                            <IonRow className='rowBtn'>
                                <IonButton color="primary" className='btnProfileDeco'><span className='btnProfileTextDeco'>Déconnexion</span></IonButton>
                                <IonButton color="danger" className='btnProfileSupp'><span className='btnProfileTextDeco'>Supprimer mon compte</span></IonButton>
                            </IonRow>
                        </div>

                    </IonCol>
                </IonRow>

                <Footer />
            </IonContent>

        </IonPage>
    );
};

export default Profile;    
