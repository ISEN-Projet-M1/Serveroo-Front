import {
    IonButton,
    IonCard, IonCardContent, IonCardTitle,
    IonCol,
    IonContent, IonGrid, IonItem, IonLabel, IonList,
    IonPage, IonRow,
} from '@ionic/react';
import React, {useState } from 'react';

import "./Product.css"
import {product} from "../../shared/information/product/product";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import {Configuration} from "../../components/Configuration/Configuration";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@ionic/react/css/ionic-swiper.css';
import { Pagination} from "swiper";
import Fleche from "../../assets/svg/fleche.svg";

const Product: React.FC = () => {

    const [choix, setChoix] = useState(product[0]);

    function configuration(oneProduct : any){
        let card1 = document.getElementsByClassName("ProductCard");

        for (let i = 0; i < card1.length; i++) {
            console.log(card1[i]);
            // @ts-ignore
            card1[i].style.backgroundColor="var(--ion-color-medium-rgba2)";
        }
        let card = document.getElementById(oneProduct.title);

        // @ts-ignore
        card.style.backgroundColor = "var(--ion-color-primary-rgba)";

        setChoix(oneProduct);

    }


   
    return (
        <IonPage>
            <IonContent fullscreen>
             <Navbar />
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                            <IonRow className="rowSwiper">
                                {
                                    product.map((oneProduct: any) => {
                                        return (
                                            <IonCol size="12" size-lg="4" key={oneProduct.title}>
                                                <IonCard className='ProductCard' id={oneProduct.title}>
                                                    <img src={require("../../assets/svg/products/" + oneProduct.image)} alt="descriptif"
                                                         className="presentation"></img>
                                                    <div className="centerLogo">
                                                        <img src={require("../../assets/svg/products/" + oneProduct.logo)} alt="logo"
                                                             className="logo"></img>
                                                    </div>
                                                    <IonCardTitle className="center">{oneProduct.title}</IonCardTitle>
                                                    <IonCardContent className="sansBackground content">
                                                        <IonList className="sansBackground">
                                                            {
                                                                oneProduct.description.map((item: string) => {
                                                                    return (<IonItem key={item} lines="none" className="sansBackground">
                                                                        <img src={Fleche} alt="Flèche"/>
                                                                        <IonLabel className="ion-text-wrap label">{item}</IonLabel>
                                                                    </IonItem>);
                                                                })
                                                            }
                                                        </IonList>
                                                    </IonCardContent>
                                                    <IonRow>
                                                        <IonCol size="6">
                                                            <IonItem className="config" color="primary">
                                                                <IonGrid>
                                                                    <IonRow className="align">
                                                                        <IonLabel>2 GB Ram</IonLabel>
                                                                    </IonRow>
                                                                    <IonRow className="align">
                                                                        <IonLabel>1€/semaine</IonLabel>
                                                                    </IonRow>
                                                                    <IonRow className="align">
                                                                        <IonButton color="light" onClick={()=>configuration(oneProduct)}>
                                                                            <IonLabel color="primary" className="ion-text-wrap" >Commander maintenant</IonLabel>
                                                                        </IonButton>
                                                                    </IonRow>
                                                                </IonGrid>
                                                            </IonItem>
                                                        </IonCol>
                                                        <IonCol size="6">
                                                            <IonItem className="config" color="primary">
                                                                <IonGrid>
                                                                    <IonRow className="align">
                                                                        <IonLabel className="ion-text-center">Creez votre propre</IonLabel>
                                                                    </IonRow>
                                                                    <IonRow className="align">
                                                                        <IonLabel className="ion-text-center">configuration</IonLabel>
                                                                    </IonRow>
                                                                    <IonRow className="align">
                                                                        <IonButton color="light" onClick={()=>configuration(oneProduct)}>
                                                                            <IonLabel color="primary" className="ion-text-center" >Personnaliser</IonLabel>
                                                                        </IonButton>
                                                                    </IonRow>
                                                                </IonGrid>
                                                            </IonItem>
                                                        </IonCol>
                                                    </IonRow>
                                                </IonCard>
                                            </IonCol>
                                        )
                                    })
                                }
                            </IonRow>

                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                </Swiper>
               <Configuration
                   choix={choix}
                   coeur={{1:"1",2:"2",3:"3",4:"4"}}
               />
                <Footer/>
            </IonContent>
        </IonPage>
    );
};




export default Product;
