<template>
  <div>
    <a-comment>
      <a-avatar
        slot="avatar"
        src="https://sse.tongji.edu.cn/__local/7/8C/0E/AE7B71B95751451DA25F342F447_F7B7F920_12B65.png?e=.png"
        alt="Han Solo"
      />
      <div slot="content">
        <a-form-item>
          <a-textarea :rows="4" :value="value" @change="handleChange" />
        </a-form-item>
        <a-form-item>
          <a-button
            html-type="submit"
            :loading="submitting"
            type="primary"
            @click="handleSubmit"
          >
            Add Comment
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
  </div>
</template>
<script>
import moment from "moment";
import axios from "axios";

export default {
  props: ["noteID"],

  data() {
    return {
      comments: [],
      submitting: false,
      value: "",
      moment,
    };
  },
  methods: {
    makeComment() {
      let formData = new FormData();
      formData.append("userID", 1);
      formData.append("targetID", this.noteID);
      formData.append("content", this.value);

      axios.post("/make_comment", formData).then((res) => {
        console.log("数据：", res);
      });
    },
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      this.makeComment();
      this.submitting = false;
      this.value = "";

      this.$router.go(0);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
  },
};
</script>
