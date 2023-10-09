module.exports = class Data1696718927247 {
    name = 'Data1696718927247'

    async up(db) {
        await db.query(`CREATE TABLE "gravatar" ("id" character varying NOT NULL, "owner" bytea NOT NULL, "display_name" text NOT NULL, "image_url" text NOT NULL, CONSTRAINT "PK_e887b4dffafd686933930ef25bb" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "gravatar"`)
    }
}
