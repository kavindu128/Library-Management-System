-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publishedAt" DATETIME NOT NULL,
    "genre" TEXT NOT NULL
);
