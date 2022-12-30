<template>
  <div v-if="show">
    <a-icon type="close" @click="closeEditor"/>
    <a-input v-model:value="title" placeholder="TITLE" />
    <div>
      <template v-for="(tag, index) in tags">
        <a-tooltip v-if="tag.length > 20" :key="tag-1+1" :title="tag">
          <a-tag
            :key="tag"
            :closable="true"
            @close="() => handleClose(tag)"
          >
            {{ `${tag.slice(0, 20)}...` }}
          </a-tag>
        </a-tooltip>
        <a-tag
          v-else
          :key="tag"
          :closable="true"
          @close="() => handleClose(tag)"
        >
          {{ tag }}
        </a-tag>
      </template>
      <a-input
        v-if="inputVisible"
        ref="input"
        type="text"
        size="small"
        :style="{ width: '78px' }"
        :value="inputValue"
        @change="handleInputChange"
        @blur="handleInputConfirm"
        @keyup.enter="handleInputConfirm"
      />
      <a-tag
        v-else
        style="background: #fff; borderstyle: dashed"
        @click="showInput"
      >
        <a-icon type="plus" /> 添加Tag
      </a-tag>
    </div>

    <div class="tinymce-editor">
      <editor
        v-model="content"
        :init="init"
        :disabled="disabled"
        @onClick="onClick"
      >
      </editor>

      <a-button type="primary" @click="publishNotes" shape="round" size="large">
        发布
      </a-button>
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

import "tinymce/icons/default/icons.min.js";
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

  props: ["show"],

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
              this.$message.warning("疑艳丁真 鉴定为：黄");
              success("");
            }
          });
        },
        resize: false,
      },
      myValue: this.value,

      title: "",
      content: "",

      tags: ["软件工程", "间谍过家家"],
      inputVisible: false,
      inputValue: "",
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

    publishNotes() {
      // form-data 请求
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("content", this.content);
      formData.append("sharerID", "1");
      formData.append("points", "128");


      for (var index in this.tags){
        formData.append("tags", this.tags[index]);
      }

      console.log(formData);

      axios.post("/upload", formData).then((res) => {
        console.log("数据：", res);
      });
    },

    closeEditor(){
      this.$emit("update:show",false);
    },




    handleClose(removedTag) {
      const tags = this.tags.filter((tag) => tag !== removedTag);
      console.log(tags);
      this.tags = tags;
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
      });
    },

    handleInputChange(e) {
      this.inputValue = e.target.value;
    },

    handleInputConfirm() {
      const inputValue = this.inputValue;
      let tags = this.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log(tags);
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: "",
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
<style scoped>


</style>
