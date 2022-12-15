import {
    IonCol,
    IonContent,
    IonGrid,
    IonPage,
    IonRow,
    useIonViewDidEnter,
} from '@ionic/react';
import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Profile/Menu';
import "./Factures.css"
import creditCard from '../../assets/svg/profile/creditCard.svg';
import Footer from '../../components/Footer/Footer';
import options from '../../assets/svg/icons/options.svg';

const Factures: React.FC = () => {
    useIonViewDidEnter(() => {
        showOptions();
    });

    function showOptions() {
        let options = document.querySelectorAll('.items');
        let optionsIcon = document.querySelectorAll('.optionsImg');
        //if user hover the row show the options icon 
        for (let i = 0; i < options.length; i++) {
            options[i].addEventListener('mouseover', () => {
                optionsIcon[i]?.removeAttribute('hidden');
            });
            options[i].addEventListener('mouseout', () => {
                optionsIcon[i]?.setAttribute('hidden', 'true');
            });
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
                            <img src={creditCard} alt="creditCard" className="creditCard" />
                        </div>
                    </IonCol>


                    <IonCol size='8'>
                        <div className='border tabGrid'>
                            <p className='titleFactures'>Mes factures</p>
                            <IonCol>
                                <div>
                                    <IonGrid>
                                        <IonRow  className='titres'>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>Référence</IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>Numéro de commande</IonCol>
                                            <IonCol size="10" size-sm="2" className='itemGrid'>Date</IonCol>
                                            <IonCol size="10" size-sm="1" className='itemGrid'>Solde</IonCol>
                                            <IonCol size="10" size-sm="2" className='itemGrid'>Status</IonCol>
                                            <IonCol size="10" size-sm="1" className='itemGrid'></IonCol>
                                        </IonRow>
                                        <br></br>
                                        <IonRow className='items'>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>FR492937T1020974</IonCol>
                                            <IonCol size="10" size-sm="3" className='itemGrid'>0176938631517932</IonCol>
                                            <IonCol size="10" size-sm="2" className='itemGrid'>6 Juin 2022</IonCol>
                                            <IonCol size="10" size-sm="1" className='itemGrid'>0.00€</IonCol>
                                            <IonCol size="10" size-sm="2" className='itemGrid'>0.00€</IonCol>
                                            <IonCol size="10" size-sm="1" className='itemGrid'><img src={options} height={7} className='optionsImg' hidden></img></IonCol>
                                        </IonRow>
                                    </IonGrid>
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

export default Factures;
