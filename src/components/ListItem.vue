<template>
  <div>
    <h1>Listar Dados</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Código</th>
          <th>Data e Hora</th>
          <th>Desc. Sensor</th>
          <th>Desc. Tanque</th>
          <th>Valor</th>
          <!-- <th colspan="2">Action</th> -->
        </tr>
      </thead>
      <tbody>
          <tr v-for="item of items" :key="item['.key']">
            <td>{{ item.codigo }}</td>
            <td>{{ item.data_hora }}</td>
            <td>{{ item.desc_sensor }}</td>
            <td>{{ item.desc_tanque }}</td>
            <td>{{ item.valor }}</td>
            <td>
                <router-link :to="{ name: 'Edit', params: {id: item['.key']} }" class="btn btn-warning">
                  Editar
                </router-link>
            </td>
            <td>
              <button @click="deleteItem(item['.key'])" class="btn btn-danger">Deletar</button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { db } from '../config/db';

export default {
  components: {
      name: 'ListItem'
  },
  data() {
    return {
      items: []
    }
  },
  firebase: {
    items: db.ref('items')
  },
  methods: {
    deleteItem(key) {
      this.$firebaseRefs.items.child(key).remove();
    }
  }
}
</script>