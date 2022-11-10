// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// app.js에서 설정한 기본주소가 - localhost:PORT/user 이기 떄문에
// GET / -> localhost:PORT/user
router.get('/', controller.main);

// GET /singup -> localhost:PORT/user/signyp
router.get('/signup', controller.getSignup);
router.get('/signin', controller.getSignin);

router.post('/signup', controller.postSignup);
router.post('/signin', controller.postSignin);

router.post('/profile', controller.postProfile);
router.post('/profile/edit', controller.editProfile);
router.post('/profile/delete', controller.deleteProfile);


module.exports = router;