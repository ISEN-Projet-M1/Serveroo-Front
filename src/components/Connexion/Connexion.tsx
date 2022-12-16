
import './Connexion.css';
import { logoGoogle } from 'ionicons/icons';
import { ReactSession } from 'react-client-session';
import img from '../../assets/svg/storyset/password.svg';
import { IonGrid, IonRow, IonCol,IonInput, IonLabel, IonItem, IonCheckbox, IonButton,IonIcon} from '@ionic/react';
import {useEffect} from 'react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ContainerProps { }

const Connexion: React.FC<ContainerProps> = () => {
    const { i18n, t } = useTranslation();
    
    const [mail, setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [stayConnected, setStayConnected] = useState<boolean>(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(mail,password,stayConnected);

        const data = {
            "mail": mail,
            "password": password,
            "stayConnect": stayConnected,
            "sessionId": "rfezv324F"
        }

        //use fetch to send data to the server
        fetch(process.env.REACT_APP_API_URL+'/api/connect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            console.log(response);
            //Get the cookie from the response
            
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            //check the status of the response
            if(data.state === 200){
                localStorage.clear();
                ReactSession.setStoreType("localStorage");
                ReactSession.set("session", data.session);
                ReactSession.set("login", true);
            }else{
                //if error, display the error message
                alert("votre mail ou mot de passe est incorrect");
            }
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        }
        );

        
    };

    useEffect(() => {
        const keyDownHandler = (e: any) => {
            if (e.key === 'Enter') {
                handleSubmit(e);
            }
        };
        window.addEventListener('keydown', keyDownHandler);
        return () => {
            window.removeEventListener('keydown', keyDownHandler);
        };
    }, []);


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <IonGrid>
            <IonRow>
                <IonCol size='12'>
                    <IonItem lines='none'>
                        <IonLabel position="stacked" className='label'>
                            <IonRow>{t('connexion.email')}<p className='rouge'>*</p></IonRow></IonLabel>
                        <IonInput className='ion-input' type='email' placeholder={t("connexion.exempleEMail") ?? ""} value={mail} onIonChange={(e) => setMail(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                    
            </IonRow>
            <IonRow>
                <IonCol size='12'>
                    <IonItem lines='none'>
                        <IonLabel position="stacked" className='label'>
                            <IonRow>{t('connexion.password')}<p className='rouge'>*</p></IonRow></IonLabel>
                        <IonInput className='ion-input' type='password' placeholder={t("connexion.password") ?? ""}  onIonChange={(e) => setPassword(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCol>
                    
            </IonRow>
            <IonRow>
                <IonCol size='12'>
                    <IonItem lines='none'>
                        <IonCheckbox className='ion-checkbox' value={stayConnected}  onIonChange={(e) => setStayConnected(e.detail.value!)}></IonCheckbox>
                        <IonLabel className='connexion'>{t('connexion.log')}</IonLabel>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size='12'>
                   <img className='imgConnexion' src={img} alt="storyset"/>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonButton expand="block" color="light" className='btn2'><IonIcon src={logoGoogle} className="google ion-icon"></IonIcon>{t('connexion.google')}</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton expand="block" color="primary" type='submit'>{t('connexion.login')}</IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
        </form>
    </div>
  );
};

export default Connexion;