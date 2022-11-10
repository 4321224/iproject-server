const router = require("express").Router();
const Controller = require("../controllers/controller");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
router.get("/", Controller.home);
router.post("/register", Controller.registrasi);
router.post("/login", Controller.login);

router.use(authentication);
router.post("/payments", Controller.payment);
router.patch("/payments/:id", Controller.premium);
router.get("/notes", Controller.readAllNotes);
router.get("/notes/:id", Controller.notesById)
router.get("/categories", Controller.readCategory);
router.post("/notes", Controller.addNewNotes);
router.delete("/notes/:id", authorization, Controller.deleteNotes);
router.put("/notes/:id", authorization, Controller.updateNote);

module.exports = router;
