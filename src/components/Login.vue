<template>
  <div id="login">
    <img src="../assets/logo.png" class="img-inicial" />
    <h5>
      Credenciales Correo:
    </h5>
    <h5>user1@gmail.com | Contraseña: 123456</h5>
    <h5>user2@gmail.com | Contraseña: 123456</h5>
    <el-form label-width="100px" class="form-login" :model="formLabelAlign">
      <el-input
        id="el-input"
        placeholder="Correo electronico"
        v-model="formLabelAlign.user"
      ></el-input>
      <el-input
        type="password"
        placeholder="Contraseña"
        v-model="formLabelAlign.password"
        autocomplete="off"
      ></el-input>
      <el-button type="primary" class="ingresar-login" @click="login"
        >Ingresar</el-button
      >
    </el-form>
  </div>
</template>

<script>
import Firebase from "firebase";
import FirebaseConfig from "@/config/firebase";
import { Message } from "element-ui";
// Initialize Firebase
Firebase.initializeApp(FirebaseConfig);
export default {
  data() {
    return {
      formLabelAlign: {
        user: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      Firebase.auth()
        .signInWithEmailAndPassword(
          this.formLabelAlign.user,
          this.formLabelAlign.password
        )
        .then(
          accept => {
            this.$router.push("home");
          },
          reject => {
            this.$message({
              showClose: true,
              message: reject.message,
              type: "error"
            });
          }
        );
    }
  }
};
</script>

<style scoped>
#milogin {
  padding: 60px;
}
.ingresar-login {
  width: 100%;
}
.img-inicial {
  width: 10%;
  padding: 60px;
}
.form-login {
  display: block;
  margin: auto;
  width: 300px;
}
#el-input {
  margin-bottom: 10px;
}
</style>
