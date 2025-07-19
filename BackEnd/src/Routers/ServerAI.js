const router = require("express").Router();
const ServerAIController = require("../app/controllers/ServerAIController")

router.post('/OpenAi', ServerAIController.CallApiAI);

module.exports = router;
