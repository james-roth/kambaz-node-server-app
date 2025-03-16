import * as dao from "./dao.js"

export default function EnrollmentRoutes(app) {
    app.post("/api/enrollments", (req, res) => {
        const enrollment = req.body;
        const status = dao.addEnrollment(enrollment);
        res.send(status);
    });
    app.delete("/api/enrollments/:enrollId", (req, res) => {
        const { enrollId } = req.params;
        const status = dao.deleteEnrollment(enrollId);
        res.send(status);
    });
    app.get("/api/enrollments/:userId", (req, res) => {
        const { userId } = req.params;
        const enrollments = dao.getEnrollments(userId);
        res.json(enrollments);
    });
}