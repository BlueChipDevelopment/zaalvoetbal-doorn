import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { setCorsHeaders } from "../shared/cors";
import { FIREBASE_CONFIG } from "../config/constants";
import { performAutoTeamGeneration } from "./team-logic";
import { toISODateString } from "../shared/date-utils";
import { SUPABASE_SERVICE_ROLE_KEY } from "../shared/supabase-client";

/**
 * HTTP endpoint: team generatie (handmatig of automatisch via scheduler)
 */
export const teamGeneration = onRequest(
  { region: FIREBASE_CONFIG.region, secrets: [SUPABASE_SERVICE_ROLE_KEY] },
  async (req, res) => {
    setCorsHeaders(res, req);
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    try {
      const date = req.query.date as string || toISODateString(new Date());
      const trigger = req.query.trigger as string || 'manual'; // Allow trigger to be specified

      logger.info(`🔄 Team generation triggered for ${date} (trigger: ${trigger})`);

      const result = await performAutoTeamGeneration(date, trigger);

      res.json(result);

    } catch (error) {
      logger.error('💥 Team generation failed:', error);
      res.status(500).json({
        success: false,
        message: 'Team generation failed'
      });
    }
  }
);