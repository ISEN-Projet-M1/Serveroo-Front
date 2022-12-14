import {
    IonCol,
    IonContent,
    IonPage,
    IonRow,
} from '@ionic/react';
import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Profile/Menu';
import "./Factures.css"
import creditCard from '../../assets/svg/profile/creditCard.svg';
import Footer from '../../components/Footer/Footer';

const Factures: React.FC = () => {
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

                    </IonCol>
                </IonRow>

                <Footer></Footer>
            </IonContent>
        </IonPage>
    );
};

export default Factures;
