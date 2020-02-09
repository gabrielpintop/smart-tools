const db = require(../libraries/mysql)

class ContestService {
  constructor(){
    this.table = 'contests'
  }
  createContest(Idadmin,{ name, category, place, address, startDate, endDate, online }) {
        return new Promise(async (resolve, reject) => {
            try {
                const connection = await mysql.connect();
                let query = `INSERT INTO ${this.table} (name, category, place, address, start_date, end_date, online, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
                connection.query(query, [name, category, place, address ? address : null, startDate, endDate, Number(online), userId], (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        return reject(err);
                    } else {
                        if (results.insertId) {
                            resolve(results.insertId);
                        } else {
                            resolve(null);
                        }
                    }
                });
                connection.release();
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }


}
