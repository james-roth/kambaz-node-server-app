import model from "./model.js";

export function addAssignment(assignment) {
    return model.create(assignment);
};
export function getAssignment(assignmentId, courseId) {
    return model.find({ _id: assignmentId, course: courseId });
}
export function updateAssignment(assignmentId, courseId, modifiedAssignment) {
    return model.updateOne({ _id: assignmentId, course: courseId }, modifiedAssignment);
};
export function deleteAssignment(assignmentId, courseId) {
    return model.deleteOne({ _id: assignmentId, course: courseId });
}
export function findAssignmentsForCourse(courseId) {
    return model.find({ course: courseId });
}