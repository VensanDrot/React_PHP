-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 19, 2022 at 07:41 PM
-- Server version: 5.6.37
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ScandiWeb`
--

-- --------------------------------------------------------

--
-- Table structure for table `ScandiWeb`
--

CREATE TABLE `ScandiWeb` (
  `ID` int(11) NOT NULL,
  `SKU` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Price` float NOT NULL,
  `PSAttribute` varchar(255) NOT NULL,
  `PType` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ScandiWeb`
--

INSERT INTO `ScandiWeb` (`ID`, `SKU`, `Name`, `Price`, `PSAttribute`, `PType`) VALUES
(1, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(2, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(3, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(4, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(5, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(6, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(7, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(8, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(9, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(10, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(11, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(12, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(13, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(14, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(15, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(16, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(17, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(18, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(19, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(20, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(21, 'dsadas', 'dsadas', 123.3, '321321', 'DVD'),
(22, 'dsadas', 'dsadas', 123.3, '321321', 'DVD');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ScandiWeb`
--
ALTER TABLE `ScandiWeb`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ScandiWeb`
--
ALTER TABLE `ScandiWeb`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
