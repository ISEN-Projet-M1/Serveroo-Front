import {
    createAnimation,
    IonButton,
    IonCol,
    IonContent,
    IonPage,
    IonRow,
    useIonViewDidEnter,
    withIonLifeCycle,
} from '@ionic/react';
import Navbar from '../../components/Navbar';
import './Home.css';
import Footer from '../../components/Footer';
import servElmt from '../../assets/svg/storyset/servElmt.svg';
import doubleFleche from '../../assets/svg/icons/doublefleche.svg';
import serv from '../../assets/svg/storyset/serv.svg';
import servWork from '../../assets/svg/storyset/servWork.svg';
import servStatus from '../../assets/svg/storyset/servStatus.svg';
import designerGirl from '../../assets/svg/storyset/designerGirl.svg';

const Home: React.FC = () => {
    useIonViewDidEnter(() => {
        createAnimation()
            .addElement(document.querySelector('.doubleFleche')!)
            .duration(1000)
            .direction('alternate')
            .iterations(Infinity)
            .keyframes([
                { offset: 0, transform: 'translateY(0px)', opacity: '1' },
                {
                    offset: 1, transform: 'translateY(25px)', opacity: '1'
                }
            ]).play();
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
                                Nous proposons une solution pour <span className='colorOrange'>héberger vos projets</span> digitaux sur nos propres serveurs
                            </p>
                            <p className='explainSubTitle'>
                                Gérez vos serveurs au même endroit <span className='colorOrange'>dès 1€ </span>
                                par semaine !
                            </p>
                            <IonButton color="primary" className='offer' ><span className='offerTxt'>Découvrir l’offre</span></IonButton>
                        </IonCol>


                        <div>
                            <img src={servElmt} className='imgFirstContent'/>
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
                            <img src={serv} className='imgSecondContent'/>
                            <p className='titleProjetPart'>Nous possèdons nos propres serveurs et vos données sont sécurisées</p>
                            <p className='textProjetPart'>Nous avons nos propres serveurs physiques stockés en France dans une salle de serveur dédié. Nous assurons le contrôle sur vos données et respectons la loi française</p>
                            <p className='linkOffer'>Je découvre l’offre</p>
                        </IonCol>
                        <IonCol>
                            <img src={servStatus} className='imgSecondContent'/>
                            <p className='titleProjetPart'>Gerez vos serveur en un clic directement sur le web</p>
                            <p className='textProjetPart'>Grâce à un pannel de contrôle détaillé et complet vous pouvez gérer votre produit comme bon vous semble directement en ligne</p>
                            <p className='linkOffer'>Je découvre l’offre</p>
                        </IonCol>
                        <IonCol>
                            <img src={servWork} className='imgSecondContent'/>
                            <p className='titleProjetPart'>Penser pour les étudiants fait par des étudiants</p>
                            <p className='textProjetPart'>Tu es étudiant et tu souhaites héberger ton projet ou tu souhaites acquérir un serveur à bas prix : cette solution est faite pour toi</p>
                            <p className='linkOffer'>Je découvre l’offre</p>
                        </IonCol>


                    </IonRow>
                </div>

                <div className='thirdContent'>
                    <IonRow class='rowThirdContent'>
                        <img src={designerGirl} className='imgThirdContent'/>
                        <IonCol className='textThirdContent'>
                            <p className='titleThirdContent'>Découvre nos différents serveurs et trouve celui qui te correspond</p>
                            <IonButton color="primary" className='products'><span className='productsText'>Voir les produits</span></IonButton>
                        </IonCol>
                    </IonRow>
                </div>

                <Footer />
            </IonContent>

        </IonPage>
    );
};

export default withIonLifeCycle(Home);
