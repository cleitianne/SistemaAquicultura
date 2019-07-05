<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Editar Tanque</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateTanque">
                    <div class="form-group">
                        <label>Latitude:</label>
                        <input type="text" class="form-control" v-model="newTanque.latitude"/>
                    </div>
                    <div class="form-group">
                        <label>Longitude:</label>
                        <input type="text" class="form-control" v-model="newTanque.longitude" />
                    </div>
                    <div class="form-group">
                        <label>Ativo:</label>
                        <input type="text" class="form-control" v-model="newTanque.ativo" />
                    </div>
                    <div class="form-group">
                        <label>Descrição:</label>
                        <input type="text" class="form-control" v-model="newTanque.descricao" />
                    </div>
                    <div class="form-group">
                        <label>Código:</label>
                        <input type="text" class="form-control" v-model="newTanque.codigo" />
                    </div>
                    <div class="form-group">
                        <label>Tipo de Tanque:</label>
                        <input type="text" class="form-control" v-model="newTanque.tipo_tanque" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Atualizar Tanque"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import { db } from '../config/db';

export default {
  components: {
      name: 'EditTanque'
  },
  firebase: {
    items: db.ref('Tanque'),
    itemsObj: {
      source: db.ref('Tanque'),
      asObject: true
    }
  },
  data () {
    return {
      newTanque: {}
    }
  },
  created() {
     let Tanque = this.itemsObj[this.$route.params.id]
     this.newTanque = {
       latitude: this.latitude,
       longitude: this.longitude,
       ativo: this.ativo,
       descricao: this.descricao,
       codigo: this.codigo,
       tipo_tanque: this.tipo_tanque,
     }
  },
  methods: {
    updateTanque() {
      this.$firebaseRefs.items.child(this.$route.params.id).set(this.newTanque);
      this.$router.push('/indexTanque')
    }
  }
}
</script>