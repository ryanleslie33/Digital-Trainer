-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 11, 2019 at 05:48 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `digital_trainer`
--
CREATE DATABASE IF NOT EXISTS `digital_trainer` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `digital_trainer`;

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
  `image` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Dumping data for table `exercise`
--

INSERT INTO `exercise` (`id`, `category`, `name`, `exercise`, `sets`, `reps`, `day`, `image`) VALUES
(2, 'muscle', 'chest and shoulders', 'dumbbell and bench press', 5, 10, 1, 'dumbell-bench.jpg'),
(3, 'muscle', 'chest and shoulder', 'incline dumbbell benchpress', 4, 10, 1, 'incline-dumbbell-bp.jpg'),
(4, 'muscle', 'chest and shoulders', 'dumbbell floor press', 3, 12, 1, 'dumbbell-floor-press.jpg'),
(5, 'muscle', 'chest and shoulders', 'standing dumbbell press', 4, 10, 1, 'Standing-Dumbell-Press.jpg'),
(6, 'muscle', 'chest and shoulders', 'dumbbell lateral raise', 3, 12, 1, 'dumbbell-lateral-raise.jpg'),
(7, 'muscle', 'back and biceps', 'dumbbell bent over row', 4, 12, 2, 'dumbbell-bent-over-row.jpg'),
(8, 'muscle', 'back and biceps', 'tripod dumbbell row', 4, 12, 2, 'tripod-dumbbell-row2.jpg'),
(9, 'muscle', 'back and biceps', 'dumbbell pull over', 3, 12, 2, 'Dumbell-Pull-Over.jpg'),
(10, 'muscle', 'back and biceps', 'reverse grip dumbbell row', 4, 12, 2, 'reverse-grip-bent-over-row.jpg'),
(11, 'muscle', 'back and bicepts', 'dumbbell bicep curl', 3, 15, 2, 'Bicep-Curl.jpg'),
(12, 'muscle', 'legs and core', 'dumbbell goblet squat', 4, 10, 3, 'goblet-squat.jpg'),
(13, 'muscle', 'legs and core', 'dumbbell stiff leg dead-lift', 4, 10, 3, 'dumbbell-stiff-leg-deadlift.jpg'),
(14, 'muscle', 'legs and core', 'dumbbell rear lounge', 4, 10, 3, 'dumbell-rear-lunge.jpg'),
(15, 'muscle', 'legs and core', 'dumbbell frog squat ', 3, 8, 3, 'dumbbell-frog-squat.jpg'),
(16, 'muscle', 'legs and core', 'dumbbell calf raise', 4, 20, 3, 'dumbbell-calf-rasies.jpg'),
(17, 'muscle', 'upper body', 'one arm dumbbell rows', 4, 10, 4, 'One-Arm-Dumbbell-Rows.jpg'),
(18, 'muscle', 'upper body', 'dumbbell Arnold press', 4, 10, 4, 'arnold-press.jpg'),
(19, 'muscle', 'upper body', 'incline dumbbell bench press', 4, 12, 4, 'incline-barbell-press.jpg'),
(20, 'muscle', 'upper body', 'chest supported dumbbell row', 3, 12, 4, 'chest-supported-row.jpg'),
(21, 'muscle', 'upper body', 'dumbbell pin wheel curls', 2, 12, 4, 'pin-wheel-curls.jpg'),
(22, 'muscle', 'legs and core phase 2', 'dumbbell squat', 4, 10, 5, 'dumbbell-squat-4.jpg'),
(23, 'muscle', 'legs and core phase 2', 'dumbbell deadlift', 4, 10, 5, 'dumbbell_romanian_deadlift_main.jpg'),
(24, 'muscle', 'legs and core phase 2', 'dumbbell split squat', 3, 8, 5, 'split-squat.jpg'),
(25, 'muscle', 'legs and core phase 2', 'dumbbell hip thrust', 4, 15, 5, 'dumbbell-hip-thrust.jpg'),
(26, 'abs', 'abs and core', 'plank', 3, 30, NULL, 'plank-exercise-workout.jpg'),
(27, 'abs', 'abs and core', 'side plank', 3, 20, NULL, 'side-plank.jpg'),
(28, 'abs', 'abs and core', 'stability bar crunch', 3, 12, NULL, 'Stability-ball-Crunch-for-belly-fat.jpg'),
(29, 'abs', 'abs and core', 'hyper-extensions', 3, 12, NULL, 'Hyperextensions.jpg'),
(30, 'abs', 'abs and core', 'reverse crunch', 3, 12, NULL, 'Reverse-Crunches.jpg'),
(31, 'abs', 'abs and core', 'sit ups', 4, 20, NULL, 'sit-up.jpg'),
(33, 'chest', 'chest', 'pushups', 3, 30, NULL, 'push-ups.jpg'),
(34, 'chest', 'chest', 'incline bench press', 5, 10, NULL, 'incline-barbell-press.jpg'),
(35, 'chest', 'chest', 'low incline bench press', 3, 10, NULL, 'low-incline-bp.jpg'),
(36, 'chest', 'chest', 'seated machine press', 3, 12, NULL, 'machine-press.jpg'),
(37, 'chest', 'chest', 'single arm cable crossover', 3, 12, NULL, 'single-arm-cross-over.jpg'),
(40, 'legs', 'legs', 'sissy squats', 3, 10, NULL, 'sissy-squat.jpg'),
(41, 'legs', 'legs', 'leg extensions', 2, 10, NULL, 'leg-extensions.jpg'),
(42, 'legs', 'legs', 'leg press', 3, 9, NULL, 'leg-press.jpg'),
(43, 'legs', 'legs', 'hack squats', 2, 9, NULL, 'hack-squat-2.png'),
(44, 'legs', 'legs', 'dumbbell stiff leg deadlifts', 2, 9, NULL, 'dumbbell-stiff-leg-deadlift.jpg'),
(45, 'legs', 'legs', 'seated leg curl', 2, 10, NULL, 'leg-extensions.jpg'),
(46, 'legs', 'legs', 'lying leg curl', 2, 9, NULL, 'laying-leg-curl.jpg'),
(47, 'legs', 'legs', 'hyper-extensions', 2, 10, NULL, 'Hyperextensions.jpg'),
(55, 'fat', 'cardio and abs', 'plank', 3, 3, 1, 'plank-exercise-workout.jpg'),
(56, 'fat', 'cardio and abs', 'body weight glute bridge', 3, 15, 1, 'glutebridge.jpg'),
(57, 'fat', 'cardio and abs', 'ab crunch', 3, 15, 1, 'ab-crunch.jpg'),
(58, 'fat', 'cardio and abs', 'glute kick back', 3, 15, 1, 'glute_kickback.jpg'),
(59, 'fat', 'cardio and abs', 'side lying climbers', 3, 12, 1, 'side-lying-leg-climbers.jpg'),
(60, 'fat', 'lower body foucs', 'reverse hack squats', 3, 12, 2, 'reverse-hack-squats.jpg'),
(61, 'fat', 'lower body foucs', 'leg press', 3, 12, 2, 'leg-press.jpg'),
(62, 'fat', 'lower body foucs', 'leg extension', 3, 15, 2, 'leg-extensions.jpg'),
(63, 'fat', 'lower body foucs', 'leg curls', 3, 15, 2, 'laying-leg-curl.jpg'),
(64, 'fat', 'lower body foucs', 'standing calf raises ', 3, 25, 2, 'standing-calf-raise.jpg'),
(65, 'fat', 'cardio and abs', 'plank', 3, 3, 3, 'plank-exercise-workout.jpg'),
(66, 'fat', 'cardio and abs', 'body weight glute bridge', 3, 15, 3, 'glutebridge.jpg'),
(67, 'fat', 'cardio and abs', 'ab crunch', 3, 15, 3, 'ab-crunch.jpg'),
(68, 'fat', 'cardio and abs', 'glute kick back', 3, 15, 3, 'glute_kickback.jpg'),
(69, 'fat', 'cardio and abs', 'side lying climbers', 3, 12, 3, 'side-lying-leg-climbers.jpg'),
(70, 'fat', 'lower body focus', 'barbell squat', 3, 12, 4, 'barbell-squat.jpg'),
(71, 'fat', 'lower body focus', 'Romanian dead-lift', 4, 10, 4, 'dumbbell_romanian_deadlift_main.jpg'),
(72, 'fat', 'lower body focus', 'walking lounge', 3, 15, 4, 'Walking-Dumbbell-Lunge.jpg'),
(73, 'fat', 'lower body focus', 'glute kick back', 3, 15, 4, 'glute_kickback.jpg');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
