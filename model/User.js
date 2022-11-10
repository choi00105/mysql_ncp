// TODO: DB(mysql) 연결
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt',
});

// TODO: 모델 코드
exports.postSignup = (data, cb) => { //data 사용자가 입력한 정보로 회원가입
    console.log(data); //{ userid: '123', pw: '123', name: '123' }
    const sql = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`;
    conn.query(sql, (err, rows) => {
        if(err) {
            throw err;
        }
        console.log('model 회원가입', rows);
        console.log('model 회원가입 callback', rows.insertId);
        cb(rows.insertId); //일단 콜백 -> 왜?

    });
};

exports.postSignin = (data, cb) => {
    const sql = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}' LIMIT 1`;
    conn.query(sql, (err, rows) => {
        if(err) {
            throw err;
        }
        console.log('MODEL login: 이게 콜백 감\n',rows);
        cb(rows);
    });
};
exports.postProfile = (data, cb) => {
    const sql = `SELECT * FROM user WHERE userid='${data.userid}' LIMIT 1`;
    conn.query(sql, (err, rows) => {
        if(err) {
            throw err;
        }
        console.log('model 프로필 콜백 보낸것\n',rows); //[ RowDataPacket { id: 10, userid: '1', name: '1', pw: '1' } ]
        cb(rows);

    });
};
exports.editProfile = (data, cb) => {
    const sql = `UPDATE user SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
    conn.query(sql, (err, rows) => {
        if(err) {
            throw err;
        }
        console.log('model 수정 callback 보냄\n', rows);
        cb(rows);
    });
};
exports.deleteProfile = (data, cb) => {
    const sql = `DELETE FROM user WHERE id='${data.id}'`;
    conn.query(sql, (err, rows) => {
        if(err) {
            throw err;
        }
        console.log('model 삭제 콜백 보낸것\n', rows);
        cb(rows);
    });
};
