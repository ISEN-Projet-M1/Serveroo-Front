import {
    IonCol,
    IonContent,
    IonGrid,
    IonPage,
    IonRow,
} from '@ionic/react';
import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Profile/Menu';
import "./Commandes.css"
import browserStats from '../../assets/svg/profile/browserStats.svg';
import Footer from '../../components/Footer/Footer';

const Commandes: React.FC = () => {

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
                            <img src={browserStats} alt="browserStats" className="browserStats" />
                        </div>
                    </IonCol>


                    <IonCol size='8'>
                        <div className='border tabGrid'>
                            <p className='titleFactures'>Mes commandes</p>
                            <IonCol>
                                <div>
                                    <IonGrid>
                                        <IonRow className='titres'>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>Date</IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>Numéro de commande</IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>Etat</IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>Montant</IonCol>
                                        </IonRow>
                                        <br></br>
                                        <IonRow className='items'>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>6 - 12
                                                Juin 2022</IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>0176938631517932</IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>
                                                <div className='itemGreen'>
                                                    <span>Validé</span>
                                                </div>
                                            </IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>0.00€</IonCol>
                                        </IonRow>
                                        <IonRow className='items'>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>6 - 12
                                                Juin 2022</IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>0176938631517932</IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>
                                                <div className='itemRed'>
                                                    <span>Paiement non reçu</span>
                                                </div>
                                            </IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>0.00€</IonCol>
                                        </IonRow>
                                        <IonRow className='items'>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>6 - 12
                                                Juin 2022</IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>0176938631517932</IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>
                                                <div className='itemYellow'>
                                                    <span>Paiement en cours</span>
                                                </div>
                                            </IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>0.00€</IonCol>
                                        </IonRow>
                                        <IonRow className='items'>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>6 - 12
                                                Juin 2022</IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>0176938631517932</IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>
                                                <div className='itemGreen'>
                                                    <span>Validé</span>
                                                </div>
                                            </IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>0.00€</IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </div>

                            </IonCol>
                        </div>
                    </IonCol>
                </IonRow>

                <Footer></Footer>
            </IonContent>
        </IonPage >
    );
};

export default Commandes;
