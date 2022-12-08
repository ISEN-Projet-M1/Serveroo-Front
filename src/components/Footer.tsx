import './Footer.css';
import Logo from "../assets/svg/logo.svg";
import Paiement from "../assets/svg/paiement.svg";
import Insta from "../assets/svg/Instagram.svg";
import Facebook from "../assets/svg/Facebook.svg";
import Linkedin from "../assets/svg/Linkedin.svg";
import Twitter from "../assets/svg/Twitter.svg";
import Youtube from "../assets/svg/Youtube.svg";
import { IonAccordion, IonAccordionGroup, IonButton, IonCol, IonFooter, IonImg, IonItem, IonRow } from '@ionic/react';

interface ContainerProps { }

const Navbar: React.FC<ContainerProps> = () => {
    return (
        <div>
            <IonRow>
                <IonCol>
                    <img src={Logo} height={70} />
                    <p className='title desc'>Haec enim est tyrannorum vita nimirum, in qua nulla fides, nulla caritas, nulla stabilis benevolentiae potest esse fiducia, omnia semper suspecta atque sollicita, nullus locus amicitiae.
                    </p>
                    <p className='text'>Moyens de paiement</p>
                    <div>
                        <img src={Paiement} height={50} />
                    </div>


                </IonCol>

                <IonCol className='firstelmt'>
                    <p className='title'>Hébérgement</p>
                    <div className='text'>
                        <p>est, ut arbitror, explanare  qua</p>
                        <p>est, ut arbitror, explanare  qua</p>
                        <p>est, ut arbitror, explanare  qua</p>
                        <p>est, ut arbitror, explanare  qua</p>
                        <p>est, ut arbitror, explanare  qua</p>
                    </div>
                </IonCol>

                <IonCol>
                    <p className='title'>Légal</p>
                    <div className='text'>
                        <p>Mention légales</p>
                        <p>Conditions générales</p>
                        <p>Conditions de ventes</p>
                        <p>Cookies</p>
                    </div>
                </IonCol>

                <IonCol>
                    <p className='title'>Contact</p>
                    <div className='text'>
                        <p>Siège social</p>
                        <p>41 Bd Vauban, 59800 Lille
                            France
                        </p>
                        <p>serveroo.contact@gmail.com</p>
                    </div>
                </IonCol>
            </IonRow>

            <IonRow className='lastelmt'>
                <div>
                    <p className='title'>Copyright 2022/2023 serveroo.com</p>
                </div>
                <div className='social'>
                    <img src={Facebook} />
                    <img src={Linkedin} />
                    <img src={Insta} />
                    <img src={Twitter} />
                    <img src={Youtube} />
                </div>


            </IonRow>
        </div>

    );
};

export default Navbar;