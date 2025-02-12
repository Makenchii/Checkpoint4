import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

// Define item-related routes
import albumActions from "./modules/item/itemActions";

router.get("/api/items", albumActions.browse);
router.get("/api/items/:id", albumActions.read);
router.post("/api/items", albumActions.add);

/* ************************************************************************* */

// Define item-related routes
import trackActions from "./modules/item/itemActions";

router.get("/api/items", trackActions.browse);
router.get("/api/items/:id", trackActions.read);
router.post("/api/items", trackActions.add);

/* ************************************************************************* */
export default router;
