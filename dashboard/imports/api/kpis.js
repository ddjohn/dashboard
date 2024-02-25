import { Log } from 'meteor/logging'
Log.debug({class:'client::kpis'});

import { Mongo } from 'meteor/mongo';

export const KpisCollection = new Mongo.Collection('kpis');
