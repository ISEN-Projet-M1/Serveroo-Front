import './Navbar.css';
import Logo from "../../assets/svg/logo.svg";
import DrapeauFR from "../../assets/svg/drapeauFR.svg";
import React, { useRef, useState } from 'react';
import { IonButton, IonToolbar, IonHeader, IonItem, IonList, IonSelect, IonSelectOption, IonModal, IonSegment, IonSegmentButton, IonLabel, IonRow, IonCol, IonGrid, IonIcon, IonText } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import Inscription from '../Inscription/Inscription';
import Connexion from '../Connexion/Connexion';
import { useHistory } from 'react-router-dom';
import signOut from '../../assets/svg/icons/signOut.svg';

import { useTranslation } from 'react-i18next';

interface ContainerProps { }

const Navbar: React.FC<ContainerProps> = () => {
  const { i18n } = useTranslation();
  const languages = ['en', 'fr']; // List of available languages

  const [choix, setChoix] = useState("inscription");
  const modal = useRef<HTMLIonModalElement>(null);

  function DisplayComponent(e: any) {
    e.detail.value === "inscription" ? setChoix("inscription") : setChoix("connexion");
  }

  const history = useHistory();

  const routeChange = (path: string) => {
    history.push(path);
  }

  function ChoixInscriptionConnexion() {
    return ((choix === "inscription") ? (<Inscription></Inscription>) : (<Connexion></Connexion>));
  }

  function goToProject() {
    const secondContent = document.querySelector('.secondContent');
    secondContent?.scrollIntoView({ behavior: 'smooth' });
  }

  function goToFAQ() {
    const thirdContent = document.querySelector('.fiveContent');
    thirdContent?.scrollIntoView({ behavior: 'smooth' });
  }

  async function createModal() {
    if (modal.current) {
      modal.current.present()
    }
  }

  function dismissModal() {
    modal.current?.dismiss();
  }

  function changeLang() {
    let langue = 'en';
    i18n.changeLanguage(langue === 'fr' ? 'fr' : 'en');
  }

  return (
    <div className='nabbar'>
      <IonHeader class="ion-no-border" >
        <IonToolbar>
          <IonButton slot="start" fill="clear" className='image' onClick={e => routeChange('/home')}>
            <img src={Logo} height={70} alt="logo" className='logoNavbar' />
          </IonButton>
          <IonText slot="end" onClick={goToProject} className='btnText'>Projet</IonText>
          <IonText slot="end" onClick={e => routeChange('product')} className='btnText' >Produits</IonText>
          <IonText slot="end" onClick={goToFAQ} className='btnText'>FAQ</IonText>
          <IonText slot="end" onClick={changeLang} className='btnText'>CHANGE</IonText>
          <IonList slot="end">
            <IonItem>
              <img src={DrapeauFR} height={20} alt="drapeauFR" />
              <IonSelect className="ion" interface="popover" placeholder="fr">
                <IonSelectOption value="fr" onClick={() => (i18n.changeLanguage('fr'), console.log("en"))}>FR</IonSelectOption>
                <IonSelectOption value="en" onClick={() => ( console.log("en"), i18n.changeLanguage('en'), console.log("en"))}>EN</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
          {/**/}

          <IonButton color="primary" className='login' slot="end" expand="block" onClick={createModal}><span className='btn'>Login</span></IonButton>
          <IonModal trigger="open-modal" ref={modal}>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonSegment value={choix} onIonChange={DisplayComponent}>
                    <IonSegmentButton value="inscription">
                      <IonLabel>Inscription</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="connexion">
                      <IonLabel>Connexion</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
                <IonCol className='droite'>
                  <IonIcon className='closePopUp ion-icon' size="large" src={closeOutline} onClick={dismissModal}> </IonIcon>
                </IonCol>
              </IonRow>
              <ChoixInscriptionConnexion></ChoixInscriptionConnexion>
            </IonGrid>
          </IonModal>

          {/* 
          <IonText slot='end' className='pseudo' onClick={e => routeChange('/profile')}>Pilou</IonText>
          <img slot='end' src={signOut} className='imgSignOut' height={40}/>*/}
        </IonToolbar>
      </IonHeader>
    </div>
  );
};



export default Navbar;
