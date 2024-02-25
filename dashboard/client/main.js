import { Log } from 'meteor/logging'
Log.debug({class:'client::main'});

import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

Meteor.startup(() => {
  Log.debug({class:'client::main', method:'startup()'});

  new App({
    target: document.getElementById('app')
  });
});