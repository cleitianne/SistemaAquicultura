<template>
  <div>
    <h1>Listar Tanques</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Ativo</th>
          <th>Descrição</th>
          <th>Código</th>
          <th>Tipo de Tanque</th>
          <!-- <th colspan="2">Action</th> -->
        </tr>
      </thead>
      <tbody>
          <tr v-for="item of items" :key="item['.key']">
            <td>{{ item.latitude }}</td>
            <td>{{ item.longitude }}</td>
            <td>{{ item.ativo }}</td>
            <td>{{ item.descricao }}</td>
            <td>{{ item.codigo }}</td>
            <td>{{ item.tipo_tanque }}</td>
            <td>
                <router-link :to="{ name: 'EditTanque', params: {id: item['.key']} }" class="btn btn-warning">
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
      name: 'ListTanque'
  },
  data() {
    return {
      items: []
    }
  },
  firebase: {
    items: db.ref('Tanque')
  },
  methods: {
    deleteItem(key) {
      this.$firebaseRefs.items.child(key).remove();
    }
  }
}
</script>