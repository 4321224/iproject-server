const router = require("express").Router();
const Controller = require("../controllers/controller");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
// const multer = require('multer')
// const upload = multer()

router.post("/register", Controller.registrasi);
router.post("/login", Controller.login);

router.use(authentication);
// app.post('/profile', upload.single('avatar'), (req, res, next) => {
//     // req.file is the `avatar` file
//     // req.body will hold the text fields, if there were any
//   })
router.post("/payments", Controller.payment);
router.patch("/payments/:id", Controller.premium);
router.get("/notes", Controller.readAllNotes);
router.get("/categories", Controller.readCategory)
router.post("/notes", Controller.addNewNotes);
router.delete("/notes/:id", authorization, Controller.deleteNotes);
router.patch("/notes/:id", authorization, Controller.updateNote);

module.exports = router;
