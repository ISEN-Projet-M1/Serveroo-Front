import './Navbar.css';
import Logo from "../assets/svg/logo.svg";
import DrapeauFR from "../assets/svg/drapeauFR.svg";
import { hasFlag } from 'country-flag-icons'
import { IonButton,IonToolbar, IonHeader, IonText,IonItem, IonList, IonSelect, IonSelectOption, IonImg  } from '@ionic/react';

interface ContainerProps { }

const Navbar: React.FC<ContainerProps> = () => {
  return (
    <div>
      <IonHeader>
      <IonToolbar>
        <IonButton slot="start" fill="clear">
          <img src={Logo} height={75}/>
        </IonButton>
        <IonText slot="end">Projet</IonText>
        <IonText slot="end">Produits</IonText>
        <IonText slot="end">FAQ</IonText>
        <IonList slot="end">
          <IonItem>
            <IonSelect className="ion" interface="popover" placeholder="FR">
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