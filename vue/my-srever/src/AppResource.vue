<template>
  <div id="app2">
    <div class="container pt-2">
      <div class="from-group">
        <label for="name">Car Name</label>
        <input
          id="name"
          type="text"
          class="form-control"
          v-model.trim="carName"
        />
      </div>
      <div class="from-group">
        <label for="year">Car Year</label>
        <input
          id="year"
          type="text"
          class="form-control"
          v-model.number="carYear"
        />
      </div>
      <button class="btn btn-success" @click="createCar">Create car</button>
      <button class="btn btn-primary" @click="loadCars">Load cars</button>
      <hr />
      <ul class="list-group">
        <li class="list-group-item" v-for="car of cars" :key="car.id">
          <strong>{{ car.name }}</strong> - {{ car.year }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  date() {
    return {
      carName: "",
      carYear: 2018,
      cars: [],
      resource: null
    };
  },
  methods: {
    createCar() {
      const car = {
        name: this.carName,
        year: this.carYear
      };
      // this.$http
      //   .post("http://localhost:3000/cars", car)
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(newCar => {
      //     console.log(newCar);
      //   });
      this.resource.save({}, car);
    },
    loadCars() {
      // this.$http
      //   .get("http://localhost:3000/cars")
      //   .then(response => {
      //     return response.json();
      //   })
      //   .then(cars => {
      //     this.cars = cars;
      //     console.log(this.cars);
      //   });
        this.resource.get().then(response => {
            return response.json();
        }).then(cars =>
            this.cars = cars
        );
    }
  },
  created () {
    this.resource = this.$resource("cars");
  }
};
</script>

<style></style>
