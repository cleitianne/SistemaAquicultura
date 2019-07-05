<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-lg-12 col-md-12  col-sm-12 col-12 fixed-padding">    
            <b-card-group deck
                        class="mb-3">
                <b-card bg-variant="warning"
                        text-variant="white"
                        header="Tanque 1"
                        class="text-center">
                    <p class="card-text">Temperatura: 27°  |     pH: 4</p>
                    <p class="card-text">Umidade:  30   |   Oxigênio: 600mg/L</p>
                </b-card>
                <b-card bg-variant="danger"
                        text-variant="white"
                        header="Tanque 2"
                        class="text-center">
                    <p class="card-text">Temperatura: 27°  |     pH: 4</p>
                    <p class="card-text">Umidade: 26    |   Oxigênio: 741mg/L</p>
                </b-card>
                <b-card bg-variant="danger"
                        text-variant="white"
                        header="Tanque 3"
                        class="text-center">
                    <p class="card-text">Temperatura: 28°  |     pH: 5</p>
                    <p class="card-text">Umidade: 30    |   Oxigênio: 135mg/L</p>
                </b-card>
            </b-card-group>
            <b-card-group deck
                        class="mb-3">
                <b-card bg-variant="success"
                        text-variant="white"
                        header="Tanque 4"
                        class="text-center">
                    <p class="card-text">Temperatura: 27°  |     pH: 4</p>
                    <p class="card-text">Umidade: 30    |   Oxigênio: 450mg/L</p>
                </b-card>
                <b-card bg-variant="success"
                        text-variant="white"
                        header="Tanque 5"
                        class="text-center">
                    <p class="card-text">Temperatura: 29°  |     pH: 9</p>
                    <p class="card-text">Humidade: 30    |   Oxigênio: 100mg/L</p>
                </b-card>
                <b-card bg-variant="danger"
                        text-variant="white"
                        header="Tanque 6"
                        class="text-center">
                    <p class="card-text">Temperatura: 26°  |     pH: 4</p>
                    <p class="card-text">Umidade: 40    |   Oxigênio: 80mg/L</p>
                </b-card>
            </b-card-group>
            <b-card-group deck
                        class="mb-3">
                <b-card bg-variant="warning"
                        header="Tanque 7"
                        class="text-center">
                    <p class="card-text">Temperatura: 32°  |     pH: 4</p>
                    <p class="card-text">Umidade: 30    |   Oxigênio: 600mg/L</p>
                </b-card>
                <b-card bg-variant="warning"
                        header="Tanque 8"
                        text-variant="white"
                        class="text-center">
                    <p class="card-text">Temperatura: 28°  |     pH: 6</p>
                    <p class="card-text">Umidade: 29    |   Oxigênio: 450mg/L</p>
                </b-card>
                <b-card bg-variant="danger"
                        header="Tanque 9"
                        class="text-center">
                    <p class="card-text">Temperatura: 27°  |     pH: 4</p>
                    <p class="card-text">Umidade: 30    |   Oxigênio: 60mg/L</p>
                </b-card>
            </b-card-group>

        </div>
    <div>
<div class="float-legend">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 font-weight-bold">Status</h4>

            <div class="font-weight-bold mb-2">Alerta</div>
            <div class="bg-warning p-1 mb-3 text-center text-white">3</div>

            <div class="font-weight-bold mb-2">Perigo</div>
            <div class="bg-danger p-1 mb-3 text-center text-white">4</div>

            <div class="font-weight-bold mb-2">Normal</div>
            <div class="bg-success p-1 mb-3 text-center text-white">2</div>

          </div>
        </div>
    </div>
    </div>
</div>
    </div>
</template>

<script>

</script>

<style lang="scss">


.float-legend {
  position: fixed;
  width: 10rem;
  right: -8rem;
  transition: all 400ms ease-in-out;
  cursor: pointer;
  box-shadow: -4px 4px 8px #33333380;
  border-radius: 4px;
  background-color: #fff;
  color: #fff;

  &:hover {
    right: 0rem;
    color: #000;
  }

  .card {
    margin: 0;
    border: none;
    background: transparent;
    margin-bottom: 2.5rem;

    .card-body div {
      border-radius: 4px;
    }
  }
}
</style>
