import * as dao from "./dao.js"

export default function AssignmentRoutes(app) {
    app.get("/api/course/:courseId/assignments", async (req, res) => {
        const { courseId } = req.params;
        const assignments = await dao.findAssignmentsForCourse(courseId);
        res.send(assignments);
        console.log(assignments);
    });
    app.get("/api/course/:courseId/assignments/:aid", async (req, res) => {
        const { courseId, aid } = req.params;
        const assignment = await dao.getAssignment(aid, courseId);
        res.json(assignment);
    });
    app.put("/api/course/:courseId/assignments/:aid", async (req, res) => {
        const { courseId, aid } = req.params;
        const assignmentUpdates = req.body;
        const updatedAssignment = await dao.updateAssignment(aid, courseId, assignmentUpdates);
        res.json(updatedAssignment);
    });
    app.post("/api/course/:courseId/assignments/:aid", async (req, res) => {
        const assignment = req.body;
        await dao.addAssignment(assignment);
        res.json(assignment);
    });
    app.delete("/api/course/:courseId/assignments/:aid", async (req, res) => {
        const { courseId, aid } = req.params;
        const status = await dao.deleteAssignment(aid, courseId);
        res.send(status);
    });
}