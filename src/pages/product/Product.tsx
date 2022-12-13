import {
    IonContent,
    IonPage,
} from '@ionic/react';
import React from "react";
import "./Product.css"
import {product} from "../../shared/information/product/product";
import Navbar from '../../components/Navbar/Navbar';
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/swiper.min.css';


const Product: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
             <Navbar />
            </IonContent>
        </IonPage>
    );
};




export default Product;
