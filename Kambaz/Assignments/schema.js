import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    _id: String,
    title: String,
    course: { type: String, ref: "CourseModel" },
    avail_date_str: Date,
    due_date_str: Date,
    avail_until_date_str: Date,
    points: Number
},
    { collection: "assignments" }
);
export default assignmentSchema;