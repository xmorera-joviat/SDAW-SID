import {Router} from 'meteor/iron:router';
import '../ui/layouts/baseLayout.js';
import '../ui/pages/rols/Rols.js';
import '../ui/pages/exemplePaginacio/exemplePaginacio.js';
import '../ui/pages/temes/temes.js';
<<<<<<< HEAD
=======
import '../ui/pages/usuaris/usuaris.js';
import '../ui/pages/old/homes/professor/home.js';
import '../ui/pages/llicons/llicons.js';
import '../ui/pages/grups/grups.js';
>>>>>>> master


Router.configure({
  layoutTemplate: 'baseLayout'
});
Router.route('/',function(){
  this.render('welcome');
});
Router.route('/professor',function(){
  this.render('professor');
});
Router.route('/home',function(){
  this.render('home');
});

Router.route('/usuaris',function(){
 this.render('usuaris');
});
Router.route('/exemplePaginacio',function(){
  this.render('exemplePaginacio');
});
Router.route('/rols',function(){
  this.render('rols');
});
<<<<<<< HEAD
Router.route('/temes',function(){
 this.render('temes');
});
=======

>>>>>>> master
Router.route('/llistatUsuaris',function(){
    this.render('llistatUsers');
});
Router.route('/grups',function(){
    this.render('grups');
});
Router.route('/temes',function(){
 this.render('temes');
});
Router.route('/llicons',function(){
 this.render('llicons');
});


