<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Adicionar Tanque</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addTanque">
                    <div class="form-group">
                        <label>Latitude:</label>
                        <input type="text" class="form-control" v-model="newTanque.latitude"/>
                    </div>
                    <div class="form-group">
                        <label>Longitude:</label>
                        <input type="text" class="form-control" v-model="newTanque.longitude"/>
                    </div>
                    <div class="form-group">
                        <label>Ativo:</label>
                        <input type="text" class="form-control" v-model="newTanque.ativo"/>
                    </div>
                    <div class="form-group">
                        <label>Descrição:</label>
                        <input type="text" class="form-control" v-model="newTanque.descricao"/>
                    </div>
                    <div class="form-group">
                        <label>Código:</label>
                        <input type="text" class="form-control" v-model="newTanque.codigo"/>
                    </div>
                    <div class="form-group">
                        <label>Tipo de Tanque:</label>
                        <input type="text" class="form-control" v-model="newTanque.tipo_tanque"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Adicionar Tanque"/>
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
      name: 'Tanque'
  },
  firebase: {
    items: db.ref('Tanque')
  },
  data () {
    return {
      newTanque: {
          latitude: '',
          longitude: '',
          ativo: '',
          descricao: '',
          codigo: '',
          tipo_tanque: '',
      }
    }
  },
  methods: {
      addTanque() {
        this.$firebaseRefs.items.push({
            latitude: this.newTanque.latitude,
            longitude: this.newTanque.longitude,
            ativo: this.newTanque.ativo,
            descricao: this.newTanque.descricao,
            codigo: this.newTanque.codigo,
            tipo_tanque: this.newTanque.tipo_tanque,
        })
        this.newTanque.latitude = '';
        this.newTanque.longitude = '';
        this.newTanque.ativo = '';
        this.newTanque.descricao = '';
        this.newTanque.codigo = '';
        this.newTanque.tipo_tanque = '';
        this.$router.push('/indexTanque')
      }
    }
}
</script>
<style scoped>
div.modal-footer {
  padding-right: 0 !important;
  border-top: 0 !important;
}
.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: 'Navegar';
}
</style>