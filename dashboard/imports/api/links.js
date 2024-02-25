import { Log } from 'meteor/logging'
Log.debug({class:'client::links'});

import { Mongo } from 'meteor/mongo';

export const LinksCollection = new Mongo.Collection('links');
