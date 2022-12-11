import './Navbar.css';
import Logo from "../assets/svg/logo.svg";
import DrapeauFR from "../assets/svg/drapeauFR.svg";
import React, {useState } from 'react';
import { IonButton,IonToolbar, IonHeader,IonItem, IonList, IonSelect, IonSelectOption, IonModal, IonSegment, IonSegmentButton, IonLabel,IonRow,IonCol,IonGrid,IonIcon,IonText} from '@ionic/react';
import {closeOutline} from 'ionicons/icons';
import Inscription from '../components/Inscription';
import Connexion from '../components/Connexion';

interface ContainerProps { }

const Navbar: React.FC<ContainerProps> = () => {
  const [choix, setChoix] = useState("inscription");
  
  const [myModal, setMyModal] = useState({isOpen :false});
  function DisplayComponent(e: any){
    if(e.detail.value === "inscription"){
      setChoix("inscription");
    }
    else if(e.detail.value === "connexion"){
     setChoix("connexion");
    
    }
  }

  function ChoixInscriptionConnexion() {
    return ((choix === "inscription") ? (<Inscription></Inscription>) : (<Connexion></Connexion>));
  }

  function goToProject(){
    const secondContent = document.querySelector('.secondContent');
        secondContent?.scrollIntoView({ behavior: 'smooth' });
  }

  function goToFAQ(){
    const thirdContent = document.querySelector('.rowfiveContent');
        thirdContent?.scrollIntoView({ behavior: 'smooth' });
  }

  function goToProducts(){
    document.location.href = '/test';
  }

  return (
    <div className='nabbar'>
      <IonHeader class="ion-no-border" >
        <IonToolbar>
          <IonButton slot="start" fill="clear" className='image' href='/Home'>
            <img src={Logo} height={70} alt="logo" className='logoNavbar'/>
          </IonButton>
          <IonText slot="end" onClick={goToProject} className='btnText'>Projet</IonText>
          <IonText slot="end" onClick={goToProducts} className='btnText' >Produits</IonText>
          <IonText slot="end" onClick={goToFAQ} className='btnText'>FAQ</IonText>
          <IonList slot="end">
            <IonItem>
              <img src={DrapeauFR} height={20} alt="drapeauFR" />
              <IonSelect className="ion" interface="popover" placeholder="" disabled>
                <IonSelectOption value="fr">FR</IonSelectOption>
                <IonSelectOption value="en">EN</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
        
          <IonButton color="primary" className='login' slot="end" onClick={()=> setMyModal({isOpen:true})} ><span className='btn'>Login</span></IonButton>
          <IonModal isOpen={myModal.isOpen}>
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
                  <IonIcon className='closePopUp' size="large" src={closeOutline} onClick={()=> setMyModal({isOpen:false})}></IonIcon>
                </IonCol>
              </IonRow>
              
              <ChoixInscriptionConnexion></ChoixInscriptionConnexion>
            </IonGrid>            
          </IonModal>         
              
        </IonToolbar>
      </IonHeader>
      
    
    </div>

  );
};



export default Navbar;