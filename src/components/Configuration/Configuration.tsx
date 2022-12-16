import './Configuration.css';
import Storyset from '../../assets/svg/storyset/amico.svg';
import {
    IonLabel,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonRow,
    IonGrid,
    IonCol,
    IonRange,
    IonButton,
    IonCheckbox
} from "@ionic/react";
import React, {useState} from "react";
import { RangeValue } from '@ionic/core';

export function Configuration(props:any) {
    const [lastEmittedValue, setLastEmittedValue] = useState<RangeValue>();
    const [lastEmittedValue2, setLastEmittedValue2] = useState<RangeValue>();

    return (
        <div>
            <img src={require("../../assets/svg/products/" + props.choix.logo)} alt="logo" className="logo2"></img>
            <IonLabel>{props.choix.title}</IonLabel>
            <form className="form">
                <IonGrid>
                    <IonRow>
                        <IonCol size="6">
                            <IonRow>
                                <IonLabel className="label2">Création de votre service personnalisé</IonLabel>
                            </IonRow>
                            <IonRow>
                                <IonItem className="select">
                                    <IonLabel position="stacked">Choississez votre version Serveur et Modpack</IonLabel>
                                    <IonSelect className='ion-select' placeholder="Recommandé" interface='popover'>
                                        <IonSelectOption value="jsp">jsp</IonSelectOption>
                                        <IonSelectOption value="jsp">jsp</IonSelectOption>
                                        <IonSelectOption value="jsp">jsp</IonSelectOption>
                                        <IonSelectOption value="jsp">jsp</IonSelectOption>
                                        <IonSelectOption value="jsp">jsp</IonSelectOption>
                                        <IonSelectOption value="jsp">jsp</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonRow>
                            <IonRow className="row">
                                <IonLabel> Saisissez ou sélectionnez le nombre de GB RAM pour votre serveur :
                                    {lastEmittedValue as number} GB</IonLabel>
                            </IonRow>
                            <IonRow>
                                <IonRange ticks={true} snaps={true} min={2} max={10} onIonChange={({ detail }) => setLastEmittedValue(detail.value)}></IonRange>
                            </IonRow>
                            <IonRow className='row'>
                                <IonLabel> Saisissez ou sélectionnez la taille du disque dur pour votre serveur :
                                    {lastEmittedValue2 as number} Mo</IonLabel>
                            </IonRow>
                            <IonRow>
                                <IonRange ticks={true} snaps={true} min={256} max={10240} onIonChange={({ detail }) => setLastEmittedValue2(detail.value)}></IonRange>
                            </IonRow>
                            <IonRow>
                                <IonLabel>Durée :</IonLabel>
                            </IonRow>
                            <IonRow>
                                <IonCol size="4">
                                    <IonButton>
                                        1 semaine
                                    </IonButton>
                                </IonCol>
                                <IonCol size="4">
                                    <IonButton>
                                        1 mois
                                    </IonButton>
                                </IonCol>
                                <IonCol size="4">
                                    <IonButton>
                                        1 an
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonItem>
                                    <IonLabel position="stacked" className="select">Sélectionnez le nombre de coeurs de votre serveur :</IonLabel>
                                    <IonSelect className='ion-select select2' placeholder="1 coeur" interface='popover'>
                                        <IonSelectOption value="1">1 coeur</IonSelectOption>
                                        <IonSelectOption value="2">2 coeurs</IonSelectOption>
                                        <IonSelectOption value="3">3 coeurs</IonSelectOption>
                                        <IonSelectOption value="4">4 coeurs</IonSelectOption>
                                        <IonSelectOption value="5">5 coeurs</IonSelectOption>
                                        <IonSelectOption value="6">6 coeurs</IonSelectOption>
                                        <IonSelectOption value="7">7 coeurs</IonSelectOption>
                                        <IonSelectOption value="8">8 coeurs</IonSelectOption>
                                        <IonSelectOption value="9">9 coeurs</IonSelectOption>
                                        <IonSelectOption value="10">10 coeurs</IonSelectOption>
                                        <IonSelectOption value="11">11 coeurs</IonSelectOption>
                                        <IonSelectOption value="12">12 coeurs</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonRow>
                        </IonCol>
                        <IonCol size="6">
                            <IonRow>
                                <img src={Storyset} alt="logo" className="logo3"></img>
                            </IonRow>
                            <IonRow>
                                <IonItem>
                                    <IonRow>
                                        <IonCheckbox slot="start"></IonCheckbox>
                                        <IonLabel>Activation du renouvellement automatique</IonLabel>
                                    </IonRow>
                                    <IonRow>
                                        <IonLabel slot='start'>3.00€</IonLabel>
                                        <IonButton slot='end'>Acheter</IonButton>
                                    </IonRow>
                                </IonItem>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </form>
        </div>
    )
}
