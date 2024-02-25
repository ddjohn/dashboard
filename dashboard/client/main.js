import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

Meteor.startup(() => {
  new App({
    target: document.getElementById('app')
  });
});