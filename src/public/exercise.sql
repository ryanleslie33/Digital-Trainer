-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 12, 2019 at 01:55 PM
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
  `day` int(11) DEFAULT NULL,
  `image` varchar(40) NOT NULL,
  `history` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `exercise`
--

INSERT INTO `exercise` (`id`, `category`, `name`, `exercise`, `sets`, `reps`, `day`, `image`, `history`) VALUES
(2, 'muscle', 'chest and shoulders', 'dumbbell and bench press', 5, 10, 1, 'benchPress', ''),
(3, 'muscle', 'chest and shoulder', 'incline dumbbell benchpress', 4, 10, 1, 'iDBP', ''),
(4, 'muscle', 'chest and shoulders', 'dumbbell floor press', 3, 12, 1, 'dbFP', ''),
(5, 'muscle', 'chest and shoulders', 'standing dumbbell press', 4, 10, 1, 'sDBP', ''),
(6, 'muscle', 'chest and shoulders', 'dumbbell lateral raise', 3, 12, 1, 'dbLR', ''),
(7, 'muscle', 'back and biceps', 'dumbbell bent over row', 4, 12, 2, 'dbBOR', ''),
(8, 'muscle', 'back and biceps', 'tripod dumbbell row', 4, 12, 2, 'tDBR', ''),
(9, 'muscle', 'back and biceps', 'dumbbell pull over', 3, 12, 2, 'dbPO', ''),
(10, 'muscle', 'back and biceps', 'reverse grip dumbbell row', 4, 12, 2, 'reverseGripBentOverRow', ''),
(11, 'muscle', 'back and bicepts', 'dumbbell bicep curl', 3, 15, 2, 'bicepCurl', ''),
(12, 'muscle', 'legs and core', 'dumbbell goblet squat', 4, 10, 3, 'gS', ''),
(13, 'muscle', 'legs and core', 'dumbbell stiff leg dead-lift', 4, 10, 3, 'dbSLDL', ''),
(14, 'muscle', 'legs and core', 'dumbbell rear lounge', 4, 10, 3, 'dbRL', ''),
(15, 'muscle', 'legs and core', 'dumbbell frog squat ', 3, 8, 3, 'dbFS', ''),
(16, 'muscle', 'legs and core', 'dumbbell calf raise', 4, 20, 3, 'dbCR', ''),
(17, 'muscle', 'upper body', 'one arm dumbbell rows', 4, 10, 4, 'oADBR', ''),
(18, 'muscle', 'upper body', 'dumbbell Arnold press', 4, 10, 4, 'arnoldPress', ''),
(19, 'muscle', 'upper body', 'incline dumbbell bench press', 4, 12, 4, 'iDBP', ''),
(20, 'muscle', 'upper body', 'chest supported dumbbell row', 3, 12, 4, 'chestSR', ''),
(21, 'muscle', 'upper body', 'dumbbell pin wheel curls', 2, 12, 4, 'pWC', ''),
(22, 'muscle', 'legs and core phase 2', 'dumbbell squat', 4, 10, 5, 'dbS', ''),
(23, 'muscle', 'legs and core phase 2', 'dumbbell deadlift', 4, 10, 5, 'dbRDL', ''),
(24, 'muscle', 'legs and core phase 2', 'dumbbell split squat', 3, 8, 5, 'sST', ''),
(25, 'muscle', 'legs and core phase 2', 'dumbbell hip thrust', 4, 15, 5, 'dbHT', ''),
(26, 'abs', 'abs and core', 'plank', 3, 30, NULL, 'pEW', ''),
(27, 'abs', 'abs and core', 'side plank', 3, 20, NULL, 'sP', ''),
(28, 'abs', 'abs and core', 'stability bar crunch', 3, 12, NULL, 'sBC', ''),
(29, 'abs', 'abs and core', 'hyper-extensions', 3, 12, NULL, 'hEX', ''),
(30, 'abs', 'abs and core', 'reverse crunch', 3, 12, NULL, 'rC', ''),
(31, 'abs', 'abs and core', 'sit ups', 4, 20, NULL, 'sU', ''),
(33, 'chest', 'chest', 'pushups', 3, 30, NULL, 'pU', ''),
(34, 'chest', 'chest', 'incline bench press', 5, 10, NULL, 'iBBP', ''),
(35, 'chest', 'chest', 'low incline bench press', 3, 10, NULL, 'lIBP', ''),
(36, 'chest', 'chest', 'seated machine press', 3, 12, NULL, 'mP', ''),
(37, 'chest', 'chest', 'single arm cable crossover', 3, 12, NULL, 'sACO', ''),
(40, 'legs', 'legs', 'sissy squats', 3, 10, NULL, 'sS', ''),
(41, 'legs', 'legs', 'leg extensions', 2, 10, NULL, 'lE', ''),
(42, 'legs', 'legs', 'leg press', 3, 9, NULL, 'lP', ''),
(43, 'legs', 'legs', 'hack squats', 2, 9, NULL, 'hS', ''),
(44, 'legs', 'legs', 'dumbbell stiff leg deadlifts', 2, 9, NULL, 'dbSLDL', ''),
(45, 'legs', 'legs', 'seated leg curl', 2, 10, NULL, 'lE', ''),
(46, 'legs', 'legs', 'lying leg curl', 2, 9, NULL, 'lLC', ''),
(47, 'legs', 'legs', 'hyper-extensions', 2, 10, NULL, 'hEX', ''),
(55, 'fat', 'cardio and abs', 'plank', 3, 3, 1, 'pEW', ''),
(56, 'fat', 'cardio and abs', 'body weight glute bridge', 3, 15, 1, 'gBG', ''),
(57, 'fat', 'cardio and abs', 'ab crunch', 3, 15, 1, 'abCrunch', ''),
(58, 'fat', 'cardio and abs', 'glute kick back', 3, 15, 1, 'gKB', ''),
(59, 'fat', 'cardio and abs', 'side lying climbers', 3, 12, 1, 'sLLC', ''),
(60, 'fat', 'lower body foucs', 'reverse hack squats', 3, 12, 2, 'rHS', ''),
(61, 'fat', 'lower body foucs', 'leg press', 3, 12, 2, 'lP', ''),
(62, 'fat', 'lower body foucs', 'leg extension', 3, 15, 2, 'lE', ''),
(63, 'fat', 'lower body foucs', 'leg curls', 3, 15, 2, 'lLC', ''),
(64, 'fat', 'lower body foucs', 'standing calf raises ', 3, 25, 2, 'sCR', ''),
(65, 'fat', 'cardio and abs', 'plank', 3, 3, 3, 'pEW', ''),
(66, 'fat', 'cardio and abs', 'body weight glute bridge', 3, 15, 3, 'gBG', ''),
(67, 'fat', 'cardio and abs', 'ab crunch', 3, 15, 3, 'abCrunch', ''),
(68, 'fat', 'cardio and abs', 'glute kick back', 3, 15, 3, 'gKB', ''),
(69, 'fat', 'cardio and abs', 'side lying climbers', 3, 12, 3, 'sLLC', ''),
(70, 'fat', 'lower body focus', 'barbell squat', 3, 12, 4, 'barbellSquat', ''),
(71, 'fat', 'lower body focus', 'Romanian dead-lift', 4, 10, 4, 'rDL', ''),
(72, 'fat', 'lower body focus', 'walking lounge', 3, 15, 4, 'wDBL', ''),
(73, 'fat', 'lower body focus', 'glute kick back', 3, 15, 4, 'gKB', '');

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
