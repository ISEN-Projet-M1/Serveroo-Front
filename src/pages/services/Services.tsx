import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonItem,
    IonPage,
    IonRow,
} from '@ionic/react';
import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Profile/Menu';
import "./Services.css"
import cloudHosting from '../../assets/svg/profile/cloudHosting.svg';
import Footer from '../../components/Footer/Footer';
import shield from '../../assets/svg/icons/shield.svg';
import { useHistory } from 'react-router';

const Services: React.FC = () => {

    const history = useHistory();

    const routeChange = (path: string) => {
        history.push(path);
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
                            <img src={cloudHosting} alt="" className="" />
                        </div>
                    </IonCol>


                    <IonCol size='8'>
                        <div className='border tabGrid'>
                            <p className='titleFactures'>Mes services</p>
                            <IonCol>
                                <div>
                                    <IonGrid>
                                        <IonRow className='titres'>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>Nom du service</IonCol>
                                            <IonCol size="10" size-sm="1" className='itemGrid'>Service</IonCol>
                                            <IonCol size="10" size-sm="2" className='itemGrid'>Disponibilité</IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>Status</IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>Date</IonCol>
                                        </IonRow>
                                        <br></br>

                                        <IonRow className='items click' onClick={e => routeChange('serveur')}>
                                            <IonCol size="10" size-sm="3" className='itemGrid click'>ServWeb Pilou</IonCol>
                                            <IonCol size="10" size-sm="1" className='itemGrid click'>Nginx</IonCol>
                                            <IonCol size="10" size-sm="2" className='itemGrid click'>
                                                <div className='itemGreen click'>
                                                    <span>Actif</span>
                                                </div>
                                            </IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid click'><div className='itemGreen'>
                                                <span>Renouvellement automatique</span>
                                            </div></IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid click'>6 - 12
                                                Juin 2022</IonCol>

                                        </IonRow>
                                        <IonRow className='items click'>
                                            <IonCol size="10" size-sm="3" className='itemGrid click'>ServWeb2 Pilou</IonCol>
                                            <IonCol size="10" size-sm="1" className='itemGrid click'>Nginx</IonCol>
                                            <IonCol size="10" size-sm="2" className='itemGrid click'>
                                                <div className='itemRed click'>
                                                    <span>Inactif</span>
                                                </div>
                                            </IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid click'><div className='itemGreen'>
                                                <span>Payé</span>
                                            </div></IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid click'>6 - 12
                                                Juin 2022</IonCol>

                                        </IonRow>
                                        <IonRow className='items click'>
                                            <IonCol size="10" size-sm="3" className='itemGrid click'>Serv Minecraft</IonCol>
                                            <IonCol size="10" size-sm="1" className='itemGrid click'>Minecraft</IonCol>
                                            <IonCol size="10" size-sm="2" className='itemGrid click'>
                                                <div className='itemGreen click'>
                                                    <span>Actif</span>
                                                </div>
                                            </IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid click'><div className='itemYellow'>
                                                <span>Paiement
                                                    en cours</span>
                                            </div></IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid click' >20 - 5
                                                Juin/Août 2022</IonCol>

                                        </IonRow>
                                        <IonRow className='items warning click '>
                                            <IonCol size="10" size-sm="3" className='itemGrid click'>Serv Minecraft</IonCol>
                                            <IonCol size="10" size-sm="1" className='itemGrid click'>Minecraft</IonCol>
                                            <IonCol size="10" size-sm="2" className='itemGrid click'>
                                                <div className='itemGreen click'>
                                                    <span>Actif</span>
                                                </div>
                                            </IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid click'><div className='itemDark'>
                                                <span>A renouveler</span>
                                            </div></IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid click'>20 - 5
                                                Juin/Août 2022
                                            </IonCol>
                                            <div className='warningText' >
                                                <img src={shield} height={30}></img>
                                                <span>Attention il vous reste 10 jours pour renouveler ce service ou télécharger les données</span>
                                            </div>
                                        </IonRow>
                                    </IonGrid>
                                    <IonButton color="primary" className='btnProfile'><span className='btnProfileText'>Ajouter un service</span></IonButton>

                                </div>

                            </IonCol>
                        </div>
                    </IonCol>

                </IonRow>

                <Footer></Footer>
            </IonContent>
        </IonPage>
    );
};

export default Services;
