/**
 * Created by Toni Salvador i Martí Gual on 19/1/17.
 */

import {Meteor} from 'meteor/meteor';
import {Grups} from '../grups.js';

export default function () {
  Meteor.publish('grup', function () {
      return Grups.find({});
  });
};



