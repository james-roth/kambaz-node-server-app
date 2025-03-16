import Database from "../index.js"

export function addAssignment(assignment) {
    const { assignments } = Database;
    Database.assignments = [...assignments, assignment];
    return assignment;
};
export function getAssignment(assignmentId, courseId) {
    const { assignments } = Database;
    const assignment = assignments.find((a) => a._id === assignmentId && a.course === courseId);
    return assignment;
}
export function updateAssignment(assignmentId, courseId, modifiedAssignment) {
    // updates an old assignment by replacing it with a new one
    const { assignments } = Database;
    Database.assignments = assignments.map(
        (a) => a._id === assignmentId && a.course === courseId ? modifiedAssignment : a
    );
    return Database.assignments.filter((a) => a.course === courseId);
};
export function deleteAssignment(assignmentId, courseId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((a) => a.course != courseId || a._id != assignmentId);
    return assignments;
}
export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((a) => a.course === courseId);
}