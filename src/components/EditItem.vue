<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Editar Dado</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
                    <div class="form-group">
                        <label>Código:</label>
                        <input type="text" class="form-control" v-model="newItem.codigo"/>
                    </div>
                    <div class="form-group">
                        <label>Data e Hora:</label>
                        <input type="text" class="form-control" v-model="newItem.data_hora" />
                    </div>
                    <div class="form-group">
                        <label>Desc. Sensor:</label>
                        <input type="text" class="form-control" v-model="newItem.desc_sensor" />
                    </div>
                    <div class="form-group">
                        <label>Desc. Tanque:</label>
                        <input type="text" class="form-control" v-model="newItem.desc_tanque" />
                    </div>
                    <div class="form-group">
                        <label>Valor:</label>
                        <input type="text" class="form-control" v-model="newItem.valor" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Atualizar Dado"/>
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
      name: 'EditItem'
  },
  firebase: {
    items: db.ref('items'),
    itemsObj: {
      source: db.ref('items'),
      asObject: true
    }
  },
  data () {
    return {
      newItem: {}
    }
  },
  created() {
     let items = this.itemsObj[this.$route.params.id]
     this.newItem = {
       codigo: this.codigo,
       data_hora: this.data_hora,
       desc_sensor: this.desc_sensor,
       desc_tanque: this. desc_tanque,
       valor: this.valor,
     }
  },
  methods: {
    updateItem() {
      this.$firebaseRefs.items.child(this.$route.params.id).set(this.newItem);
      this.$router.push('/index')
    }
  }
}
</script>