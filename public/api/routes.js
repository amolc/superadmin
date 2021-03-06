
var request = require('request');
var config = require('./config');
var baseUrl = config.getbaseurl();

function get_json(url, callback) {
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
	request(baseUrl + url, {
		json: true
	}, (err, res, body) => {
		if (err) {
			return console.log(err);
		}
		callback(res.body);
	});
}


//----version2 files
exports.index = function (req, res) {
	console.log("index call");
	var data1 = [];
	var jsondata = {
		seoId: 1,
		title: 'Get the headphones, camera, laptop, mobile, tablets, speakers, smartwatch & play station Singapore.',
		description: 'Gadgetsinasia launches gaming headphones, cameras, wireless speakers, mobile, laptop, tablet, iPads, smartwatch & PlayStation at the lowest price with the top brands online in Singapore.',
		keywords: 'Best Gaming Headphones, Cheap iPad Online, Best Smartwatch Singapore, Cheap and Best Smartphone, Digital Camera, Apple MacBook Singapore, Best Bluetooth Speaker ',
		special: ''
	};
	data1['jsondata'] = jsondata;
	get_json('getAllCategory', function (response1) {
		data1['getCategory'] = response1;
		get_json('allDeals', function (response2) {
			data1['allDeals'] = response2;
			get_json('allBrandsImage', function (response3) {
				data1['allBrandsImage'] = response3;
				res.render('index', data1);
			});
		});
	});

};

exports.getallusers = function (req, res) {
	console.log("getallusers call");
	var data1 = [];
	var jsondata = {
		seoId: 1,
		title: 'Get the headphones, camera, laptop, mobile, tablets, speakers, smartwatch & play station Singapore.',
		description: 'Gadgetsinasia launches gaming headphones, cameras, wireless speakers, mobile, laptop, tablet, iPads, smartwatch & PlayStation at the lowest price with the top brands online in Singapore.',
		keywords: 'Best Gaming Headphones, Cheap iPad Online, Best Smartwatch Singapore, Cheap and Best Smartphone, Digital Camera, Apple MacBook Singapore, Best Bluetooth Speaker ',
		special: ''
	};
	data1['jsondata'] = jsondata;
	get_json('1/user/getAllUsers/', function (response1) {
		console.log(response1);
		data1['getallusers'] = response1;
		res.render('getallusers', data1);
		
	});

};

exports.getallparcels = function (req, res) {
	console.log("getallparcels call");
	var data1 = [];
	var jsondata = {
		seoId: 1,
		title: 'Get the headphones, camera, laptop, mobile, tablets, speakers, smartwatch & play station Singapore.',
		description: 'Gadgetsinasia launches gaming headphones, cameras, wireless speakers, mobile, laptop, tablet, iPads, smartwatch & PlayStation at the lowest price with the top brands online in Singapore.',
		keywords: 'Best Gaming Headphones, Cheap iPad Online, Best Smartwatch Singapore, Cheap and Best Smartphone, Digital Camera, Apple MacBook Singapore, Best Bluetooth Speaker ',
		special: ''
	};
	data1['jsondata'] = jsondata;
	get_json('parcel/getallparcels/', function (response1) {
		console.log(response1);
		data1['getallparcels'] = response1;
		res.render('getallparcels', data1);
		
	});

};

exports.newuser = function (req, res) {
	console.log("createUser call");
	var data1 = [];
	var jsondata = {
		seoId: 1,
		title: 'Get the headphones, camera, laptop, mobile, tablets, speakers, smartwatch & play station Singapore.',
		description: 'Gadgetsinasia launches gaming headphones, cameras, wireless speakers, mobile, laptop, tablet, iPads, smartwatch & PlayStation at the lowest price with the top brands online in Singapore.',
		keywords: 'Best Gaming Headphones, Cheap iPad Online, Best Smartwatch Singapore, Cheap and Best Smartphone, Digital Camera, Apple MacBook Singapore, Best Bluetooth Speaker ',
		special: ''
	};
	data1['jsondata'] = jsondata;
	get_json('parcel/createUser/', function (response1) {
		console.log(response1);
		data1['createUser'] = response1;
		res.render('createUser', data1);
		
	});

};

exports.bookingform = function (req, res) {
	console.log("createParcel call");
	var data1 = [];
	var jsondata = {
		seoId: 1,
		title: 'Get the headphones, camera, laptop, mobile, tablets, speakers, smartwatch & play station Singapore.',
		description: 'Gadgetsinasia launches gaming headphones, cameras, wireless speakers, mobile, laptop, tablet, iPads, smartwatch & PlayStation at the lowest price with the top brands online in Singapore.',
		keywords: 'Best Gaming Headphones, Cheap iPad Online, Best Smartwatch Singapore, Cheap and Best Smartphone, Digital Camera, Apple MacBook Singapore, Best Bluetooth Speaker ',
		special: ''
	};
	data1['jsondata'] = jsondata;
	get_json('parcel/parcel-createPickup/', function (response1) {
		console.log(response1);
		data1['bookingform'] = response1;
		res.render('bookingform', data1);
		
	});

};



