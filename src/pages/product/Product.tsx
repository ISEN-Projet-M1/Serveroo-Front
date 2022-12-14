import {
    IonButton,
    IonCard, IonCardContent, IonCardTitle,
    IonCol,
    IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList,
    IonPage, IonRow,
} from '@ionic/react';
import React from "react";
import "./Product.css"
import {product} from "../../shared/information/product/product";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@ionic/react/css/ionic-swiper.css';
import { Pagination} from "swiper";
import Fleche from "../../assets/svg/fleche.svg";

const Product: React.FC = () => {

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
                            <IonRow>
                                {
                                    product.map((oneProduct: any) => {
                                        return (
                                            <IonCol size="12" size-lg="4" key={oneProduct.title}>
                                                <IonCard className='ProductCard'>

                                                    <img src={require("../../assets/" + oneProduct.image)} alt="Minecraft"
                                                         className="presentation"></img>
                                                    <IonCardTitle className="center">{oneProduct.title}</IonCardTitle>

                                                    <IonCardContent>
                                                        <IonList className="list">
                                                            {
                                                                oneProduct.description.map((item: string) => {
                                                                    return (<IonItem key={item} lines="none" color="primary">
                                                                        <img src={Fleche} alt="Flèche"/>
                                                                        <IonLabel>{item}</IonLabel>
                                                                    </IonItem>);
                                                                })
                                                            }
                                                        </IonList>
                                                    </IonCardContent>
                                                    <IonRow>
                                                        <IonCol size="6">
                                                            <IonItem className="config" color="primary">
                                                                <IonRow>
                                                                    <IonLabel>2 GB Ram</IonLabel>
                                                                </IonRow>
                                                                <IonRow>
                                                                    <IonButton>
                                                                        <IonLabel>Test</IonLabel>
                                                                    </IonButton>
                                                                </IonRow>

                                                            </IonItem>

                                                        </IonCol>
                                                        <IonCol size="6">
                                                            <IonButton>
                                                                <IonLabel>Test 2</IonLabel>
                                                            </IonButton>
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
                <Footer/>
            </IonContent>
        </IonPage>
    );
};




export default Product;
