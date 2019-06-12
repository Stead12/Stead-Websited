-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 12, 2019 at 08:38 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stead`
--
CREATE DATABASE IF NOT EXISTS `stead` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `stead`;

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
CREATE TABLE IF NOT EXISTS `author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(40) NOT NULL,
  `Email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`id`, `Name`, `Email`) VALUES
(1, 'Mohamed Fofanah', 'fofi@gmail.com'),
(2, 'Augustus Batilo Danlade Kabineh Jibba', 'jibbanani@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `Author` varchar(40) NOT NULL,
  `Detail` text NOT NULL,
  `Date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `Author`, `Detail`, `Date`) VALUES
(1, 'fofi@gmail.com', 'Thanks we\'ve got it nailed in', '2019-06-18'),
(2, 'fofi@gmail.com', 'Thanks we\'ve got it nailed in', '2019-06-18');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
CREATE TABLE IF NOT EXISTS `members` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `Firstname` varchar(40) NOT NULL,
  `Surname` varchar(40) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Userid` varchar(40) NOT NULL,
  `Phonenumber` int(13) NOT NULL,
  `Birthdate` date NOT NULL,
  `Address` varchar(40) NOT NULL,
  `Gender` varchar(6) NOT NULL,
  `Picture` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `replies`
--

DROP TABLE IF EXISTS `replies`;
CREATE TABLE IF NOT EXISTS `replies` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `Author` varchar(40) NOT NULL,
  `Detail` text NOT NULL,
  `Comments` int(5) NOT NULL,
  `Date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `replies`
--

INSERT INTO `replies` (`id`, `Author`, `Detail`, `Comments`, `Date`) VALUES
(1, 'fofi@gmail.com', 'Itz Kinda superb to do', 2, '2019-06-25'),
(2, 'jibanani@gmail.com', 'Great, its motivating', 2, '2019-06-25'),
(3, 'fofi@gmail.com', 'Viola! we\'re feeling enticed', 1, '2019-06-25');

-- --------------------------------------------------------

--
-- Table structure for table `topic`
--

DROP TABLE IF EXISTS `topic`;
CREATE TABLE IF NOT EXISTS `topic` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `Title` varchar(40) NOT NULL,
  `Author` varchar(40) NOT NULL,
  `Picture` varchar(100) NOT NULL,
  `Details` text NOT NULL,
  `Comments` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `topic`
--

INSERT INTO `topic` (`id`, `Title`, `Author`, `Picture`, `Details`, `Comments`) VALUES
(1, 'Python Session', 'jibanani@gmail.com', 'uploads/topics/pyimage.gif', 'In this forum we discuss the last python session that was held on object oriented programming by answering to user queries.', '2');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
