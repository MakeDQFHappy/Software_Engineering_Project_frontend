<template>
  <div class="tinymce-editor">
    <editor
      v-model="myValue"
      :init="init"
      :disabled="disabled"
      @onClick="onClick"
    >
    </editor>
    <Button type="primary" shape="round" size="{large}" @click="publishNotes">
      发布
    </Button>
    <Button type="primary" shape="round" size="{large}" @click="getNotes">
      get
    </Button>
    <div v-for="(item, index) in notesList" :key="index">
      <div v-html="item"></div>
    </div>
  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver/theme";
import "tinymce/plugins/image";
import "tinymce/plugins/media";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/textcolor";

import axios from "axios";

export default {
  components: {
    Editor,
  },
  props: {
    //传入一个value，使组件支持v-model绑定
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    plugins: {
      type: [String, Array],
      default:
        // ' anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists   noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount'
        "lists image media table  wordcount ",
    },
    toolbar: {
      type: [String, Array],
      default:
        // 'undo redo | searchreplace | bold  italic | underline | strikethrough | alignleft  aligncenter alignright | outdent indent  blockquote  removeformat subscript superscript code codesample hr bullist numlist link image charmap preview anchor pagebreak insertdatetime  table  forecolor backcolor'
        "undo redo |  formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat hr",
    },
  },
  data() {
    return {
      //初始化配置
      init: {
        skin_url: "/tinymce/skins/ui/oxide",
        height: 300,
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        menubar: false,
        //此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        //如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          let formData = new FormData();
          formData.append("content", blobInfo.base64());
          axios.post("/test_picture", formData).then((res) => {
            console.log("数据：", res);
            console.log(res.status);
            if (res.status == 200) {
              const img = "data:image/jpeg;base64," + blobInfo.base64();
              success(img);
            } else {
              success("");
            }
          });
        },
        resize: false,
      },
      myValue: this.value,
      noteContent: "",
      notesList: [],
    };
  },
  mounted() {
    tinymce.init({});
  },
  methods: {
    //添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
    //需要什么事件可以自己增加
    onClick(e) {
      this.$emit("onClick", e, tinymce);
    },
    //可以添加一些自己的自定义事件，如清空内容
    clear() {
      this.myValue = "";
    },
    publishNotes(content) {
      console.log(this.myValue);

      // form-data 请求
      let formData = new FormData();
      formData.append("content", this.myValue);
      axios.post("/upload", formData).then((res) => {
        console.log("数据：", res);
      });
    },

    getNotes() {
      axios
        .get("/download", {
          params: {},
        })
        .then((res) => {
          console.log("数据：", res);
          this.noteContent = res.data.content;
          this.notesList.push(res.data.content);
          console.log("数据：", this.notesList);
        });
    },
  },
  watch: {
    value(newValue) {
      this.myValue = newValue;
    },
    myValue(newValue) {
      this.$emit("input", newValue);
    },
  },
};
</script>
<style>
  .wrapper {
    height: 100vh;
    background-image: linear-gradient(to bottom right, #FC466B , #3F5EFB);
    overflow: hidden;
  }
</style>
