<template>
<div id="content">
  <h1 class="title">My Topics Challenge</h1>
  <div>
      <div class="wordCloudList">
        <ul>
          <li
            v-for="(topic, index) in myTopics.topics"
            :key="index"
            @click="setActiveTopic(topic)"
            v-bind:class="[determineSentiment(topic.sentimentScore), determineTextSize(topic.sentimentScore)]"
          >
            {{ topic.label }}
          </li>
        </ul>
      </div>
  </div>

  <Detail v-if="selectedTopic.id != null" :selectedTopic="selectedTopic" />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Detail from '@/components/Detail.vue';
import TopicsDataItem from "@/types/TopicsDataItem";
import myTopics from '../data/topics.json';

export default defineComponent({
    name: 'list',
    components: { Detail },
    data() {
        return {
            myTopics,
            selectedTopic: {} as TopicsDataItem
        };
    },
    methods: {
      checkParams() {

        // If the url has a param id last time we visited, then find the correct object in the arrary via the id and send to Detail component as a prop
        if ((this.$route.params.id != null))
        {
          this.selectedTopic = JSON.parse(JSON.stringify(this.myTopics.topics.find(x => x.id === this.$route.params.id)));
        }
          
      },
      setActiveTopic(topic: TopicsDataItem){
        this.selectedTopic = topic;
        this.$router.push('/topics-details/'+topic.id);
      },
      determineSentiment(score: number){
        if ((score > 60))
        {
          return "high";
        }
        else if ((score < 40))
        {
          return "low";
        }
        else
        {
          return "middle";
        }
      },
      determineTextSize(score: number){
        if ((score >= 83))
        {
          return "popularityLevel01";
        }
        else if ((score < 83) && (score >= 66.4))
        {
          return "popularityLevel02";
        }
        else if ((score < 66.4) && (score >= 49.8))
        {
          return "popularityLevel03";
        }
        else if ((score < 49.8) && (score >= 33.2))
        {
          return "popularityLevel04";
        }
        else if ((score < 33.2) && (score >= 16.6))
        {
          return "popularityLevel05";
        }
        else
        {
          return "popularityLevel06";
        }
      }
  },
    mounted() {
        this.checkParams();
    },
    setup() {
        document.title = 'Topics';
    },
});
</script>

<style lang="scss">

#content{
  padding: 30px;
}

.title
{
  margin-bottom: 30px;
}

.wordCloudList{

  float: left;
  width: 600px;
  text-align: left;

  ul {
    margin: 0px;
    padding: 0px;
    list-style-type: none;

  li {
    margin: 0px;
    padding: 0px;
    list-style: none;
    cursor: pointer;
  }

  li.popularityLevel01{
  font-size: 60px;
}

li.popularityLevel02{
  font-size: 50px;
}

li.popularityLevel03{
  font-size: 40px;
}

li.popularityLevel04{
  font-size: 30px;
}

li.popularityLevel05{
  font-size: 20px;
}

li.popularityLevel06{
  font-size: 10px;
}

li.high {
  color: green;
}

li.middle {
  color: grey;
}

li.low {
  color: red;
}

  }
}
</style>
