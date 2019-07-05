<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Adicionar Dado</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Código:</label>
                        <input type="text" class="form-control" v-model="newItem.codigo"/>
                    </div>
                    <div class="form-group">
                        <label>Data e Hora:</label>
                        <input type="text" class="form-control" v-model="newItem.data_hora"/>
                    </div>
                    <div class="form-group">
                        <label>Desc. Sensor:</label>
                        <input type="text" class="form-control" v-model="newItem.desc_sensor"/>
                    </div>
                    <div class="form-group">
                        <label>Desc. Tanque:</label>
                        <input type="text" class="form-control" v-model="newItem.desc_tanque"/>
                    </div>
                    <div class="form-group">
                        <label>Valor:</label>
                        <input type="text" class="form-control" v-model="newItem.valor"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Adicionar Dado"/>
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
      name: 'AddItem'
  },
  firebase: {
    items: db.ref('items')
  },
  data () {
    return {
      newItem: {
          codigo: '',
          data_hora: '',
          desc_sensor: '',
          desc_tanque: '',
          valor: '',
      }
    }
  },
  methods: {
      addItem() {
        this.$firebaseRefs.items.push({
            codigo: this.newItem.codigo,
            data_hora: this.newItem.data_hora,
            desc_sensor: this.newItem.desc_sensor,
            desc_tanque: this.newItem.desc_tanque,
            valor: this.newItem.valor,
        })
        this.newItem.codigo = '';
        this.newItem.data_hora = '';
        this.newItem.desc_sensor = '';
        this.newItem.desc_tanque = '';
        this.newItem.valor = '';
        this.$router.push('/index')
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