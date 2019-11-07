var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLDate = require('graphql-date');
var BookModel = require('../models/Book');
var DeviceConfigModel = require('../models/DeviceConfig');
var bookType = require('../typeDefs/bookType');
var deviceType = require('../typeDefs/deviceType');
var bookResolvers= require('./resolvers/bookResolvers');


module.exports = function () {
	return {
		addBook: {
			type: bookType,
			args: bookResolvers.addBookArgs,
			resolve: (root, params) => bookResolvers.addBook(root, params)
		},
		updateBook: {
			type: bookType,
			args: bookResolvers.updateBookArgs,
			resolve: (root, params) => bookResolvers.updateBook(root, params)
		},
		removeBook: {
			type: bookType,
			args: bookResolvers.removeBookArgs,
			resolve: (root, params) => bookResolvers.removeBook(root, params)
		},
		addDevices: {
			type: deviceType,
			args: {
				user_config_id: {
					type: new GraphQLNonNull(GraphQLString)
				},
				name: {
					type: new GraphQLNonNull(GraphQLString)
				},
				device_reg_id: {
					type: new GraphQLNonNull(GraphQLString)
				},
				email_id: {
					type: new GraphQLNonNull(GraphQLString)
				},
				mobile_no: {
					type: new GraphQLNonNull(GraphQLInt)
				},
				stop_notify: {
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve: function (root, params) {
				const deviceConfigModel = new DeviceConfigModel(params);
				const newConfig = deviceConfigModel.save();
				if (!newConfig) {
					throw new Error('Error');
				}
				return newConfig
			}
		},
	}
};