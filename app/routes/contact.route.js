const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
  .get(contacts.findAll)       // lấy tất cả contact
  .post(contacts.create)       // thêm contact mới
  .delete(contacts.deleteAll); // xóa tất cả contact

router.route("/favorite")
  .get(contacts.findAllFavorite); // lấy contact yêu thích

router.route("/:id")
  .get(contacts.findOne)       // lấy contact theo id
  .put(contacts.update)        // cập nhật contact
  .delete(contacts.delete);    // xóa contact theo id

module.exports = router;
