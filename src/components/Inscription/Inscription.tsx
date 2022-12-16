import './Inscription.css';
import '../../assets/svg/login_inscription/google.svg';
import { logoGoogle } from 'ionicons/icons';

import { IonGrid, IonRow, IonCol, IonInput, IonLabel, IonItem, IonSelect, IonSelectOption, IonCheckbox, IonButton, IonIcon, useIonViewDidEnter } from '@ionic/react';
import React from "react";
import { useTranslation } from 'react-i18next';

interface ContainerProps { }

const Inscription: React.FC<ContainerProps> = () => {
    const { i18n, t } = useTranslation();

    return (
        <div>
            <form>
                <IonGrid>
                    <IonRow>
                        <IonCol size="5">
                            <IonItem lines='none'>
                                <IonLabel position="stacked" className='label'>
                                    <IonRow>{t("inscription.nom")}<p className='rouge'>*</p>
                                    </IonRow></IonLabel>
                                <IonInput className='test ion-input' placeholder={t("inscription.nom") ?? ""}></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol size="2"></IonCol>
                        <IonCol size="5">
                            <IonItem lines='none'>
                                <IonLabel position="stacked" className='label'>
                                    <IonRow>{t("inscription.prenom")}<p className='rouge'>*</p></IonRow></IonLabel>
                                <IonInput className='test ion-input' placeholder={t("inscription.prenom") ?? ""}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size='12'><IonItem lines='none'>
                            <IonLabel position="stacked" className='label'>
                                <IonRow>{t("inscription.email")}<p className='rouge'>*</p></IonRow></IonLabel>
                            <IonInput className='ion-input' type="email" placeholder={t("inscription.exempleEMail") ?? ""}></IonInput>
                        </IonItem></IonCol>

                    </IonRow>
                    <IonRow className='mdpRow'>
                        <IonCol size='4'>
                            <IonItem lines='none'>
                                <IonLabel position="stacked" className='label'>
                                    <IonRow>{t("inscription.password")}<p className='rouge'>*</p></IonRow></IonLabel>
                                <IonInput className='test ion-input' type="password" placeholder={t("inscription.password") ?? ""}></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol size='8'>
                            <IonItem lines='none'>
                                <IonLabel position="stacked" className='label'>
                                    <IonRow>{t("inscription.passwordConfirmation")}<p className='rouge'>*</p></IonRow></IonLabel>
                                <IonInput className='test ion-input' type="password" placeholder={t("inscription.passwordConfirmation") ?? ""}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size='12'>
                            <IonItem lines='none'>
                                <IonLabel position="stacked" className='label'>
                                    <IonRow>{t("inscription.status")}<p className='rouge'>*</p></IonRow></IonLabel>
                                <IonSelect className='ion-select' placeholder={t("inscription.statusEleve") ?? ""} interface='popover'>
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
                                <IonInput className='ion-input' placeholder={t("inscription.school") ?? ""}></IonInput>
                            </IonItem>
                        </IonCol>

                    </IonRow>
                    <IonRow className='cond'>
                        <IonCol size='12'>
                            <IonItem lines='none'>
                                <IonCheckbox className='ion-checkbox'></IonCheckbox>
                                <IonLabel className='conditions'>{t("inscription.conditions")}</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size='5' className='informationsSecondBtn'>
                            <IonItem lines='none'>
                                <IonCheckbox className='ion-checkbox'></IonCheckbox>
                                <IonLabel className='conditions'>{t("inscription.informations")}</IonLabel>
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
