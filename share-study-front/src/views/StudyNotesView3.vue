<template>
    <div>
        <TextArea id="content" rows={6} placeholder="有什么新鲜事想分享给大家？" maxLength={6} style="width: 100%; height: 50%;"/>
        <Button type="primary" shape="round" size={large} @click="publishNotes">
        发布
      </Button>

    </div>
</template>

<script>
import StudyNotes from "@/components/StudyNotes.vue";
import { Input } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
const { TextArea } = Input;
export default {
  name: 'StudyNotes-view',
  onMounted(){
  },
  data(){
    return {

    }
  },
  methods: {
	publishNotes(){
        var content = document.getElementById("content");
        console.log(content.value)
	},
  },
  components: {
    StudyNotes
  }
}
</script>

<style scoped>

</style>