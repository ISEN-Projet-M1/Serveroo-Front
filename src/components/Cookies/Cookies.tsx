import { IonButton, IonCol, IonRow } from '@ionic/react';
import './Cookies.css';

interface ContainerProps { }

const Cookies: React.FC<ContainerProps> = () => {

    function closeCookies() {
        const cookiesBar = document.getElementById('cookiesBar');
        cookiesBar?.setAttribute('hidden', 'true');
    }
    return (
        <div className='cookiesBar' id='cookiesBar'>
            <IonRow>
                <IonCol size='4'>
                    <p className='titleCookies'>Politique en matière de cookies </p>
                    <p className='titleSecondCookies'>Nous et nos partenaires stockons et/ou accédons à des informations sur un appareil, telles que des identifiants uniques dans des cookies pour traiter les données personnelles. Vous pouvez accepter ou gérer vos choix en cliquant ci-dessous ou à tout moment dans la page de la politique de confidentialité. Ces choix seront signalés à nos partenaires et n'affecteront pas les données de navigation.</p>
                </IonCol>
                <IonCol size='4'>
                    <p className='titleSecondCookies'>Nous et nos partenaires traitons les données pour fournir :
                        Utiliser des données de géolocalisation précises. Analyser activement les caractéristiques des appareils pour les identifier. Stocker et/ou accéder à des informations sur un appareil. Sélectionner des publicités de base. Mesurer la performance du contenu. Sélectionner des annonces personnalisées. Créer un profil d'annonces personnalisées. Sélectionner du contenu personnalisé. Créez un profil de contenu personnalisé. Appliquer une étude de marché pour générer des informations sur l'audience. Développer et améliorer les produits. Mesurer la performance des annonces.</p>
                </IonCol>
                <IonCol size='4'>
                    <div className='hrefClick' >
                        <p className='clickBtnCookies' onClick={closeCookies}>Continuer sans accepter</p>
                    </div>

                    <IonRow className='rowBtnCookies'>
                        <IonButton color="primary" className='offer' ><span className='offerTxt'>Accepter</span></IonButton>
                        <IonButton color="primary" className='offer' ><span className='offerTxt'>Refuser</span></IonButton>

                    </IonRow>
                </IonCol>
            </IonRow>
        </div>

    );
};

export default Cookies;