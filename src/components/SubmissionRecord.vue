<template>
  <div>
    <a-form layout="inline">
      <a-form-item field="language" label="编程语言" style="min-width: 240px">
        <a-select
          v-model="searchParams.language"
          :style="{ width: '320px' }"
          placeholder="选择编程语言"
        >
          <a-option>java</a-option>
          <a-option>cpp</a-option>
          <a-option>go</a-option>
          <a-option>html</a-option>
        </a-select>
      </a-form-item>
    </a-form>
    <a-divider size="0" />
    <a-table
      :ref="tableRef"
      :columns="columns"
      :data="dataList"
      :pagination="{
        showTotal: true,
        pageSize: searchParams.pageSize,
        current: searchParams.current,
        total,
      }"
      @page-change="onPageChange"
    >
      <template #judgeResult="{ record }">
        <span :class="getJudgeColor(record.judgeInfo.message)">
          {{ record.judgeInfo.message }}
        </span>
      </template>
      <template #createTime="{ record }">
        {{ moment(record.createTime).format("YYYY-MM-DD") }}
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, watchEffect } from "vue";
import message from "@arco-design/web-vue/es/message";
import { useRoute, useRouter } from "vue-router";
import {
  Question,
  QuestionControllerService,
  QuestionSubmitQueryRequest,
} from "../../generated";
import { useStore } from "vuex";
import moment from "moment";

const tableRef = ref();
const store = useStore();
const loginUser = store.state.user.loginUser;
const dataList = ref([] as any);
const total = ref(0 as any);
const route = useRoute();
const questionId = route.params.id;
const searchParams = ref<QuestionSubmitQueryRequest>({
  questionId: undefined,
  language: undefined,
  pageSize: 10,
  current: 1,
});

// eslint-disable-next-line no-undef
const props = defineProps({
  shouldReload: Boolean, // 接收父组件传来的布尔值
});

watch(
  () => props.shouldReload,
  (newVal) => {
    if (newVal) {
      // 当 shouldReload 为 true 时重新加载记录
      loadData();
    }
  }
);

const loadData = async () => {
  const res = await QuestionControllerService.listQuestionSubmitByPage({
    ...searchParams.value,
    sortField: "createTime",
    sortOrder: "descend",
    userId: loginUser.id,
    questionId: questionId,
  });
  if (res.code === 0) {
    dataList.value = res.data?.records;
    total.value = res.data?.total;
  } else {
    message.error("加载失败，" + res.message);
  }
};

/**
 * 监听 searchParams 变量，改变时触发页面的重新加载
 */
watchEffect(() => {
  loadData();
});

/**
 * 页面加载时，请求数据
 */
onMounted(() => {
  loadData();
});

// {id: "1", title: "A+ D", content: "新的题目内容", tags: "["二叉树"]", answer: "新的答案", submitNum: 0,…}

const columns = [
  {
    title: "编程语言",
    dataIndex: "language",
  },
  {
    title: "判题结果",
    slotName: "judgeResult",
  },
  {
    title: "占用内存",
    dataIndex: "judgeInfo.memory",
  },
  {
    title: "判题时间",
    dataIndex: "judgeInfo.time",
  },
  // {
  //   title: "判题信息",
  //   slotName: "judgeInfo",
  // },
  {
    title: "判题状态",
    dataIndex: "status",
  },
  {
    title: "题目 id",
    dataIndex: "questionId",
  },
  {
    title: "创建时间",
    slotName: "createTime",
  },
];

const onPageChange = (page: number) => {
  searchParams.value = {
    ...searchParams.value,
    current: page,
  };
};
const router = useRouter();

/**
 * 跳转到做题页面
 * @param question
 */
const toQuestionPage = (question: Question) => {
  router.push({
    path: `/view/question/${question.id}`,
  });
};

/**
 * 确认搜索，重新加载数据
 */
const doSubmit = () => {
  // 这里需要重置搜索页号
  searchParams.value = {
    ...searchParams.value,
    current: 1,
  };
};
const getJudgeColor = (message: string) => {
  switch (message) {
    case "Accepted":
      return "green";
    case "Wrong Answer":
      return "red";
    default:
      return "blue";
  }
};
</script>

<style scoped>
#questionSubmitView {
  max-width: 1280px;
  margin: 0 auto;
}

.green {
  color: green;
}

.red {
  color: red;
}

.blue {
  color: blue;
}
</style>
