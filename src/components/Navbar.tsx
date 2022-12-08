import './Navbar.css';
import Logo from "../assets/svg/logo.svg";
import DrapeauFR from "../assets/svg/drapeauFR.svg";
import { IonButton, IonImg, IonRow, IonGrid, IonCol, IonToolbar, IonHeader, IonText, IonAccordion, IonItem, IonLabel, IonAccordionGroup } from '@ionic/react';

interface ContainerProps { }

const Navbar: React.FC<ContainerProps> = () => {
  return (
    <div className="start">
      <IonHeader>
      <IonToolbar>
        <IonButton slot="start" fill="clear">
          <img src={Logo} height="100%"/>
        </IonButton>
        <IonText slot="end">Projet</IonText>
        <IonText slot="end">Produits</IonText>
        <IonText slot="end">FAQ</IonText>
        <IonAccordionGroup slot="end">
          <IonAccordion>
            <IonItem slot="header" color="light">
              <IonImg src={DrapeauFR}/>
            </IonItem>
              <div className="ion-padding accordeon" slot="content">
                First Content
              </div>
          </IonAccordion>
        </IonAccordionGroup>
        
        <IonButton color="primary" slot="end">Login</IonButton>
        
      </IonToolbar>
      </IonHeader>
      
    
    </div>

  );
};

export default Navbar;