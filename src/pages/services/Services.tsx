import {
    IonCol,
    IonContent,
    IonPage,
    IonRow,
} from '@ionic/react';
import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Profile/Menu';
import "./Services.css"
import cloudHosting from '../../assets/svg/profile/cloudHosting.svg';
import Footer from '../../components/Footer/Footer';

const Services: React.FC = () => {
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

                    </IonCol>

                </IonRow>

                <Footer></Footer>
            </IonContent>
        </IonPage>
    );
};

export default Services;
