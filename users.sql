-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 04, 2021 at 07:33 AM
-- Server version: 5.7.31
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_uname` varchar(24) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_passwd` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_role` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_status` int(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_uname` (`user_uname`),
  UNIQUE KEY `user_email` (`user_email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_uname`, `user_passwd`, `user_email`, `user_role`, `user_status`, `createdAt`, `updatedAt`) VALUES
(1, 'Kannan', 'Password', 'kannan@gmail.com', 'admin', 1, '2021-10-04 07:13:33', '2021-10-04 07:13:33'),
(2, 'Raja', 'Password1', 'raja@gmail.com', 'admin', 1, '2021-10-04 07:14:12', '2021-10-04 07:14:12'),
(3, 'kamal', 'Password1', 'kamal@gmail.com', 'admin', 1, '2021-10-04 07:16:28', '2021-10-04 07:16:28'),
(4, 'Kuna', 'Password1', 'kuna@gmail.com', 'admin', 1, '2021-10-04 07:16:28', '2021-10-04 07:21:20'),
(7, 'Mala', 'Password1', 'mala@gmail.com', 'admin', 1, '2021-10-04 07:17:08', '2021-10-04 07:22:09');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
