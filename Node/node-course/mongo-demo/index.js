const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises',  {useNewUrlParser: true});

const courseSchema = new mongoose.Schema({
	name: String,
	author: String,
	tags: [String],
	date: Date,
	isPublished: Boolean,
	price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
	const course = new Course({
		name: 'Node Course',
		author: 'Maxim Fedorov',
		tags: ['node', 'frontend'],
		isPublished: true
	});

	const result = await course.save();
	console.log(result);
}

async function getCourses() {
	const pageNumber = 2;
	const pageSize = 10;
	// /api/courses?pageNumber=2&pageSize=10

	const courses = await Course
		.find({ author: 'Maxim', isPublished: true })
		.skip((pageNumber - 1) * pageSize)
		.limit(pageSize)
		.sort({ name: 1 })
		.select({ name: 1, tags: 1 });
	console.log(courses);
}

async function updateCourse(id) {	
	const result = await Course.findByIdAndUpdate(id, {
		$set: {
			author: 'Jason',
			isPublished: false
		}
	}, { new: true });			
	console.log(result);
}

// createCourse();
// getCourses();
updateCourse('5a6900fff467be65019a9001');

