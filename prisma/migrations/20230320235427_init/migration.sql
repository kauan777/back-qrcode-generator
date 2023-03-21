/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `users_id_key` ON `users`;

-- AlterTable
ALTER TABLE `users` ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `users_slug_key` ON `users`(`slug`);
