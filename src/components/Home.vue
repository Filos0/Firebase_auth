<template>
  <el-container>
    <el-header id="miheader">
      M&oacute;dulo ajustes
      <el-button
        id="miboton"
        type="info"
        icon="el-icon-back"
        circle
        @click="logout"
        title="logout"
      ></el-button>
    </el-header>
    <el-container>
      <el-aside id="miaside" width="200px">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-menu"></i>Men&uacute;</template
            >
            <el-submenu index="1-4">
              <template slot="title">Usuarios</template>
              <el-menu-item index="1-4-1">Mantenedor</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Contenido</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Firebase from "firebase";
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then((accept) => {
          this.$router.push("login");
        });
    },
  },
};
</script>

<style scoped>
#miheader {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
#miboton {
  float: right;
  margin-top: 10px;
}
#miaside {
  color: #333;
}
</style>