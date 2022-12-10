const mysql = require('../helpers/database');
const md5 = require('md5');
var shortid = require('shortid');
const suffix = 'l0ck';

// admin create
exports.createAdmin = (data, cb) => {
    const password = md5(md5(data.password) + suffix);
    var str = `INSERT INTO tbl_users SET createdAt = now(), updatedAt = now(), ?;`
    let dataForm = {
        id: shortid.generate(),
        username: data.name,
        password: password,
        email: data.email,
        status: data.status,
        role: data.role
    }
    mysql.query_filter(str, dataForm, function (err, row) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, row);
        }
    });
}

//admin list
exports.admin_list = (cb) => {
    var str = ` SELECT * FROM tbl_users;`;
    mysql.query(str, function (err, row) {
        if (err) {
            cb(err, null);
        } else {
            if (row.length == 0) {
                cb(" Not Found!", null);
            } else {
                cb(null, row);
            }
        }
    })
}

// admin detail
exports.detail = (id, cb) => {
    let sql = `SELECT * FROM tbl_users WHERE id = ?;`;
    mysql.query_filter(sql, id, cb);
}

// admin email check
exports.adminEmailCheck = (email) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT email FROM tbl_users WHERE email = ?;`;
        mysql.query_filter(sql, email, function (err, result) {
            if (err) {
                reject(err);
            }
            if (result.length > 0) {
                resolve("true");
            } else {
                resolve("false")
            }

        });
    })
}

// admin update
exports.update = (data, filter, cb) => {
    let updateData = {
        username: data.name,
        email: data.email,
        status: data.status,
        role: data.role
    }
    if (data.password) {
        const password = md5(md5(data.password) + suffix);
        updateData.password = password;
    }
    let sql = `UPDATE tbl_users SET updatedAt = now(), ? WHERE ? `;
    mysql.query_filter(sql, [updateData, filter], cb);
}

// admin delete
exports.delete = (id, cb) => {
    mysql.delete('tbl_users', { id: id }, (err, affectedRows) => {
            cb(err, affectedRows);
        }
    );
}