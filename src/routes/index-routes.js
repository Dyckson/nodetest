const { Router } = require("express");
const router = Router();

const {
  getClock,
  getClockByH,
  getClockByHM,
} = require("../controllers/index-controller");

router.get("/clock", getClock); //Retorna todos os clocks
router.get("/clock/:hour/", getClockByH); //Retorna o ângulo baseado na hora e se não existir ele criará
router.get("/clock/:hour/:minute/", getClockByHM); //Retorna o ângulo baseado na hora e minuto e caso não exista ele criará

module.exports = router;
