import {
    createAnimation,
    IonAccordion,
    IonAccordionGroup,
    IonButton,
    IonCol,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonPage,
    IonRow,
    useIonViewDidEnter,
} from '@ionic/react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import servElmt from '../../assets/svg/storyset/servElmt.svg';
import doubleFleche from '../../assets/svg/icons/doublefleche.svg';
import serv from '../../assets/svg/storyset/serv.svg';
import servWork from '../../assets/svg/storyset/servWork.svg';
import servStatus from '../../assets/svg/storyset/servStatus.svg';
import designerGirl from '../../assets/svg/storyset/designerGirl.svg';
import { logoGooglePlaystore } from 'ionicons/icons';
import mobile from '../../assets/svg/storyset/mobile.svg';
import question from '../../assets/svg/storyset/question.svg';
import Cookies from '../../components/Cookies/Cookies';
import React from "react";

import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
    const { t } = useTranslation();

    useIonViewDidEnter(() => {
        createAnimation()
            .addElement(document.querySelector('.doubleFleche')!)
            .duration(1000)
            .direction('alternate')
            .iterations(Infinity)
            .keyframes([
                {offset: 0, transform: 'translateY(0px)', opacity: '1'},
                {
                    offset: 1, transform: 'translateY(25px)', opacity: '1'
                }
            ]).play().then();
    });

    function scrollToSecond() {
        const secondContent = document.querySelector('.secondContent');
        secondContent?.scrollIntoView({ behavior: 'smooth' });
    }



    return (
        <IonPage id='page'>
            <IonContent fullscreen>
                <Navbar />

                <div className='firstContent'>
                    <IonRow class='rowfirstContent'>
                        <IonCol>
                            <p className='explain'>
                                Nous proposons une solution pour <span className='colorOrange'>h??berger vos projets</span> digitaux sur nos propres serveurs
                            </p>
                            <p className='explainSubTitle'>
                                G??rez vos serveurs au m??me endroit <span className='colorOrange'>d??s 1??? </span>
                                par semaine !
                            </p>
                            <IonButton color="primary" className='offer' ><span className='offerTxt'>D??couvrir l???offre</span></IonButton>
                        </IonCol>


                        <div>
                            <img src={servElmt} className='imgFirstContent' />
                        </div>

                    </IonRow>

                    <img src={doubleFleche} className='doubleFleche' onClick={scrollToSecond} />
                </div>

                <div className='secondContent'>
                    <div className='divTitle'>
                        <p className='divTitleText'>Objectifs</p>
                        <p className='projetText'>Notre projet</p>
                    </div>
                    <IonRow class='rowSecondContent'>
                        <IonCol className='projetPart'>
                            <img src={serv} className='imgSecondContent' />
                            <p className='titleProjetPart'>Nous poss??dons nos propres serveurs et vos donn??es sont s??curis??es</p>
                            <p className='textProjetPart'>Nous avons nos propres serveurs physiques stock??s en France dans une salle de serveur d??di??. Nous assurons le contr??le sur vos donn??es et respectons la loi fran??aise</p>
                            <p className='linkOffer'>Je d??couvre l???offre</p>
                        </IonCol>
                        <IonCol>
                            <img src={servStatus} className='imgSecondContent' />
                            <p className='titleProjetPart'>Gerez vos serveur en un clic directement sur le web</p>
                            <p className='textProjetPart'>Gr??ce ?? un pannel de contr??le d??taill?? et complet vous pouvez g??rer votre produit comme bon vous semble directement en ligne</p>
                            <p className='linkOffer'>Je d??couvre l???offre</p>
                        </IonCol>
                        <IonCol>
                            <img src={servWork} className='imgSecondContent' />
                            <p className='titleProjetPart'>Penser pour les ??tudiants fait par des ??tudiants</p>
                            <p className='textProjetPart'>Tu es ??tudiant et tu souhaites h??berger ton projet ou tu souhaites acqu??rir un serveur ?? bas prix : cette solution est faite pour toi</p>
                            <p className='linkOffer'>Je d??couvre l???offre</p>
                        </IonCol>


                    </IonRow>
                </div>

                <div className='thirdContent'>
                    <IonRow class='rowThirdContent'>
                        <img src={designerGirl} className='imgThirdContent' />
                        <IonCol className='textThirdContent'>
                            <p className='titleThirdContent'>D??couvre nos diff??rents serveurs et trouve celui qui te correspond</p>
                            <IonButton color="primary" className='products'><span className='productsText'>Voir les produits</span></IonButton>
                        </IonCol>
                    </IonRow>
                </div>

                <div className='fourthContent'>
                    <div className='divTitle'>
                        <p className='divTitleText'>Mobile</p>
                        <p className='projetText'>Installe l???application mobile pour g??rer ton serveur n???importe o?? et n???importe quand </p>
                    </div>
                    <IonRow class='rowfourthContent'>
                        <IonCol className='colFourthContent'>
                            <p className='titleFourthContent'>Installe l???application d??s maintenant !</p>
                            <IonButton color="primary" className='playStore'><IonIcon src={logoGooglePlaystore}></IonIcon><span className='playStoreTxt'> Installation sur Google Play</span></IonButton>
                        </IonCol>
                        <IonCol>
                            <img src={mobile} className='mobileImg' />
                        </IonCol>

                    </IonRow>
                </div>

                <div className='fiveContent'>
                    <div className='divTitle'>
                        <p className='divTitleText'>FAQ</p>
                    </div>
                    <IonRow className='rowfiveContent'>
                        <img src={question} className='' />
                        <IonCol className='colfiveContent' size='8'>
                            <p className='titleFiveContent'>Questions fr??quemment pos??es</p>
                            <IonAccordionGroup>
                                <IonAccordion value="first">
                                    <IonItem slot="header" color="light" className='titleFAQ'>
                                        <div className='question'>
                                            <IonLabel >Re explorabat adducta a locum ?</IonLabel>
                                        </div>
                                    </IonItem>
                                    <div className='ion-padding' slot="content">
                                        <IonRow>
                                            <a className='descFAQ'>wHanc regionem praestitutis celebritati diebus invadere parans dux ante edictus per solitudines Aboraeque amnis herbidas ripas, suorum indicio proditus, qui admissi flagitii metu exagitati ad praesidia descivere Romana. absque ullo egressus effectu deinde tabescebat immobilis.
                                            </a>
                                        </IonRow>

                                    </div>
                                </IonAccordion>
                                <IonAccordion value="second">
                                    <IonItem slot="header" color="light" className='titleFAQ'>
                                        <div className='question'>
                                            <IonLabel >Re explorabat adducta a locum ?</IonLabel>
                                        </div>
                                    </IonItem>
                                    <div className='ion-padding descFAQ' slot="content">
                                        Hanc regionem praestitutis celebritati diebus invadere parans dux ante edictus per solitudines Aboraeque amnis herbidas ripas, suorum indicio proditus, qui admissi flagitii metu exagitati ad praesidia descivere Romana. absque ullo egressus effectu deinde tabescebat immobilis.
                                    </div>
                                </IonAccordion>
                                <IonAccordion value="third">
                                    <IonItem slot="header" color="light" className='titleFAQ'>
                                        <div className='question'>
                                            <IonLabel >Re explorabat adducta a locum ?</IonLabel>
                                        </div>
                                    </IonItem>
                                    <div className='ion-padding descFAQ' slot="content">
                                        Hanc regionem praestitutis celebritati diebus invadere parans dux ante edictus per solitudines Aboraeque amnis herbidas ripas, suorum indicio proditus, qui admissi flagitii metu exagitati ad praesidia descivere Romana. absque ullo egressus effectu deinde tabescebat immobilis.
                                    </div>
                                </IonAccordion>
                                <IonAccordion value="four">
                                    <IonItem slot="header" color="light" className='titleFAQ'>
                                        <div className='question'>
                                            <IonLabel >Re explorabat adducta a locum ?</IonLabel>
                                        </div>
                                    </IonItem>
                                    <div className='ion-padding descFAQ' slot="content">
                                        Hanc regionem praestitutis celebritati diebus invadere parans dux ante edictus per solitudines Aboraeque amnis herbidas ripas, suorum indicio proditus, qui admissi flagitii metu exagitati ad praesidia descivere Romana. absque ullo egressus effectu deinde tabescebat immobilis.
                                    </div>
                                </IonAccordion>
                                <IonAccordion value="five">
                                    <IonItem slot="header" color="light" className='titleFAQ'>
                                        <div className='question'>
                                            <IonLabel >Re explorabat adducta a locum ?</IonLabel>
                                        </div>
                                    </IonItem>
                                    <div className='ion-padding descFAQ' slot="content">
                                        Hanc regionem praestitutis celebritati diebus invadere parans dux ante edictus per solitudines Aboraeque amnis herbidas ripas, suorum indicio proditus, qui admissi flagitii metu exagitati ad praesidia descivere Romana. absque ullo egressus effectu deinde tabescebat immobilis.
                                    </div>
                                </IonAccordion>
                            </IonAccordionGroup>
                        </IonCol>
                        <IonCol>
                        </IonCol>

                    </IonRow>
                </div>

                <Footer />
                <Cookies></Cookies>
            </IonContent>

        </IonPage>
    );
};

export default Home;    
