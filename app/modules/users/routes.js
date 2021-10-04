import express from "express";
import {
    checkConnection,
    createUserTable,
    getAllUsers,
    getOneUsers,
    createNewUser,
    createBulkUser,
    updateUser,
    deleteUser
} from "./controllers/userController.js";


const router = express.Router();

router.get('/', getAllUsers);
router.get('/checkcon', checkConnection);
router.get('/createtbl', createUserTable);
router.get('/getoneuser/:uid', getOneUsers);
router.post('/createuser', createNewUser);
router.post('/createbulkuser', createBulkUser);
router.put('/updateuser/:uid', updateUser);
router.delete('/deleteuser/:uid', deleteUser);

export default router;