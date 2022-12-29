import "./Configuration.css";
import Storyset from "../../assets/svg/storyset/amico.svg";
import {
  IonLabel,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonRow,
  IonCol,
  IonRange,
  IonButton,
  IonCheckbox,
} from "@ionic/react";
import React, { useState } from "react";
import { RangeValue } from "@ionic/core";

export function Configuration(props: any) {
  const [lastEmittedValue, setLastEmittedValue] = useState<RangeValue>(2);
  const [lastEmittedValue2, setLastEmittedValue2] = useState<RangeValue>(256);

  return (
    <div id="configMain">
      <form className="form">
        <IonRow className="rowConfig">
          <IonCol size="6" className="firstColConfigServ">
            <div className="titleConfigServ">
              <img
                src={require("../../assets/svg/products/" + props.choix.logo)}
                alt="logo"
                className="logo2"
              ></img>
              <br></br>
              <IonLabel>{props.choix.title}</IonLabel>
            </div>
            <br></br>
            <IonRow>
              <IonLabel className="secondTitleConfigServ">
                Création de votre service personnalisé
              </IonLabel>
            </IonRow>
            <IonRow>
              <IonItem className="textLabelFormServ" lines="none">
                <IonLabel position="stacked">
                  Choississez votre version Serveur et Modpack
                </IonLabel>
                <IonSelect
                  className="selectOptionServVersionModPack"
                  placeholder="Recommandé"
                  interface="popover"
                >
                  <IonSelectOption value="jsp">1.8.9</IonSelectOption>
                  <IonSelectOption value="jsp2">41.8.49</IonSelectOption>
                  <IonSelectOption value="jsp3">1.78.9</IonSelectOption>
                  <IonSelectOption value="jsp4">12.8.9</IonSelectOption>
                  <IonSelectOption value="jsp5">1.8.9</IonSelectOption>
                  <IonSelectOption value="jsp6">17.8.97</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonRow>
            <IonRow>
              <IonItem className="textLabelFormServ" lines="none">
                <IonLabel position="stacked" className="select">
                  Sélectionnez le nombre de coeurs de votre serveur :
                </IonLabel>
                <IonSelect
                  className="ion-select select2"
                  placeholder="1 coeur"
                  interface="popover"
                >
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

            <IonRow className="row">
              <IonLabel className="secondTitleConfigServ">
                {" "}
                Saisissez ou sélectionnez le nombre de GB RAM pour votre serveur
                :{" "}
                <span className="textLabelFormServ">
                  {lastEmittedValue as number} GB
                </span>
              </IonLabel>
            </IonRow>
            <IonRow>
              <IonRange
                min={2}
                max={10}
                onIonChange={({ detail }) => setLastEmittedValue(detail.value)}
              ></IonRange>
            </IonRow>
            <IonRow className="row">
              <IonLabel className="secondTitleConfigServ">
                {" "}
                Saisissez ou sélectionnez la taille du disque dur pour votre
                serveur :{" "}
                <span className="textLabelFormServ">
                  {lastEmittedValue2 as number} Mo
                </span>
              </IonLabel>
            </IonRow>
            <IonRow>
              <IonRange
                min={256}
                max={10240}
                onIonChange={({ detail }) => setLastEmittedValue2(detail.value)}
              ></IonRange>
            </IonRow>
            <IonRow>
              <IonLabel className="secondTitleConfigServ">Durée :</IonLabel>
            </IonRow>
            <br></br>
            <IonRow>
              <IonCol size="2">
                <IonButton>1 semaine</IonButton>
              </IonCol>
              <IonCol size="2">
                <IonButton>1 mois</IonButton>
              </IonCol>
              <IonCol size="1">
                <IonButton>1 an</IonButton>
              </IonCol>
            </IonRow>
          </IonCol>
          <IonCol size="5">
            <IonRow>
              <img src={Storyset} alt="logo" className="logo3"></img>
            </IonRow>

            <IonRow>
              <div className="border configRecap">
                <IonCol>
                  <div className="titleRecap">
                    <IonLabel className="secondTitleConfigServ">
                      Récapitulatif de votre commande
                    </IonLabel>
                  </div>

                  <IonRow>
                    <IonLabel className="payTitleConfigServ">
                      Serveur Minecraft
                    </IonLabel>
                  </IonRow>

                  <IonCol>
                    <IonRow className="alignItemRecap textLabelFormServRecap">
                      <IonLabel>Version Serveur et Modpack : 17.8.94</IonLabel>
                      <IonLabel>0.23€</IonLabel>
                    </IonRow>
                    <IonRow className="alignItemRecap textLabelFormServRecap">
                      <IonLabel>Nombre de coeurs : 3</IonLabel>
                      <IonLabel>0.78€</IonLabel>
                    </IonRow>
                    <IonRow className="alignItemRecap textLabelFormServRecap">
                      <IonLabel>Nombre de GB RAM : 4</IonLabel>
                      <IonLabel>0.89€</IonLabel>
                    </IonRow>
                    <IonRow className="alignItemRecap textLabelFormServRecap">
                      <IonLabel>Taille du disque : 256 MB</IonLabel>
                      <IonLabel>0.65€</IonLabel>
                    </IonRow>
                    <IonRow className="alignItemRecap textLabelFormServRecap">
                      <IonLabel>Durée : 1 mois</IonLabel>
                      <IonLabel>1€</IonLabel>
                    </IonRow>
                    <IonRow className="alignItemRecap textLabelFormServRecap">
                      <IonLabel>Total</IonLabel>
                      <IonLabel>3.00€</IonLabel>
                    </IonRow>
                  </IonCol>

                  <IonRow>
                    <IonItem lines="none">
                      <IonCheckbox className="ion-checkbox"></IonCheckbox>
                      <IonLabel>
                        Activation du renouvellement automatique
                      </IonLabel>
                    </IonItem>
                  </IonRow>
                  <IonRow className="endPricePay">
                    <IonLabel className="payTitleConfigServ">3.00€</IonLabel>
                    <IonButton>Acheter</IonButton>
                  </IonRow>
                </IonCol>
              </div>
            </IonRow>
          </IonCol>
        </IonRow>
      </form>
    </div>
  );
}
