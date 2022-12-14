import {
    IonCol,
    IonContent,
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

                    </IonCol>
                </IonRow>

                <Footer></Footer>
            </IonContent>
        </IonPage>
    );
};

export default Commandes;
