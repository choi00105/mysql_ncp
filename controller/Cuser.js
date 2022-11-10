// TODO: 컨트롤러 코드
const User = require('../model/User');

exports.main = (req, res) => {
    res.render('index');
};

exports.getSignup = (req, res) => {
    res.render('signup');
};
exports.getSignin = (req, res) => {
    res.render('signin');
    // res.redirect('/user/signin');

};
// 회원가입
exports.postSignup = (req, res) => {
    // console.log('가입 입력 값: ', req.body);
    
    User.postSignup(req.body, (result) => {
        res.send({
            userid: req.body.userid,
            pw: req.body.pw,
            name: req.body.name,
        });
    });
};
// 로그인
exports.postSignin = (req, res) => {
    // console.log('로그인 입력값 : ',req.body);
    User.postSignin(req.body, (result) => {
        res.send({
            data: result.length,
            userid: req.body.userid,
            pw: req.body.password,
        });
        
    });
};
exports.postProfile = (req, res) => {
    console.log('프로필 req :', req.body);
    User.postProfile(req.body, (result) => {
        res.render('profile', {
            data: result[0], //why? 
            });
            //else절 추가 xxx ejs 에서  쓰는중
        // console.log('postProfile result 뭘까요??\n',result); 
        // [ RowDataPacket { id: 13, userid: '112', name: '112', pw: '112' } 
        
    });
};
exports.editProfile = (req, res) => {
    console.log('cont req : ',req.body);
    User.editProfile(req.body, (result) => {
        console.log('edit result 뭘까요??\n',result);
        res.send({

        });
    });
};
exports.deleteProfile = (req, res) => {
    console.log('cont delete req : \n',req.body);
    User.deleteProfile(req.body, (result) => {
        // res.redirect('/user/singin');
        res.render('signin');
    });
};

