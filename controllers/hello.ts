import { Request, Response } from 'express';

const hello = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "success", data: "Hello Express Typescript!" });
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
};

export default { hello };