import * as dao from "./dao.js"

export default function EnrollmentRoutes(app) {
    app.post("/api/enrollments", async (req, res) => {
        const enrollment = req.body;
        const status = await dao.addEnrollment(enrollment);
        res.send(status);
    });
    app.delete("/api/enrollments/:enrollId", async (req, res) => {
        const { enrollId } = req.params;
        const status = await dao.deleteEnrollment(enrollId);
        res.send(status);
    });
    app.get("/api/enrollments/:userId", async (req, res) => {
        const { userId } = req.params;
        const enrollments = await dao.getEnrollmentsForUser(userId);
        res.json(enrollments);
    });
}