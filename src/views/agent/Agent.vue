<template>
  <div class="agent">
      <house-selection></house-selection>
      <agent-list :agentList="agentList"></agent-list>
  </div>
</template>
<script>
import HouseSelection from './children/HouseSelection.vue';
import AgentList from './children/AgentList.vue';
import { getAgentList } from "../../network/agent";

export default {
  name: "Agent",
  data() {
    return {
        agentList: [],
    };
  },
  components: {
    HouseSelection,
    AgentList,
  },
  created() {
    this.getAgentList();
  },
  methods: {
    getAgentList() {
      getAgentList().then((res) => {
        console.log(res);
        this.agentList = res;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.agent {
    padding: 10px;
}
</style>