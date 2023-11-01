import 'dotenv/config'

export const config = {
    port: process.env.PORT || 5000,
    dbUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,
}