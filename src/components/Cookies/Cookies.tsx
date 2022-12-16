import { IonButton, IonCol, IonRow } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import './Cookies.css';

interface ContainerProps { }

const Cookies: React.FC<ContainerProps> = () => {
    const { i18n, t } = useTranslation();

    function closeCookies() {
        const cookiesBar = document.getElementById('cookiesBar');
        cookiesBar?.setAttribute('hidden', 'true');
    }
    return (
        <div className='cookiesBar' id='cookiesBar'>
            <IonRow>
                <IonCol size='4'>
                    <p className='titleCookies'>{t('cookies.cookiePolicy')}</p>
                    <p className='titleSecondCookies'>{t('cookies.cookie1')}</p>
                </IonCol>
                <IonCol size='4'>
                    <p className='titleSecondCookies'>{t('cookies.cookie2')}</p>
                </IonCol>
                <IonCol size='4'>

                    <IonRow className='rowBtnCookies'>
                        <IonButton color="primary" className='offer' ><span className='offerTxt'>{t('cookies.accept')}</span></IonButton>
                        <div className='hrefClick' >
                            <IonButton color="primary" className='offer' onClick={closeCookies} ><span className='offerTxt'>{t('cookies.reject')}</span></IonButton>
                        </div>

                    </IonRow>
                </IonCol>
            </IonRow>
        </div>

    );
};

export default Cookies;