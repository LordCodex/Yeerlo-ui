<template>
  <div id="axiosForm">
    <div class="loader" v-if="loading">
      <h4 class="font-weight-semibold mb-4">Create a new Post</h4>
      <fieldset :disabled="loading">
        <form
          class="contact-form"
          @submit.prevent="storePost"
          method="POST"
          novalidate="novalidate"
        >
          <div
            class="contact-form-success alert alert-success mt-4"
            v-if="success"
          >
            <strong>Success!</strong> Your post is created.
          </div>

          <div class="contact-form-error alert alert-danger mt-4" v-if="error">
            <strong>Error!</strong> There was an error sending your request.
          </div>
          <div class="form-row">
            <div class="form-group col">
              <input
                type="text"
                placeholder="Post Title"
                maxlength="100"
                class="form-control"
                name="title"
                v-model="formData.title"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <textarea
                maxlength="5000"
                placeholder="Body"
                rows="5"
                class="form-control"
                name="body"
                required=""
                v-model="formData.body"
              ></textarea>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <input
                type="submit"
                value="Send Message"
                class="btn btn-primary btn-lg mb-5"
              />
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "form-loading-spinner-example",
  data() {
    return {
      success: false,
      error: false,
      loading: false,
      formData: { title: null, body: null },
    };
  },
  methods: {
    storePost() {
      (this.loading = true),
        axios
          .post("https://jsonplaceholder.typicode.com/posts", this.formData)
          .then((res) => {
            this.reset();
            this.success = true;
            console.log(res);
          })
          .catch((error) => {
            this.error = true;
            console.log(error);
          })
          .finally(() => {
            this.loading = false;
          });
    },
    reset() {
      this.success = false;
      this.error = false;
      for (let field in this.formData) {
        this.formData[field] = null;
      }
    },
  },
};
</script>
