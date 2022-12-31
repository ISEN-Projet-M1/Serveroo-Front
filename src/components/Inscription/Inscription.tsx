import './Inscription.css';
import '../../assets/svg/login_inscription/google.svg';
import { logoGoogle } from 'ionicons/icons';

import { IonGrid, IonRow, IonCol, IonInput, IonLabel, IonItem, IonSelect, IonSelectOption, IonCheckbox, IonButton, IonIcon, useIonViewDidEnter, useIonToast } from '@ionic/react';
import React, { useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

interface ContainerProps { }

const Inscription: React.FC<ContainerProps> = () => {
    const { i18n, t } = useTranslation();
    const [present] = useIonToast();

    const ToastErreur = (position: 'top' | 'middle' | 'bottom', msg: any) => {
        present({
            message: msg,
            color: 'danger',
            position: position,
            duration: 1400,
        });
    };

    const ToastValidation = (position: 'top' | 'middle' | 'bottom', msg: any) => {
        present({
            message: msg,
            color: 'success',
            position: position,
            duration: 2800,
        });
    };

    const [name, setName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [mail, setMail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [schoolCompany, setSchoolCompany] = useState<string>("");
    const [conditions, setConditions] = useState<boolean>(false);
    const [informations, setInformations] = useState<boolean>(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(name, firstName, mail, password, passwordConfirm, status, schoolCompany, conditions, informations);

        if (name === "") {
            ToastErreur('top', 'Veuillez saisir un nom');
            return;
        } else if (firstName === "") {
            ToastErreur('top', 'Veuillez saisir un prénom');
            return;
        } else if (mail === "") {
            ToastErreur('top', 'Veuillez saisir un mail');
            return;
        } else if (password === "") {
            ToastErreur('top', 'Veuillez saisir un mot de passe');
            return;
        } else if (passwordConfirm === "") {
            ToastErreur('top', 'Veuillez confirmer votre mot de passe');
            return;
        } else if (password !== passwordConfirm) {
            ToastErreur('top', 'Les mots de passe ne correspondent pas');
            return;
        } else if (status === "") {
            ToastErreur('top', 'Veuillez choisir un statut');
            return;
        } else if (conditions === false) {
            ToastErreur('top', 'Veuillez accepter les conditions d\'utilisation');
            return;
        }
        else {

            const data = {
                "name": name,
                "firstname": firstName,
                "mail": mail,
                "password": password,
                "status": status,
                "school_company": schoolCompany,
                "newsletter": informations
            };


            fetch(process.env.REACT_APP_API_URL + '/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => {

                    return response.json();
                })
                .then(data => {
                    //check the status of the response
                    if (data.state === 200) {
                        ToastValidation('top', 'Vérifiez votre boîte mail pour valider votre compte');
                        e.target.reset();
                        let modal = document.getElementById('ion-overlay-1');
                        modal?.setAttribute('style', 'display: none');
                    } else if (data.state === 401) {
                        ToastErreur('top', 'Le compte existe déjà');
                    } else if (data.state === 500) {
                        ToastErreur('top', 'Erreur');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                }
                );
        }
    }





    return (
        <div>
            <form onSubmit={handleSubmit}>
                <IonGrid >
                    <IonRow>
                        <IonCol size="5">
                            <IonItem lines='none'>
                                <IonLabel position="stacked" className='label'>
                                    <IonRow>{t("inscription.nom")}<p className='rouge'>*</p>
                                    </IonRow></IonLabel>
                                <IonInput className='test ion-input' placeholder={t("inscription.nom") ?? ""} value={name} onIonChange={(e) => setName(e.detail.value!)}></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol size="2"></IonCol>
                        <IonCol size="5">
                            <IonItem lines='none'>
                                <IonLabel position="stacked" className='label'>
                                    <IonRow>{t("inscription.prenom")}<p className='rouge'>*</p></IonRow></IonLabel>
                                <IonInput className='test ion-input' placeholder={t("inscription.prenom") ?? ""} value={firstName} onIonChange={(e) => setFirstName(e.detail.value!)}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size='12'><IonItem lines='none'>
                            <IonLabel position="stacked" className='label'>
                                <IonRow>{t("inscription.email")}<p className='rouge'>*</p></IonRow></IonLabel>
                            <IonInput className='ion-input' type="email" placeholder={t("inscription.exempleEMail") ?? ""} value={mail} onIonChange={(e) => setMail(e.detail.value!)}></IonInput>
                        </IonItem></IonCol>

                    </IonRow>
                    <IonRow className='mdpRow'>
                        <IonCol size='4'>
                            <IonItem lines='none'>
                                <IonLabel position="stacked" className='label'>
                                    <IonRow>{t("inscription.password")}<p className='rouge'>*</p></IonRow></IonLabel>
                                <IonInput className='test ion-input' type="password" placeholder={t("inscription.password") ?? ""} value={password} onIonChange={(e) => setPassword(e.detail.value!)}></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol size='8'>
                            <IonItem lines='none'>
                                <IonLabel position="stacked" className='label'>
                                    <IonRow>{t("inscription.passwordConfirmation")}<p className='rouge'>*</p></IonRow></IonLabel>
                                <IonInput className='test ion-input' type="password" placeholder={t("inscription.passwordConfirmation") ?? ""} value={passwordConfirm} onIonChange={(e) => setPasswordConfirm(e.detail.value!)}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size='12'>
                            <IonItem lines='none'>
                                <IonLabel position="stacked" className='label'>
                                    <IonRow>{t("inscription.status")}<p className='rouge'>*</p></IonRow></IonLabel>
                                <IonSelect className='ion-select' placeholder={t("inscription.statusEleve") ?? ""} interface='popover' value={status} onIonChange={(e) => setStatus(e.detail.value!)}>
                                    <IonSelectOption value="etudiant">{t("inscription.statusEleve")}</IonSelectOption>
                                    <IonSelectOption value="enseignant">{t("inscription.statusProf")}</IonSelectOption>
                                    <IonSelectOption value="chercheur">{t("inscription.statusChercheur")}</IonSelectOption>
                                    <IonSelectOption value="particulier">{t("inscription.statusParticulier")}</IonSelectOption>
                                    <IonSelectOption value="professionnel">{t("inscription.statusProfessionnel")}</IonSelectOption>
                                    <IonSelectOption value="autre">{t("inscription.statusAutre")}</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        </IonCol>

                    </IonRow>
                    <IonRow>
                        <IonCol size='12'>
                            <IonItem lines='none'>
                                <IonLabel position="stacked" className='label'>{t("inscription.school")}</IonLabel>
                                <IonInput className='ion-input' placeholder={t("inscription.school") ?? ""} value={schoolCompany} onIonChange={(e) => setSchoolCompany(e.detail.value!)}></IonInput>
                            </IonItem>
                        </IonCol>

                    </IonRow>
                    <IonRow className='cond'>
                        <IonCol size='12'>
                            <IonItem lines='none'>
                                <IonCheckbox className='ion-checkbox' value={conditions} onIonChange={(e) => setConditions(e.detail.checked!)}></IonCheckbox>
                                <IonLabel className='conditions'>{t("inscription.conditions")}</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size='5' className='informationsSecondBtn'>
                            <IonItem lines='none' >
                                <IonCheckbox className='ion-checkbox' value={informations} onIonChange={(e) => setInformations(e.detail.checked!)}></IonCheckbox>
                                <IonLabel className='conditions' >{t("inscription.informations")}</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className='inscrire'>
                        <IonCol>
                            <IonButton expand="block" color="light" className='btn2'><IonIcon src={logoGoogle} className="google ion-icon"></IonIcon>{t("inscription.inscriptionGoogle")}</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block" color="primary" type='submit'>{t("inscription.inscriptionButton")}</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </form>
        </div>
    );
};

export default Inscription;
