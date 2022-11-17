-- CreateTable
CREATE TABLE "Keeper" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Keeper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "abbr" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "genreId" INTEGER,
    "originId" INTEGER,
    "keeperId" INTEGER,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Origin" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Origin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genre_title_key" ON "Genre"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Origin_title_key" ON "Origin"("title");

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_originId_fkey" FOREIGN KEY ("originId") REFERENCES "Origin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_keeperId_fkey" FOREIGN KEY ("keeperId") REFERENCES "Keeper"("id") ON DELETE SET NULL ON UPDATE CASCADE;
