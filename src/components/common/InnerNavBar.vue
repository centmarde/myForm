<template>
  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'left' : 'left'"
  
    temporary
  >
    <div class="text-center pt-8">
      <v-avatar size="100">
        <img
          :src="profileImage"
          alt="Profile Image"
          v-if="profileImage"
        />
      <!--   <v-icon v-else size="large">mdi-account</v-icon> -->
      </v-avatar>
    </div>

    <v-list>
      <v-list-item style="padding: 8px; margin-top: 2rem">
        <v-btn
          class="justify-start"
          rounded="0"
          variant="text"
          size="large"
          block
          to="/"
          style="text-transform: none; font-size: 1rem"
        >
          <v-row align="center" no-gutters>
            <p class="text-caption font-weight-bold">{{"email" }}</p>
          </v-row>
        </v-btn>
      </v-list-item>

     <!--  <v-list-item style="padding: 8px">
        <v-btn
          class="justify-start"
          rounded="0"
          variant="text"
          size="large"
          block
          @click="toggleTheme"
          style="text-transform: none; font-size: 1rem"
        >
          <v-row align="center" no-gutters>
            <v-col cols="auto">
              <v-icon class="me-3" left style="font-size: 1.5rem">{{
                themeIcon
              }}</v-icon>
            </v-col>
            <v-col> Theme </v-col>
          </v-row>
        </v-btn>
      </v-list-item> -->

      <v-list-item style="padding: 8px">
        <v-btn
          class="justify-start"
          rounded="0"
          variant="text"
          size="large"
          block
          to="/"
          style="text-transform: none; font-size: 1rem"
        >
          <v-row align="center" no-gutters>
            <v-col cols="auto">
              <v-icon class="me-3" left style="font-size: 1.5rem">mdi-history</v-icon>
            </v-col>
            <v-col> Scan History </v-col>
          </v-row>
        </v-btn>
      </v-list-item>

      <v-list-item style="padding: 8px">
        <v-btn
          class="justify-start"
          rounded="0"
          variant="text"
          size="large"
          block
          to="/"
          style="text-transform: none; font-size: 1rem"
        >
          <v-row align="center" no-gutters>
            <v-col cols="auto">
              <v-icon class="me-3" left style="font-size: 1.5rem"
                >mdi-magnify</v-icon
              >
            </v-col>
            <v-col> Scan </v-col>
          </v-row>
        </v-btn>
      </v-list-item>

      <v-list-item style="padding: 10px">
        <v-btn
          class="justify-start"
          rounded="0"
          variant="text"
          size="large"
          block
          to="/"
          style="text-transform: none; font-size: 1rem"
        >
          <v-row align="center" no-gutters>
            <v-col cols="auto">
              <v-icon class="me-3" left style="font-size: 1.5rem"
                >mdi-view-dashboard</v-icon
              >
            </v-col>
            <v-col> Dashboard </v-col>
          </v-row>
        </v-btn>
      </v-list-item>

      <!-- <v-list-item style="padding: 8px; margin-top: 10rem">
        <v-btn
          class="justify-center"
          rounded="0"
          variant="text"
          size="large"
          block
          @click="handleLogoutClick"
          style="text-transform: none; font-size: 1rem"
        >
          <v-row align="center" no-gutters>
            <v-col cols="auto">
              <v-icon class="me-3" left style="font-size: 1.5rem"
                >mdi-logout</v-icon
              >
            </v-col>
            <v-col> Logout </v-col>
          </v-row>
        </v-btn>
      </v-list-item> -->
    </v-list>
  </v-navigation-drawer>

  <v-app-bar
    class="navbar"
    :color="surface"
    style="height: 70px"
  >
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
      class="large-icon mx-5"
      :color="primary"
    ></v-app-bar-nav-icon>

    <div class="title" :style="{ color: primary }">My Form</div>

    <v-spacer></v-spacer>

    <v-img
      class="logo pt-1"
      :src="currentLogo"
      max-width="100"
    ></v-img>
  </v-app-bar>

  <!-- Replacing v-main with a div -->
  <div style="height: 100%">
    <!-- Content goes here -->
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import { useTheme } from "vuetify";
import { doLogout } from "@/lib/supabase";
import router from "@/router";


const email = ref("");
const profileImage = ref("");
const theme = useTheme();
const isDarkTheme = computed(() => theme.global.current.value.dark);
const themeIcon = computed(() =>
  isDarkTheme.value ? "mdi-weather-sunny" : "mdi-weather-night"
);
const lightLogo = "src/assets/5-removebg-preview.png";
const darkLogo = "src/assets/7-removebg-preview.png";

const currentLogo = computed(() => 
  isDarkTheme.value ? darkLogo : lightLogo
);

const primary = computed(() => theme.current.value.colors.primary);
const surface = computed(() => theme.current.value.colors.surface);
const background = computed(() => theme.current.value.colors.background);

function toggleTheme() {
  const newTheme = isDarkTheme.value ? "light" : "dark";
  theme.global.name.value = newTheme;
  localStorage.setItem("theme", newTheme);
}

function handleLogoutClick() {
  doLogout();
  router.push("/");
}



const drawer = ref(false);

onMounted(async () => {
  
});
</script>

<style scoped>
.bg-card {
  background: rgb(var(--v-theme-surface)) !important;
  box-shadow: 0 4px 10px rgba(var(--v-theme-primary), 0.3);
  backdrop-filter: blur(5px);
}

.v-btn {
  color: rgb(var(--v-theme-primary)) !important;
}

.v-btn:hover {
  background-color: rgba(var(--v-theme-primary), 0.1) !important;
}

.v-icon {
  color: rgb(var(--v-theme-primary)) !important;
}

.title {
  font-family: "Montserrat", sans-serif !important;
  font-weight: 900;
  margin-left: 0;
  color: rgb(var(--v-theme-primary)) !important;
}

.logo {
  margin-right: 0;
  margin-top: 9px;
}

@media (max-width: 600px) {
  .title {
    font-size: 14px;
  }

  .large-icon {
    width: 36px;
    height: 36px;
  }
  
  .large-icon :deep(.v-icon) {
    font-size: 24px;
  }
}

@media (max-width: 600px) {
  .navbar {
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: rgb(var(--v-theme-surface)) !important;
  }
}
</style>