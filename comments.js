// Create web server

var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var Post = require('../models/post');
var User = require('../models/user');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Create comment
router.post('/create', function(req, res, next) {
  var comment = new Comment({
    _id: new mongoose.Types.ObjectId(),
    content: req.body.content,
 