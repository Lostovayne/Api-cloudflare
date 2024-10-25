CREATE TABLE `posts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text(255) NOT NULL,
	`content` text(255) NOT NULL,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
