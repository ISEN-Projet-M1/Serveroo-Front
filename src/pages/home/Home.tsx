import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Home.css';
import React, {useState} from "react";
import Minecraft from "../../assets/Minecraft.png"


const Home: React.FC = () => {
    const [text, setButtonText] = useState("click");

    function changeText() {
        setButtonText("autre");
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
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
                </IonCard>

                <img src={Minecraft}/>
            </IonContent>
        </IonPage>
    );
};

export default Home;
