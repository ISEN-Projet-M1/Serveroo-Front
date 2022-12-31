import "./Navbar.css";
import Logo from "../../assets/svg/logo.svg";
import DrapeauFR from "../../assets/svg/drapeauFR.svg";
import DrapeauEN from "../../assets/svg/drapeauEN.svg";
import React, { useRef, useState } from "react";
import {
  IonButton,
  IonToolbar,
  IonHeader,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonModal,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonRow,
  IonCol,
  IonGrid,
  IonIcon,
  IonText,
  SelectChangeEventDetail,
  useIonViewDidEnter,
  IonContent,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import Inscription from "../Inscription/Inscription";
import Connexion from "../Connexion/Connexion";
import { useHistory } from "react-router-dom";
import signOut from "../../assets/svg/icons/signOut.svg";
import { ReactSession } from "react-client-session";

import { useTranslation } from "react-i18next";
import { IonSelectCustomEvent } from "@ionic/core";
import { getCurrentSession } from "../../shared/index";

interface ContainerProps {}

const Navbar: React.FC<ContainerProps> = () => {
  useIonViewDidEnter(() => {
    setdrapNavBar();
    setSession();
  });

  const { i18n, t } = useTranslation();

  const [choix, setChoix] = useState("inscription");
  let [user, setUser] = useState<any>([]);
  const modal = useRef<HTMLIonModalElement>(null);

  function setSession() {
    let session = getCurrentSession();
    if (session) {
      setUser(session);
    }
  }

  function DisplayComponent(e: any) {
    e.detail.value === "inscription"
      ? setChoix("inscription")
      : setChoix("connexion");
  }

  const history = useHistory();

  const routeChange = (path: string) => {
    history.push(path);
  };

  function ChoixInscriptionConnexion() {
    return choix === "inscription" ? (
      <Inscription></Inscription>
    ) : (
      <Connexion></Connexion>
    );
  }

  function goToProject() {
    const secondContent = document.querySelector(".secondContent");
    secondContent?.scrollIntoView({ behavior: "smooth" });
  }

  function goToFAQ() {
    const thirdContent = document.querySelector(".fiveContent");
    thirdContent?.scrollIntoView({ behavior: "smooth" });
  }

  async function createModal() {
    let modal2 = document.getElementById("ion-overlay-1");
    modal2?.setAttribute("style", "display: flex");
    if (modal.current) {
      modal.current.present();
    }
  }

  function dismissModal() {
    modal.current?.dismiss();
  }

  function changeLang(
    _value: IonSelectCustomEvent<SelectChangeEventDetail<any>>
  ) {
    const txt = document.getElementById("lang");
    txt?.setAttribute("value", "");
    i18n.changeLanguage(_value.detail.value === "fr" ? "fr" : "en");
    localStorage.setItem("i18nextLng", _value.detail.value);
    setdrapNavBar();
  }

  function setdrapNavBar() {
    let drapeauFR = document.getElementById("drapeauFR");
    let drapeauEN = document.getElementById("drapeauEN");
    let txt = document.getElementById("btnFR");
    let txt2 = document.getElementById("btnEN");
    if (localStorage.getItem("i18nextLng") === "fr") {
      drapeauFR?.removeAttribute("hidden");
      drapeauEN?.setAttribute("hidden", "");
      //disable button
      txt2?.removeAttribute("disabled");
      txt?.setAttribute("disabled", "");
    } else {
      drapeauFR?.setAttribute("hidden", "");
      drapeauEN?.removeAttribute("hidden");
      txt?.removeAttribute("disabled");
      txt2?.setAttribute("disabled", "");
    }
  }

  function disconnect() {
    //remove session
    ReactSession.setStoreType("localStorage");
    ReactSession.set("login", false);

    //remove session from local storage
    localStorage.removeItem("__react_session__");
    window.location.href = "/home";
  }

  return (
    <div className="nabbar">
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButton
            slot="start"
            fill="clear"
            className="image"
            onClick={(e) => routeChange("/home")}
          >
            <img src={Logo} height={70} alt="logo" className="logoNavbar" />
          </IonButton>
          <IonText slot="end" onClick={goToProject} className="btnText">
            {t("navbar.projet")}
          </IonText>
          <IonText
            slot="end"
            onClick={(e) => window.location.href="/product"/*routeChange("product")*/} //TODO: change route prb refresh avec la session
            className="btnText"
          >
            {t("navbar.produit")}
          </IonText>
          <IonText slot="end" onClick={goToFAQ} className="btnText">
            {t("navbar.faq")}
          </IonText>
          <IonList slot="end">
            <IonItem>
              <img src={DrapeauFR} height={20} alt="drapeauFR" id="drapeauFR" />
              <img
                src={DrapeauEN}
                height={20}
                alt="drapeauEN"
                id="drapeauEN"
                hidden
              />
              <IonSelect
                className="ion"
                interface="popover"
                onIonChange={(value) => changeLang(value)}
                id="lang"
              >
                <IonSelectOption value="fr" id="btnFR">
                  FR
                </IonSelectOption>
                <IonSelectOption value="en" id="btnEN">
                  EN
                </IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>

          <IonButton
            color="primary"
            className="login disconnect"
            slot="end"
            expand="block"
            onClick={createModal}
          >
            <span className="btn">{t("navbar.login")}</span>
          </IonButton>

          <IonModal trigger="open-modal" ref={modal}>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonSegment value={choix} onIonChange={DisplayComponent}>
                    <IonSegmentButton value="inscription">
                      <IonLabel>{t("inscription.inscription")}</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="connexion">
                      <IonLabel>{t("inscription.connection")}</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
                <IonCol className="droite">
                  <IonIcon
                    className="closePopUp ion-icon"
                    size="large"
                    src={closeOutline}
                    onClick={dismissModal}
                  >
                    {" "}
                  </IonIcon>
                </IonCol>
              </IonRow>
              <ChoixInscriptionConnexion></ChoixInscriptionConnexion>
            </IonGrid>
          </IonModal>

          <div className="connect" hidden slot="end">
            <IonText
              slot="end"
              className="pseudo"
              onClick={(e) => routeChange("/profile")}
            >
              {user?.session?.firstname}
            </IonText>
            <img
              slot="end"
              src={signOut}
              className="imgSignOut"
              height={40}
              onClick={(e) => {disconnect();}}
              alt="signOut"
            />
          </div>
        </IonToolbar>
      </IonHeader>
    </div>
  );
};

export default Navbar;
