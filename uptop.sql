-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2020 at 09:06 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uptop`
--

-- --------------------------------------------------------

--
-- Table structure for table `userenquiry`
--

CREATE TABLE `userenquiry` (
  `id` int(11) NOT NULL,
  `Name` varchar(240) DEFAULT NULL,
  `Email` varchar(240) DEFAULT NULL,
  `Phone` bigint(20) DEFAULT NULL,
  `Course` varchar(250) DEFAULT NULL,
  `Designation` varchar(250) DEFAULT NULL,
  `City` int(11) DEFAULT NULL,
  `Date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userenquiry`
--

INSERT INTO `userenquiry` (`id`, `Name`, `Email`, `Phone`, `Course`, `Designation`, `City`, `Date`) VALUES
(1, 'Kanishk Gupta', 'kanigupta99@gmail.com', 9971164773, 'Senior Professional inHuman Resources International', '', 0, '2020-08-25 21:20:30'),
(2, 'Kanishk Gupta', 'kanigupta99@gmail.com', 9971164773, 'Senior Professional inHuman Resources International', 'ffff', 0, '2020-08-25 21:20:30'),
(3, 'Kanishk Rahul', '', 9971164773, 'Senior Professional inHuman Resources International', '', 0, '2020-08-25 21:20:30'),
(4, 'Kanishk Gupta', 'kanigupta99@gmail.com', 9971164773, 'Senior Professional inHuman Resources International', '', 0, '2020-08-25 21:20:30'),
(5, 'Sample Name ', 'kanishkgupta19@gmail.com', 887667565, 'Product & Brand Management', 'Student', 0, '2020-08-26 08:37:36'),
(6, 'Kanishk Gupta', 'kanishkgupta19@gmail.com', 9971164773, 'Associate Professional inHuman Resources International', '', 0, '2020-08-26 18:37:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userenquiry`
--
ALTER TABLE `userenquiry`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `userenquiry`
--
ALTER TABLE `userenquiry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
