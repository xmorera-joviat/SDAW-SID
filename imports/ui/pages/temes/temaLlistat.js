/**
 * Created by Toni Salvador i Martí Gual
 */
 import {Meteor} from 'meteor/meteor';
 import './temaLlistat.html';
 import './temaActionBtns.js';
 import {Tema} from '../../../api/tema/temaTabular.js';
 import { _ } from 'meteor/underscore';
 
Meteor.subscribe('Tema');
Template.temaLlistat.onCreated(function(){
  this.autorun(()=>{
    this.subscribe('tema');
  });
});
