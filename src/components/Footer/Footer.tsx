import './Footer.css';
import Logo from "../../assets/svg/logo.svg";
import DrapeauFR from "../../assets/svg/drapeauFR.svg";
import DrapeauEN from "../../assets/svg/drapeauEN.svg";
import Paiement from "../../assets/svg/footer/paiement.svg";
import Insta from "../../assets/svg/footer/Instagram.svg";
import Facebook from "../../assets/svg/footer/Facebook.svg";
import Linkedin from "../../assets/svg/footer/Linkedin.svg";
import Twitter from "../../assets/svg/footer/Twitter.svg";
import Youtube from "../../assets/svg/footer/Youtube.svg";
import { IonCol, IonItem, IonList, IonRow, IonSelect, IonSelectOption, SelectChangeEventDetail, useIonViewDidEnter } from '@ionic/react';

interface ContainerProps { }

const Navbar: React.FC<ContainerProps> = () => {

    return (
        <div className='footer'>
            <IonRow>
                <IonCol>
                    <IonRow className='logoLang'>
                        <img src={Logo} height={70} alt="logo" />
                    </IonRow>
                    <p className='title desc'>Haec enim est tyrannorum vita nimirum, in qua nulla fides, nulla caritas, nulla stabilis benevolentiae potest esse fiducia, omnia semper suspecta atque sollicita, nullus locus amicitiae.
                    </p>
                    <p className='text'>Moyens de paiement</p>
                    <div>
                        <img src={Paiement} height={50} alt="paiement" className='paiement' />
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
                    <p className='title desc'>Copyright 2022/2023 serveroo.com</p>
                </div>
                <div className='social'>
                    <img src={Facebook} height={70} alt="facebook" className='btnSocial' />
                    <img src={Linkedin} height={70} alt="linkedin" className='btnSocial' />
                    <img src={Insta} height={70} alt="instagram" className='btnSocial' />
                    <img src={Twitter} height={70} alt="twitter" className='btnSocial' />
                    <img src={Youtube} height={70} alt="youtube" className='btnSocial' />
                </div>


            </IonRow>
        </div>

    );
};

export default Navbar;