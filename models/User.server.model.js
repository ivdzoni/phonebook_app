// Dependencies
const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// Schema	
const UserSchema = new Schema({
first_name: String,
last_name: {
	type: String,
required: [true]
},
telephone_number: Number
});

// Return model
const User = module.exports = mongoose.model('User', UserSchema);