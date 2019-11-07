var BookModel = require('../../models/Book');
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;

const addBookArgs = {
	isbn: {
		type: new GraphQLNonNull(GraphQLString)
	},
	title: {
		type: new GraphQLNonNull(GraphQLString)
	},
	author: {
		type: new GraphQLNonNull(GraphQLString)
	},
	description: {
		type: new GraphQLNonNull(GraphQLString)
	},
	published_year: {
		type: new GraphQLNonNull(GraphQLInt)
	},
	publisher: {
		type: new GraphQLNonNull(GraphQLString)
	}
};

const updateBookArgs = {
	id: {
		name: 'id',
		type: new GraphQLNonNull(GraphQLString)
	},
	isbn: {
		type: new GraphQLNonNull(GraphQLString)
	},
	title: {
		type: new GraphQLNonNull(GraphQLString)
	},
	author: {
		type: new GraphQLNonNull(GraphQLString)
	},
	description: {
		type: new GraphQLNonNull(GraphQLString)
	},
	published_year: {
		type: new GraphQLNonNull(GraphQLInt)
	},
	publisher: {
		type: new GraphQLNonNull(GraphQLString)
	}
};

const removeBookArgs = {
	id: {
		type: new GraphQLNonNull(GraphQLString)
	}
};


function getBooks() {
	var books = BookModel.find().exec()
	if (!books) {
		throw new Error('Error')
	}
	return books
}

function getBook(root, params) {
	console.log(params);
	const bookDetails = BookModel.findById(params.id).exec()
	if (!bookDetails) {
		throw new Error('Error')
	}
	return bookDetails
}

function addBook(root, params) {
	const bookModel = new BookModel(params);
	const newBook = bookModel.save();
	if (!newBook) {
		throw new Error('Error');
	}
	return newBook
}

function removeBook(root, params) {
	const remBook = BookModel.findByIdAndRemove(params.id).exec();
	if (!remBook) {
		throw new Error('Error')
	}
	return remBook;
}

function updateBook(root, params) {
	return BookModel.findByIdAndUpdate(params.id, {
		isbn: params.isbn,
		title: params.title,
		author: params.author + 'Njan thanne',
		description: params.description,
		published_year: params.published_year,
		publisher: params.publisher,
		updated_date: new Date()
	}, function (err) {
		if (err) return next(err);
	});
}

module.exports = {
	getBooks,
	getBook,
	addBookArgs,
	addBook,
	updateBookArgs,
	updateBook,
	removeBookArgs,
	removeBook
}