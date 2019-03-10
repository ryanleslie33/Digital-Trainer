-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 10, 2019 at 10:39 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `digital_trainer`
--

-- --------------------------------------------------------

--
-- Table structure for table `exercise`
--

CREATE TABLE `exercise` (
  `id` int(11) NOT NULL,
  `category` varchar(20) NOT NULL,
  `name` text NOT NULL,
  `exercise` text NOT NULL,
  `sets` int(11) NOT NULL,
  `reps` int(11) NOT NULL,
  `day` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `exercise`
--

INSERT INTO `exercise` (`id`, `category`, `name`, `exercise`, `sets`, `reps`, `day`) VALUES
(2, 'muscle', 'chest and shoulders', 'dumbbell and bench press', 5, 10, 1),
(3, 'muscle', 'chest and shoulder', 'incline dumbbell benchpress', 4, 10, 1),
(4, 'muscle', 'chest and shoulders', 'dumbbell floor press', 3, 12, 1),
(5, 'muscle', 'chest and shoulders', 'standing dumbbell press', 4, 10, 1),
(6, 'muscle', 'chest and shoulders', 'dumbbell lateral raise', 3, 12, 1),
(7, 'muscle', 'back and biceps', 'dumbbell bent over row', 4, 12, 2),
(8, 'muscle', 'back and biceps', 'tripod dumbbell row', 4, 12, 2),
(9, 'muscle', 'back and biceps', 'dumbbell pull over', 3, 12, 2),
(10, 'muscle', 'back and biceps', 'reverse grip dumbbell row', 4, 12, 2),
(11, 'muscle', 'back and bicepts', 'dumbbell bicep curl', 3, 15, 2),
(12, 'muscle', 'legs and core', 'dumbbell goblet squat', 4, 10, 3),
(13, 'muscle', 'legs and core', 'dumbbell stiff leg dead-lift', 4, 10, 3),
(14, 'muscle', 'legs and core', 'dumbbell rear lounge', 4, 10, 3),
(15, 'muscle', 'legs and core', 'dumbbell frog squat ', 3, 8, 3),
(16, 'muscle', 'legs and core', 'dumbbell calf raise', 4, 20, 3),
(17, 'muscle', 'upper body', 'one arm dumbbell rows', 4, 10, 4),
(18, 'muscle', 'upper body', 'dumbbell Arnold press', 4, 10, 4),
(19, 'muscle', 'upper body', 'incline dumbbell bench press', 4, 12, 4),
(20, 'muscle', 'upper body', 'chest supported dumbbell row', 3, 12, 4),
(21, 'muscle', 'upper body', 'dumbbell pin wheel curls', 2, 12, 4),
(22, 'muscle', 'legs and core phase 2', 'dumbbell squat', 4, 10, 5),
(23, 'muscle', 'legs and core phase 2', 'dumbbell deadlift', 4, 10, 5),
(24, 'muscle', 'legs and core phase 2', 'dumbbell split squat', 3, 8, 5),
(25, 'muscle', 'legs and core phase 2', 'dumbbell hip thrust', 4, 15, 5),
(26, 'abs', 'abs and core', 'plank', 3, 30, NULL),
(27, 'abs', 'abs and core', 'side plank', 3, 20, NULL),
(28, 'abs', 'abs and core', 'stability bar crunch', 3, 12, NULL),
(29, 'abs', 'abs and core', 'hyper-extensions', 3, 12, NULL),
(30, 'abs', 'abs and core', 'reverse crunch', 3, 12, NULL),
(31, 'abs', 'abs and core', 'sit ups', 4, 20, NULL),
(33, 'chest', 'chest', 'pushups', 3, 30, NULL),
(34, 'chest', 'chest', 'incline bench press', 5, 10, NULL),
(35, 'chest', 'chest', 'low incline bench press', 3, 10, NULL),
(36, 'chest', 'chest', 'seated machine press', 3, 12, NULL),
(37, 'chest', 'chest', 'single arm cable crossover', 3, 12, NULL),
(40, 'legs', 'legs', 'sissy squats', 3, 10, NULL),
(41, 'legs', 'legs', 'leg extensions', 2, 10, NULL),
(42, 'legs', 'legs', 'leg press', 3, 9, NULL),
(43, 'legs', 'legs', 'hack squats', 2, 9, NULL),
(44, 'legs', 'legs', 'dumbbell stiff leg deadlifts', 2, 9, NULL),
(45, 'legs', 'legs', 'seated leg curl', 2, 10, NULL),
(46, 'legs', 'legs', 'lying leg curl', 2, 9, NULL),
(47, 'legs', 'legs', 'hyper-extensions', 2, 10, NULL),
(55, 'fat', 'cardio and abs', 'plank', 3, 3, 1),
(56, 'fat', 'cardio and abs', 'body weight glute bridge', 3, 15, 1),
(57, 'fat', 'cardio and abs', 'ab crunch', 3, 15, 1),
(58, 'fat', 'cardio and abs', 'glute kick back', 3, 15, 1),
(59, 'fat', 'cardio and abs', 'side lying climbers', 3, 12, 1),
(60, 'fat', 'lower body foucs', 'reverse hack squats', 3, 12, 2),
(61, 'fat', 'lower body foucs', 'leg press', 3, 12, 2),
(62, 'fat', 'lower body foucs', 'leg extension', 3, 15, 2),
(63, 'fat', 'lower body foucs', 'leg curls', 3, 15, 2),
(64, 'fat', 'lower body foucs', 'standing calf raises ', 3, 25, 2),
(65, 'fat', 'cardio and abs', 'plank', 3, 3, 3),
(66, 'fat', 'cardio and abs', 'body weight glute bridge', 3, 15, 3),
(67, 'fat', 'cardio and abs', 'ab crunch', 3, 15, 3),
(68, 'fat', 'cardio and abs', 'glute kick back', 3, 15, 3),
(69, 'fat', 'cardio and abs', 'side lying climbers', 3, 12, 3),
(70, 'fat', 'lower body focus', 'barbell squat', 3, 12, 4),
(71, 'fat', 'lower body focus', 'Romanian dead-lift', 4, 10, 4),
(72, 'fat', 'lower body focus', 'walking lounge', 3, 15, 4),
(73, 'fat', 'lower body focus', 'glute kick back', 3, 15, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `exercise`
--
ALTER TABLE `exercise`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `exercise`
--
ALTER TABLE `exercise`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
