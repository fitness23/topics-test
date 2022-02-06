<template>
    <div class="details">
        <div class="name">Information on topic: "{{selectedTopic.label}}"</div>
        <div class="totalMentions">Total Mentions: {{selectedTopic.volume}}</div>
        <div class="positive">Positive Mentions: <span class="high">{{formatMentionsScore(selectedTopic.sentiment.positive)}}</span></div>
        <div class="neutral">Neutral Mentions: <span>{{formatMentionsScore(selectedTopic.sentiment.neutral)}}</span></div>
        <div class="negative">Negative Mentions: <span class="low">{{formatMentionsScore(selectedTopic.sentiment.negative)}}</span></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopicsDataItem from "@/types/TopicsDataItem";

export default defineComponent({
    name: 'Detail',
    props: {
      selectedTopic: {
        type: Object as () => TopicsDataItem
      }
    },
    data() {
        return {
        };
    },
    methods: {
        formatMentionsScore(score: number){
        if ((score == null))
        {
            return 0
        }
        else
        {
            return score;
        }
        }
  },
});
</script>

<style lang="scss">
.details
{
  margin-left: 630px;
  border: 1px solid grey;
  padding: 20px;
  text-align: left;

  span{
    display: inline;
  }

  .name{
  margin-bottom: 20px;
  }

  .totalMentions{
  margin-bottom: 20px;
  }

  .high{
    color: green;
  }

  .low{
    color: red;
  }
}
</style>
