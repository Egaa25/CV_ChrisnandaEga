<template>
  <div class="flex min-h-screen flex-col">
    <!-- Header Section -->
    <header class="hero min-h-1/4 bg-cover bg-bottom xl:bg-bottom">
      <div class="pt-0 md:pt-2"></div>
      <nav
        class="mx-auto w-full rounded-lg bg-primary bg-opacity-30 p-4 shadow-blue-500 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-600 md:w-4/5"
      >
        <ul
          class="flex items-center justify-around gap-x-8 text-lg font-bold text-white"
        >
          <li
            class="cursor-pointer transition-colors duration-300 hover:text-yellow-300"
          >
            Home
          </li>
          <span class="hidden h-8 border-r-2 border-yellow-100 md:block"></span>
          <li
            class="cursor-pointer transition-colors duration-300 hover:text-yellow-300"
          >
            Radar
          </li>
          <span class="hidden h-8 border-r-2 border-yellow-100 md:block"></span>
          <li
            class="cursor-pointer transition-colors duration-300 hover:text-yellow-300"
          >
            Blog
          </li>
          <span class="hidden h-8 border-r-2 border-yellow-100 md:block"></span>
          <li
            class="cursor-pointer transition-colors duration-300 hover:text-yellow-300"
          >
            Kontak
          </li>
        </ul>
      </nav>
      <h2 class="tracking-white px-10 pt-20 text-9xl font-bold text-yellow-100">
        Hello!
      </h2>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <section class="px-12 py-8 text-yellow-100">
        <h2 class="text-4xl">
          Namaku Ega<br />
          - <br />
          Mahasiswa Teknologi Informasi di Universitas Brawijaya
        </h2>
        <h1 class="py-12 text-5xl">
          Front End Web
          <span
            class="bg-gradient-to-r from-yellow-100 to-blue-900 bg-clip-text font-extrabold tracking-wide text-transparent"
          >
            Developer
          </span>
        </h1>
      </section>
    </main>

    <!-- Footer Section -->
    <footer
      class="flex items-center border-t-2 border-gray-600 bg-gray-100 p-4 text-gray-600"
    >
      <h2
        class="cursor-pointer font-bold transition-colors duration-300 hover:text-yellow-300"
      >
        My Skills :
      </h2>
      <img class="mr-2 w-16" src="/assets/images/2.png" alt="HTML" />
      <img class="mr-2 w-16" src="/assets/images/3.png" alt="CSS" />
      <img class="mr-2 w-16" src="/assets/images/7.png" alt="JavaScript" />
      <img class="mr-2 w-16" src="/assets/images/6.png" alt="PHP" />
      <p class="ml-4 text-sm">
        © 2024 CV -
        <a
          href="#"
          class="text-blue-400 transition-colors duration-300 hover:text-blue-600"
          target="_blank"
          >@MyCV</a
        >
      </p>
        <h2
          class="ml-80 cursor-pointer font-bold transition-colors duration-300 hover:text-yellow-300"
        >
          Social Media :
        </h2>
      <div class="ml-auto mr-20 flex space-x-6">
        <a href="https://github.com/Egaa25" target="_blank">
          <img
            class="w-12 transition-opacity duration-300 hover:opacity-80"
            src="/assets/images/4.png"
            alt="GitHub"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/chrisnanda-ega-ananta-0b0ab3288/"
          target="_blank"
        >
          <img
            class="w-12 transition-opacity duration-300 hover:opacity-80"
            src="/assets/images/5.png"
            alt="LinkedIn"
          />
        </a>
        <a href="https://www.instagram.com/chrisnandaegaa_/" target="_blank">
          <img
            class="w-12 transition-opacity duration-300 hover:opacity-80"
            src="/assets/images/1.png"
            alt="Instagram"
          />
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0) 10%, rgba(9, 0, 37, 1) 80%),
    url("/assets/images/6106991.jpg");
}
</style>
