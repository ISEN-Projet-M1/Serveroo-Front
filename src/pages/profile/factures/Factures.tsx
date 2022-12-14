import {
    IonContent,
    IonPage,
} from '@ionic/react';
import React from "react";
import Navbar from '../../../components/Navbar/Navbar';
import Menu from '../../../components/Profile/Menu';
import "./Factures.css"

const Factures: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <Navbar />
                <Menu></Menu>
            </IonContent>
        </IonPage>
    );
};

export default Factures;
