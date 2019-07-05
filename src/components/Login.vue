<template>
<div class="login">
  <div class="py-5">
        <div class="row">
          <div class="col-md-3"> </div>
          <div class="col-md-6">
            <div class="card text-white p-5 bg-dark">
              <div class="card-body">
                <h1 class="mb-4">Login form</h1>
                <form>
                  <div class="form-group"> <label>Email address</label>
                    <input type="email" class="form-control" placeholder="Enter email"> </div>
                  <div class="form-group"> <label>Password</label>
                    <input type="password" class="form-control" placeholder="Password"> </div>
                  <button type="submit" class="btn btn-secondary">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>
