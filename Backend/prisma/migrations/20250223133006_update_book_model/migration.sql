/*
  Warnings:

  - You are about to drop the column `genre` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `publishedAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Book` table. All the data in the column will be lost.
  - Added the required column `name` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL
);
INSERT INTO "new_Book" ("author", "id") SELECT "author", "id" FROM "Book";
DROP TABLE "Book";
ALTER TABLE "new_Book" RENAME TO "Book";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
