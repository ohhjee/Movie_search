<template>
  <div class="home">
    <div class="feature_card">
      <router-link to="/movie/tt0409591" class="relative">
        <img
          src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/Naruto-Every-Movie-In-Order-Of-Release.png?q=50&fit=contain&w=750&h=&dpr=1.5"
          class="w-full h-[70vh] object-cover object-left lg:object-top"
          alt="na"
        />
        <div
          class="absolute bottom-0 left-0 right-0 w-full lg:px-5 bg-[rgba(0,0,0,.6)] py-5"
        >
          <div class="text-white px-2 lg:px-0 details">
            <h3 class="text-[1.5rem] font-bold lg:text-[3rem]">Naruto</h3>
            <p>
              Naruto Uzumaki, a mischievous adolescent ninja, struggles as he
              searches for recognition and dreams of becoming the Hokage, the
              village's leader and strongest ninja.
            </p>
          </div>
        </div>
      </router-link>
    </div>
    <form
      @submit.prevent="SearcMovie()"
      class="search-box flex items-center justify-center flex-col p-[16px]"
    >
      <input
        type="text"
        name=""
        id=""
        class="block appearance-none border-none outline-none placeholder:text-white focus:placeholder:text-white text:text-white text:bg-[#496583]"
        placeholder="What are you looking for?"
        v-model="search"
      />
      <input type="submit" name="" id="" value="Search" />
    </form>
    <div class="move-list lg:flex-wrap lg:flex m-[0px_8px]">
      <div
        v-for="movie in movies"
        :key="movie.imdbID"
        class="lg:w-1/2 p-[16px] lg:flex-[1_1_50%] movie mb-[5rem]"
      >
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
          <div class="product-image flex items-center justify-center relative">
            <img
              :src="movie.Poster"
              alt="Movie Poster"
              class="w-full h-[70vh] object-cover object-top"
            />
            <div
              class="move-type capitalize font-bold text-white p-[10px] absolute bg-green-600 left-0 bottom-2"
            >
              {{ movie.Type }}
            </div>
          </div>
          <div class="">
            <div
              class="detail bg-[#496583] py-[16px] px-[8px] rounded-bl-[8px] rounded-br-[8px]"
            >
              <p class="text-[16px] text-[#aaa]">{{ movie.Year }}</p>
              <h3 class="text-white text-[1rem] lg:text-[1rem]">
                {{ movie.Title }}
              </h3>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "HomeView",
  components: {},
  setup() {
    const search = ref<string>("");
    const movies = ref<string[]>([]);
    const SearcMovie = async () => {
      if (search.value !== "") {
        // console.log(process.env.VUE_APP_BASE_URL);
        try {
          await axios(
            `https://www.omdbapi.com/?apikey=fe4814bc&s=${search.value}`
          )
            .then((res) => res.data)
            .then((data) => {
              movies.value = data.Search;
              search.value = "";

              // console.log(movies.value);
            });
        } catch (err: any | unknown) {
          // console.log(err.message);
        }
      }
    };
    return { search, movies, SearcMovie };
  },
});
</script>
<style>
body {
  background: #35495e;
}
.search-box {
}
input {
  display: block;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
input[type="text"] {
  width: 100%;
  color: white;
  background-color: #496583;
  font-size: 20px;
  padding: 10px 16px;
  border-radius: 8px;
  margin-bottom: 15px;
  transition: 0.5s;
}
input::placeholder {
  color: #fff;
}
input[type="submit"] {
  width: 100%;
  max-width: 300px;
  background-color: #42b883;
  padding: 16px;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  transition: 0.4s;
}
input:active {
  background-color: #3b8070;
}
</style>
