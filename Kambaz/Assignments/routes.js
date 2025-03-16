import * as dao from "./dao.js"

export default function AssignmentRoutes(app) {
    app.get("/api/course/:courseId/assignments", (req, res) => {
        const { courseId } = req.params;
        const assignments = dao.findAssignmentsForCourse(courseId);
        res.send(assignments);
    });
    app.get("/api/course/:courseId/assignments/:aid", (req, res) => {
        const { courseId, aid } = req.params;
        const assignment = dao.getAssignment(aid, courseId);
        res.json(assignment);
    });
    app.put("/api/course/:courseId/assignments/:aid", (req, res) => {
        const { courseId, aid } = req.params;
        const assignmentUpdates = req.body;
        const updatedAssignment = dao.updateAssignment(aid, courseId, assignmentUpdates);
        res.json(updatedAssignment);
    });
    app.post("/api/course/:courseId/assignments/:aid", (req, res) => {
        const assignment = req.body;
        dao.addAssignment(assignment);
        res.json(assignment);
    });
    app.delete("/api/course/:courseId/assignments/:aid", async (req, res) => {
        const { courseId, aid } = req.params;
        const status = dao.deleteAssignment(aid, courseId);
        res.send(status);
    });
}