import {
    IonButton,
    IonCol,
    IonContent,
    IonItem,
    IonLabel,
    IonPage,
    IonRadio,
    IonRadioGroup,
    IonRow,
} from '@ionic/react';
import './Profile.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Profile/Menu';

import robot from '../../assets/svg/profile/robot.svg'

const Profile: React.FC = () => {
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
                                <p className='secondTitle'>Mon profil</p>
                                <div className='textImportant'>
                                    <span>Pilou FOURNET</span><br></br>
                                    <span>piloufournet@gmail.com</span>
                                </div>

                                <div className='textImportant'>
                                    <span>Statut : </span><a className='secondText'>Etudiant</a><br></br>
                                    <span>Ecole : </span><a className='secondText'>ISEN LILLE</a>
                                </div>

                                <IonButton color="primary" className='btnProfile'><span className='btnProfileText'>Editer mon profil</span></IonButton>
                            </IonCol>
                        </div>

                        <div className='border factures'>
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

                                <IonButton color="primary" className='btnProfile'><span className='btnProfileText'>Voir ma facture</span></IonButton>
                            </IonCol>
                        </div>
                        <IonRow className='rowBtn'>
                            <IonButton color="primary" className='btnProfileDeco'><span className='btnProfileTextDeco'>Déconnexion</span></IonButton>
                            <IonButton color="danger" className='btnProfileSupp'><span className='btnProfileTextDeco'>Supprimer mon compte</span></IonButton>
                        </IonRow>
                    </IonCol>
                </IonRow>

                <Footer />
            </IonContent>

        </IonPage>
    );
};

export default Profile;    
