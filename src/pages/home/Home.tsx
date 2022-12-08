import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonFooter,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import Navbar from '../../components/Navbar';
import './Home.css';
import React, { useState } from "react";
import Minecraft from "../../assets/Minecraft.png"
import Footer from '../../components/Footer';


const Home: React.FC = () => {
    const [text, setButtonText] = useState("click");

    function changeText() {
        setButtonText("autre");
    }

    return (
        <IonPage>


            <Navbar></Navbar>

            
            <IonContent fullscreen>
                {/*
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Bouton vers page test</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonButton routerLink="/test">
                            Test
                        </IonButton>
                        <IonButton onClick={changeText}>
                            Boutton
                        </IonButton>
                        {text}
                    </IonCardContent>
                </IonCard>*/}
            </IonContent>
            

            <IonFooter class="ion-no-border">
                <Footer />
            </IonFooter>
        </IonPage>
    );
};

export default Home;
