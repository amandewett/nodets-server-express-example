import { Router, Request, Response } from "express";
const router: Router = Router();
import { UserService } from "../services/user.service";
const userService = new UserService();

//api to create user
router.post("/create", async (req: Request, res: Response) => {
    //getting values from request body
    const userName: string = req.body.name;
    const userEmail: string = req.body.email;

    //getting result from user service
    const result: any = await userService.createUser(userName, userEmail);
    if (result.status) {
        res.json(result);
    }
    else {
        res.status(400).json(result);
    }
});

//api to update user
router.put("/update", async (req: Request, res: Response) => {
    //getting values from request body
    const userId = req.body.id;
    const userName: string = req.body.name;
    const userEmail: string = req.body.email;

    //getting result from user service
    const result: any = await userService.updateUser(userId, userName, userEmail);
    if (result.status) {
        res.json(result);
    }
    else {
        res.status(400).json(result);
    }
});

//api to get list of users
router.get("/list", async (req: Request, res: Response) => {
    //getting result from user service
    const result: any = await userService.getAllUsers();
    if (result.status) {
        res.json(result);
    }
    else {
        res.status(400).json(result);
    }
});

//api to get details of a user
router.get("/details/:id", async (req: Request, res: Response) => {
    //get user id from request parameters
    const userId = req.params.id;

    //getting result from user service
    const result: any = await userService.getUserDetails(+userId);
    if (result.status) {
        res.json(result);
    }
    else {
        res.status(400).json(result);
    }
});

//api to get details of a user
router.delete("/delete/:id", async (req: Request, res: Response) => {
    //get user id from request parameters
    const userId = req.params.id;

    //getting result from user service
    const result: any = await userService.deleteUser(+userId);
    if (result.status) {
        res.json(result);
    }
    else {
        res.status(400).json(result);
    }
});

export default router;