import { Log } from 'meteor/logging'
Log.debug({class:'server::main'});

import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';

async function insertLink({ title, url }) {
  Log.debug({class:'server::main', method:'insertLink()'});

  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.publish('links.all', function publishLinksAll() {
  Log.debug({class:'server::main', method:'publishLinksAll()'});

  return LinksCollection.find();
})

Meteor.startup(async () => {
  Log.debug({class:'server::main', method:'startup()'});

  // If the Links collection is empty, add some data.
  if (await LinksCollection.find().countAsync() === 0) {
    await insertLink({
      title: 'Do the Tutorial',
      url: 'https://svelte-tutorial.meteor.com/',
    });

    await insertLink({
      title: 'Follow the Guide',
      url: 'https://guide.meteor.com',
    });

    await insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com',
    });

    await insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com',
    });
  }
});
