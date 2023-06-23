<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button @click="retour">Retour</ion-button>
            </ion-buttons>
            <ion-title>Details Caption</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <h1>{{captionProps}}</h1>
    </ion-content>
</template>

<script>
import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonContent,
    modalController
} from '@ionic/vue'
export default {

  name: 'DetailsCaption',
  components:{
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonContent
  },
  props:["captionProps"],
  data() {
    return {

    };
  },
  methods:{
    retour(){
        return modalController.dismiss(null, 'cancel');
    }
  }
};
</script>

<style lang="css" scoped>
</style>
