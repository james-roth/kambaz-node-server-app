import Database from "../index.js"
import { v4 as uuidv4 } from "uuid";

export function addEnrollment(enrollment) {
    const { enrollments } = Database;
    const newEnrollment = { ...enrollment, _id: uuidv4() };
    Database.enrollments = [...enrollments, newEnrollment];
    return newEnrollment;
};
export function deleteEnrollment(enrollId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter((e) => e._id != enrollId);
    return Database.enrollments;
};
export function getEnrollments(userId) {
    const { enrollments } = Database;
    return enrollments.filter((e) => e.user === userId);
}