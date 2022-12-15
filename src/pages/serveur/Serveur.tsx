import { IonButton, IonCol, IonContent, IonItem, IonList, IonPage, IonRow } from "@ionic/react";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from '../../components/Navbar/Navbar';
import Menu from "../../components/Profile/Menu";
import "./Serveur.css"
import shield from '../../assets/svg/icons/shield.svg';
import ubuntu from '../../assets/svg/services/ubuntu.svg';

import power from '../../assets/svg/icons/power.svg';
import reload from '../../assets/svg/icons/reload.svg';
import ssh from '../../assets/svg/icons/ssh.svg';

import { Line, Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, registerables } from 'chart.js'

import refresh from '../../assets/svg/icons/refresh.svg';

const Serveur: React.FC = () => {

    Chart.register(ArcElement);
    Chart.register(...registerables);

    let valueProcesseur = 50;
    let valueRam = 12;
    let valueDisque = 78;

    const doughnutChartDataFirst = {
        datasets: [
            {
                backgroundColor: ['rgba(0,135,63,0.5)', 'rgba(183,174,188, 0.2)'],
                borderColor: ['rgba(0,135,63,0.5)', 'rgba(183,174,188, 0.2)'],
                border: 0,
                data: [valueProcesseur, 100 - valueProcesseur],
                cutout: 110,
            }
        ]
    };

    const doughnutChartDataSecond = {
        datasets: [
            {
                backgroundColor: ['rgba(202,166,64,0.5)', 'rgba(183,174,188, 0.2)'],
                borderColor: ['rgba(202,166,64,0.5)', 'rgba(183,174,188, 0.2)'],
                border: 0,
                data: [valueRam, 100 - valueRam],
                cutout: 110
            }
        ]
    };

    const doughnutChartDataThird = {
        datasets: [
            {
                backgroundColor: ['rgba(65,61,91, 0.5)', 'rgba(183,174,188, 0.2)'],
                borderColor: ['rgba(65,61,91, 0.5)', 'rgba(183,174,188, 0.2)'],
                border: 0,
                data: [valueDisque, 100 - valueDisque],
                cutout: 110
            }
        ]
    };

    const lineChartData = {
        labels: ['12H30', '13H30', '14H30', '15H30', '16H30', '17H30', '18H30', '19H30', '20H30', '21H30', '22H30', '23H30'],
        datasets: [
            {
                label: 'Arrivée',
                data: [12, 19, 3, 5, 2, 3, 10, 12, 19, 3, 5, 2],
                fill: false,
                backgroundColor: 'rgba(0,135,63,0.5)',
                borderColor: 'rgba(0,135,63,0.5)',
            },
            {
                label: 'Sortie',
                data: [12, 83, 4, 5, 2, 32, 12, 19, 13, 65, 2],
                fill: false,
                backgroundColor: 'rgba(202,166,64,0.5)',
                borderColor: 'rgba(202,166,64,0.5)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
    }



    return (
        <IonPage>
            <IonContent fullscreen>
                <Navbar />
                <p className='titleServeur'>ServWeb Pilou</p>
                <div className='border infoServeur'>
                    <IonRow>
                        <IonCol size="1" className='imgServeur'>
                            <img src={ubuntu} ></img>
                        </IonCol>
                        <IonCol size="7">
                            <IonRow>
                                <span className="titleURLServeur">serveroo.com/services/servwebpilou</span>
                                <div className='itemGreen divTitles'>
                                    <span>En ligne</span>
                                </div>
                            </IonRow>

                            <div className="secondInfosServeur">
                                <IonRow>
                                    <div className="itemGreen divTitles">
                                        <span>Actif</span>
                                    </div>
                                    <IonCol>
                                        <span className="secondTitleServeur">Disponible du 16 au 28 juin 2022</span>
                                    </IonCol>
                                </IonRow>
                                <div className='warningTextServeur' >
                                    <img src={shield} height={30}></img>
                                    <span>Attention il vous reste 10 jours pour renouveler ce service ou télécharger les données</span>
                                </div>
                            </div>
                        </IonCol>
                        <IonCol size="3" className="btnOptionsServeur">
                            <IonRow className="btnOptionsServeurDiv">
                                <div className="btnGestionServeur">
                                    <img src={power} height={30}></img>
                                </div>
                                <div className="btnGestionServeur">
                                    <img src={reload} height={30}></img>
                                </div>
                                <div className="btnGestionServeur">
                                    <img src={ssh} height={30}></img>
                                </div>
                            </IonRow>
                            <IonButton color="primary" className='btnServeurNew'><span className='btnProfileText'>Renouveler le serveur</span></IonButton>
                        </IonCol>
                    </IonRow>
                </div>

                <IonRow>
                    <IonCol size='4'>
                        <Menu></Menu>
                        <div className='border finances'>
                            <p className='secondTitle'>Finances</p>

                            <div className='textImportant'>
                                <span>Date</span><br></br>
                                <span className='secondText'>12 Juin 2023</span>
                            </div>

                            <div className='textImportant'>
                                <span>Prix</span><br></br>
                                <span className='secondText'>1e par semaine</span>
                            </div>

                            <div className='textImportant'>
                                <span>Renouvellement automatique</span><br></br>
                                <div className='itemRedFinances'>
                                    <span>Inactif</span>
                                </div>
                            </div>

                            <br></br>
                            <IonButton color="primary" className='btnProfile'><span className='btnProfileText'>Télécharger ma facture</span></IonButton>
                            <IonButton color="primary" className='btnProfile'><span className='btnProfileText'>Améliorer le service</span></IonButton>

                        </div>

                        <div className='border dataBtn'>
                            <p className='secondTitle'>Mes données</p>
                            <IonCol>
                                <div className="btnDownload">
                                    <IonButton color="primary" className='btnProfile'><span className='btnProfileText'>Télécharger les logs</span></IonButton>
                                    <IonButton color="primary" className='btnProfile'><span className='btnProfileText'>Télécharger les données</span></IonButton>
                                </div>
                            </IonCol>
                        </div>
                    </IonCol>

                    <IonCol>
                        <div className='border configDiv'>
                            <div className="rowConfigRefresh">
                                <p className='titleConfig'>Configuration</p>
                                <div className="btnRefresh">
                                    <img src={refresh}></img>
                                    <span className="txtRefresh">Rafraichir</span>
                                </div>
                            </div>
                            <IonRow>
                                <IonCol>
                                    <div className='infosConfig'>
                                        <span className='titleInfosConfig'>Processeur (CPU)</span>
                                        <span className='titleSecondInfosConfig'>1x3.3GHz</span>

                                        <div className="circle">
                                            <Doughnut data={doughnutChartDataFirst} />
                                            <div className="donut-inner-first">
                                                <span>{valueProcesseur}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </IonCol>
                                <IonCol>
                                    <div className='infosConfig'>
                                        <span className='titleInfosConfig'>Mémoire (RAM)</span>
                                        <span className='titleSecondInfosConfig'>61MB sur 2Go</span>

                                        <div className="circle">
                                            <Doughnut data={doughnutChartDataSecond} />
                                            <div className="donut-inner-second">
                                                <span>{valueRam}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </IonCol>
                                <IonCol>
                                    <div className='infosConfig'>
                                        <span className='titleInfosConfig'>SSD</span>
                                        <span className='titleSecondInfosConfig'>4.44GB sur 20GB</span>

                                        <div className="circle">
                                            <Doughnut data={doughnutChartDataThird} />
                                            <div className="donut-inner-third">
                                                <span>{valueDisque}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </IonCol>
                            </IonRow>
                        </div>

                        <div className='border divNetwork'>
                            <p className='titleConfig'>Réseau</p>

                            <IonRow>
                                <IonCol size="4">
                                    <div className='infosConfigRéseau'>
                                        <span className='titleInfosConfigRéseau'>Vitesse de connexion</span>
                                        <span className='titleSecondInfosConfigRéseau'>100 Mbit / seconde</span>
                                    </div>
                                    <div className='infosConfigRéseau'>
                                        <span className='titleInfosConfigRéseau'>Statut réseau</span>
                                        <div className='itemGreen divTitlesRéseau'>
                                            <span>Connecté</span>
                                        </div>
                                    </div>
                                    <div className='infosConfigRéseau'>
                                        <span className='titleInfosConfigRéseau'>IP Réseau</span>
                                        <span className='titleSecondInfosConfigRéseau'>198.168.2.108</span>

                                    </div>
                                </IonCol>

                                <IonCol size="6">
                                    <div>
                                        <Line data={lineChartData} options={options} height={1800} width={3800} />
                                    </div>
                                </IonCol>
                            </IonRow>

                        </div>
                    </IonCol>


                </IonRow>

                <Footer></Footer>
            </IonContent>
        </IonPage>
    );
};

export default Serveur;
