import type { Request, Response } from "express";
import { EVENT_JSON_STRUCTURE } from "../lib/constants.js";
// import { generateStructuredJson } from "../config/gemini.js";;;
import { UserRequest } from "../models/user-request.model.js";
import { generateStructuredJson } from "../config/gemini.js";

export const planEvent = async (req: Request, res: Response) => {
  try {
    const { event_description } = req.body;

    //   IF EVENT DESCRIPTION NOT FOUND
    if (!event_description) {
      return res.status(400).json({
        success: false,
        error: {
          code: "INVALID_INPUT",
          message: "User input is required and must be a non-empty string.",
          details: null,
        },
      });
    }

    // GET STRUCTURED JSON
    const structure = await generateStructuredJson(
      EVENT_JSON_STRUCTURE,
      event_description,
    );

    const userRequest = await UserRequest.create({
      description: event_description,
      aiSuggestion: JSON.parse(structure),
    });

    return res.status(201).json({
      success: true,
      data: userRequest,
    });
  } catch (error) {
    // console.log(error);
    return res
      .status(500)
      .json({ success: false, data: null, message: "Internal server error" });
  }
};

export const getAllEvents = async (_: Request, res: Response) => {
  try {
    const allRequests = await UserRequest.find({}).sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      data: allRequests,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      message: "Internal server error",
    });
  }
};
