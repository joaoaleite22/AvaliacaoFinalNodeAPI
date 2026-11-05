import { Sequelize } from 'sequelize'

// configurar a conexao

class Database {
    constructor(){
        this.init()
    }

    init() {
        this.db = new Sequelize({
            database: 'exemplo_an0z',
            dialect: 'postgres',
            username: 'exemplo_an0z_user',
            password: 'MW3P44ihrbN50BaBI2GezTexTQ661JKU',
            host: 'dpg-dbh7fl4ipgvc73d3mp40-a.oregon-postgres.render.com',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }

        })

    }

}

export default new Database()