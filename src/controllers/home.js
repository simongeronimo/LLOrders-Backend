import { testEnvironmentVariable } from '../config';

export const indexPage = (req, res) => res.status(200).json({ message: testEnvironmentVariable });