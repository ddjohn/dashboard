<script>
  import { Log } from 'meteor/logging'
  Log.debug({class:'client::main'});

  import { Meteor } from "meteor/meteor";
  import { LinksCollection } from '../api/links';
  import { KpisCollection } from '../api/kpis';
  
  let counter = 0;
  const addToCounter = () => {
    Log.debug({class:'client::main', method:'addToCounter()'});

    counter += 1;
  }
  
  let subIsReady = false;
  $m: {
    const handle = Meteor.subscribe("links.all");
    const handle2 = Meteor.subscribe("kpis.all");
    subIsReady = handle2.ready();
  }

  // more information about $m at https://atmospherejs.com/zodern/melte#tracker-statements
  let kpis;
  $m: kpis = KpisCollection.find().fetch();

  let links;
  $m: links = LinksCollection.find().fetch();
</script>


<div class="container">
  <h1>Welcome to Meteor!</h1>
  kpis: {kpis}
  links: {links}

  <button type="button" class="btn btn-primary" on:click={addToCounter}>Click Me</button>
  <p>You've pressed the button {counter} times.</p>

  <h2>Learn Meteor!</h2>
  {#if subIsReady}
    <ul>
      {#each kpis as kpi (kpi._id)}
        <button type="button" class="btn btn-primary">
          {kpi.name} <span class="badge text-bg-secondary">{kpi.value}</span>
        </button>
      {/each}
    </ul>
    <ul>
      {#each links as link (link._id)}
        <li><a href={link.url} target="_blank" rel="noreferrer">{link.title}</a></li>
      {/each}
    </ul>
  {:else}
    <div>Loading ...</div>
  {/if}
  <h2>Typescript ready</h2>
  <p>Just add lang="ts" to .svelte components.</p>
</div>
