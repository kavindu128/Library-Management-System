/*
  Warnings:

  - You are about to drop the `resevedBook` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "resevedBook";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ReservedBook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL
);
