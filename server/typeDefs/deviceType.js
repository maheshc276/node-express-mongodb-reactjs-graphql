var GraphQLString = require('graphql').GraphQLString;
var GraphQLDate = require('graphql-date');

var bookType = new GraphQLObjectType({
    name: 'book',
    fields: function () {
      return {
        _id: {
          type: GraphQLString
        },
        isbn: {
          type: GraphQLString
        },
        title: {
          type: GraphQLString
        },
        author: {
          type: GraphQLString
        },
        description: {
          type: GraphQLString
        },
        published_year: {
          type: GraphQLInt
        },
        publisher: {
          type: GraphQLString
        },
        updated_date: {
          type: GraphQLDate
        }
      }
    }
  });

  module.exports = bookType;