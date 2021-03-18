import { Request, Response, Router } from "express";


const register = async (req: Request, res: Response) => {
    const {userName, email, password} = req.body;

    try {
        // TODO: Validate Data

        // TODO: Create the user

        // TODO: Return the user
    } catch (error) {
        
    }
}

const router = Router();
router.post('/register', register);

export default router;
