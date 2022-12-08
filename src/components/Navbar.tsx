import './Navbar.css';
import Logo from "../assets/svg/logo.svg";
import DrapeauFR from "../assets/svg/drapeauFR.svg";
import { IonButton,IonToolbar, IonHeader, IonText,IonItem, IonList, IonSelect, IonSelectOption, IonImg  } from '@ionic/react';

interface ContainerProps { }

const Navbar: React.FC<ContainerProps> = () => {
  return (
    <div>
      <IonHeader class="ion-no-border">
      <IonToolbar>
        <IonButton slot="start" fill="clear" className='image'>
          <img src={Logo} height={70}/>
        </IonButton>
        <IonText slot="end">Projet</IonText>
        <IonText slot="end">Produits</IonText>
        <IonText slot="end">FAQ</IonText>
        <IonList slot="end">
          <IonItem>
            <img src={DrapeauFR} height={20} />
            <IonSelect className="ion" interface="popover" placeholder="" disabled>
              <IonSelectOption value="fr">FR</IonSelectOption>
              <IonSelectOption value="en">EN</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
        
        <IonButton color="primary" className='button' slot="end">Login</IonButton>
        
      </IonToolbar>
      </IonHeader>
      
    
    </div>

  );
};

export default Navbar;