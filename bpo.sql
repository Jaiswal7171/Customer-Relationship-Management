-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2024 at 02:46 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bpo`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `profile_photo` varchar(222) NOT NULL,
  `admin_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `profile_photo`, `admin_name`, `email`, `password`, `designation`, `createdAt`, `updatedAt`) VALUES
(10, '', '', 'gaurav@example.com', '7171', 'asa', '2024-05-24 11:24:23', '2024-05-24 11:24:23');

-- --------------------------------------------------------

--
-- Table structure for table `call_count`
--

CREATE TABLE `call_count` (
  `id` int(11) NOT NULL,
  `employee_id` int(222) NOT NULL,
  `category` int(222) NOT NULL,
  `call_count` int(222) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_name`, `createdAt`, `updatedAt`) VALUES
(1, 'Inforamtion technology\r\n', '2024-06-14 07:42:39', '2024-06-14 07:42:39'),
(2, 'Google Pramotion\r\n', '2024-06-14 07:42:39', '2024-06-14 07:42:39'),
(3, 'Social Media', '2024-06-14 07:42:39', '2024-06-14 07:42:39');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `client_name` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `whatsapp_no` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `service_category` varchar(255) DEFAULT NULL,
  `service` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `company_details`
--

CREATE TABLE `company_details` (
  `id` int(11) NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `company_category` varchar(255) DEFAULT NULL,
  `company_address` varchar(255) DEFAULT NULL,
  `company_pincode` varchar(255) DEFAULT NULL,
  `company_phone` varchar(255) DEFAULT NULL,
  `company_whatsappNo` varchar(255) DEFAULT NULL,
  `company_email` varchar(255) DEFAULT NULL,
  `company_website` varchar(255) DEFAULT NULL,
  `company_linkedin` varchar(255) DEFAULT NULL,
  `company_instagram` varchar(255) DEFAULT NULL,
  `company_facebook` varchar(255) DEFAULT NULL,
  `company_twitter` varchar(255) DEFAULT NULL,
  `company_details` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `company_details`
--

INSERT INTO `company_details` (`id`, `company_name`, `company_category`, `company_address`, `company_pincode`, `company_phone`, `company_whatsappNo`, `company_email`, `company_website`, `company_linkedin`, `company_instagram`, `company_facebook`, `company_twitter`, `company_details`, `createdAt`, `updatedAt`) VALUES
(1, 'Vyavssat Digiworld Pvt Ltd', 'Inforamation Technology', 'Ganesh Colony , Near Vishal Colony Plot No 1', '425001', '8147854787', '9632587474', 'gauravjais@gmail.com', 'https://vyavsaay.co.in/', 'https://vyavsaay.co.in/', 'https://vyavsaay.co.in/', 'https://vyavsaay.co.in/', 'https://vyavsaay.co.in/', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available', '2024-06-11 12:14:36', '2024-06-11 12:14:36');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `d_id` int(11) DEFAULT NULL,
  `companyName` varchar(255) NOT NULL,
  `companyMobile` varchar(255) NOT NULL,
  `whatsappNumber` varchar(255) DEFAULT NULL,
  `companyCategory` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `employeeId` int(11) NOT NULL,
  `callDate` date DEFAULT NULL,
  `callTime` time DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `d_id`, `companyName`, `companyMobile`, `whatsappNumber`, `companyCategory`, `email`, `address`, `city`, `state`, `employeeId`, `callDate`, `callTime`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'ABC Company', '+1234567890', '+1234567890', 'Technology', 'abc@example.com', '123 Main St', 'New York', 'NY', 7, '2024-06-21', '10:00:00', '2024-06-21 14:50:26', '2024-06-21 14:50:26'),
(2, 1, 'XYZ Corp', '+1987654321', '+1987654321', 'Finance', 'xyz@example.com', '456 Oak Ave', 'Los Angeles', 'CA', 7, '2024-06-21', '11:30:00', '2024-06-21 14:50:26', '2024-06-21 14:50:26');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `employee_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `company_email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `experience` text DEFAULT NULL,
  `portfolio_link` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `qualification` varchar(255) DEFAULT NULL,
  `experience_letter` text DEFAULT NULL,
  `adhar_card_image` text DEFAULT NULL,
  `profile_photo` text DEFAULT NULL,
  `pan_card` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `whatsapp_no` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `managerid` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `employee_name`, `email`, `company_email`, `password`, `experience`, `portfolio_link`, `gender`, `designation`, `qualification`, `experience_letter`, `adhar_card_image`, `profile_photo`, `pan_card`, `phone`, `whatsapp_no`, `address`, `city`, `state`, `managerid`, `createdAt`, `updatedAt`) VALUES
(7, 'Gaurav Jaiswal', 'gaurav@example.com', 'gaurav@example.com', '7474', '2 Years', NULL, NULL, 'Full Stack Developer', 'Msc Computer Science', NULL, NULL, '1718953304032-b.jpg', NULL, '8149374828', '8149374828', 'Pune Station Sohrab Hall ', 'Pune', 'Maharshtra', 1, '2024-06-21 07:01:44', '2024-06-21 07:01:44');

-- --------------------------------------------------------

--
-- Table structure for table `employee_task`
--

CREATE TABLE `employee_task` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `events_gallery`
--

CREATE TABLE `events_gallery` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events_gallery`
--

INSERT INTO `events_gallery` (`id`, `image`, `createdAt`, `updatedAt`) VALUES
(1, '1718775888243-download.jpeg', '2024-06-19 05:44:48', '2024-06-19 05:44:48'),
(2, '1718775893904-download (2).jpeg', '2024-06-19 05:44:53', '2024-06-19 05:44:53'),
(3, '1718775899833-images.jpeg', '2024-06-19 05:44:59', '2024-06-19 05:44:59');

-- --------------------------------------------------------

--
-- Table structure for table `followup`
--

CREATE TABLE `followup` (
  `id` int(11) NOT NULL,
  `followup_date` datetime NOT NULL,
  `description` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `image`, `createdAt`, `updatedAt`) VALUES
(4, '1718540193656_WIN_20230721_17_38_52_Pro.jpg', '2024-06-16 12:16:33', '2024-06-16 12:16:33'),
(6, '1718546346554_IMG_20191024_225245_285.jpg', '2024-06-16 13:59:06', '2024-06-16 13:59:06'),
(7, '1718546353512_IMG_20191001_182211.jpg', '2024-06-16 13:59:13', '2024-06-16 13:59:13'),
(8, '1718546359369_IMG_20190923_212340.jpg', '2024-06-16 13:59:19', '2024-06-16 13:59:19'),
(9, '1718562681082_IMG_20200120_132913.jpg', '2024-06-16 18:31:21', '2024-06-16 18:31:21');

-- --------------------------------------------------------

--
-- Table structure for table `i_lead`
--

CREATE TABLE `i_lead` (
  `id` int(11) NOT NULL,
  `proxy_id` int(11) DEFAULT NULL,
  `companyName` varchar(255) NOT NULL,
  `companyMobile` int(11) NOT NULL,
  `whatsappNumber` int(11) DEFAULT NULL,
  `companyCategory` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `employeeId` int(11) NOT NULL,
  `callDate` date DEFAULT NULL,
  `callTime` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE `leaves` (
  `id` int(11) NOT NULL,
  `message_to` varchar(255) DEFAULT NULL,
  `leave_reason` varchar(255) DEFAULT NULL,
  `leave_description` text DEFAULT NULL,
  `leave_start_date` datetime DEFAULT NULL,
  `leave_end_date` datetime DEFAULT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `managers`
--

CREATE TABLE `managers` (
  `id` int(11) NOT NULL,
  `manager_name` varchar(255) DEFAULT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `team_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `managers`
--

INSERT INTO `managers` (`id`, `manager_name`, `category_name`, `team_name`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', NULL, NULL, '2024-06-21 06:49:43', '2024-06-21 06:49:43'),
(2, 'Gaurav Jaiswal', 'Social Media', 'Team A', '2024-06-21 09:36:50', '2024-06-21 09:36:50');

-- --------------------------------------------------------

--
-- Table structure for table `occasion_gallery`
--

CREATE TABLE `occasion_gallery` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `occasion_gallery`
--

INSERT INTO `occasion_gallery` (`id`, `image`, `createdAt`, `updatedAt`) VALUES
(3, '1718775812375-images (1).jpeg', '2024-06-19 05:43:32', '2024-06-19 05:43:32'),
(4, '1718775820777-download (1).jpeg', '2024-06-19 05:43:40', '2024-06-19 05:43:40'),
(5, '1718775830747-download.jpeg', '2024-06-19 05:43:50', '2024-06-19 05:43:50');

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `service_name` varchar(255) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`id`, `service_name`, `category_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Software Development , Website Development , applocation Development , Crm', 1, '2024-06-14 07:42:56', '2024-06-14 07:42:56'),
(2, 'Social Media Handeling , Lead Genrate , Post Posting\r\n', 3, '2024-06-14 07:46:43', '2024-06-14 07:46:43'),
(3, 's', 2, '2024-06-20 05:35:31', '2024-06-20 05:35:31');

-- --------------------------------------------------------

--
-- Table structure for table `snapmessage`
--

CREATE TABLE `snapmessage` (
  `id` int(11) NOT NULL,
  `message` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `employee_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `workdetail`
--

CREATE TABLE `workdetail` (
  `id` int(11) NOT NULL,
  `ProjectName` varchar(255) NOT NULL,
  `TaskName` varchar(255) NOT NULL,
  `employeeId` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `ProjectAssignDate` date DEFAULT NULL,
  `DeliveryDate` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `workdetail`
--

INSERT INTO `workdetail` (`id`, `ProjectName`, `TaskName`, `employeeId`, `description`, `ProjectAssignDate`, `DeliveryDate`, `createdAt`, `updatedAt`) VALUES
(5, 'Employee Management system ', 'Leaves Management', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-04', '2024-06-22', '2024-06-21 13:49:16', '2024-06-21 13:49:16'),
(6, 'Employee Management system ', 'Leaves Management', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-04', '2024-06-22', '2024-06-21 13:49:16', '2024-06-21 13:49:16'),
(7, 'Employee Management system ', 'Leaves Management', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-04', '2024-06-22', '2024-06-21 13:49:16', '2024-06-21 13:49:16'),
(8, 'Employee Management system ', 'Leaves Management', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-04', '2024-06-22', '2024-06-21 13:49:16', '2024-06-21 13:49:16'),
(9, 'Employee Management system ', 'Leaves Management', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-04', '2024-06-22', '2024-06-21 13:49:16', '2024-06-21 13:49:16'),
(10, 'Employee Management system ', 'Leaves Management', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-04', '2024-06-22', '2024-06-21 13:49:16', '2024-06-21 13:49:16'),
(11, 'Employee Management system ', 'Leaves Management', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-04', '2024-06-22', '2024-06-21 13:49:16', '2024-06-21 13:49:16'),
(12, 'Employee Management system ', 'Leaves Management', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-02', '2024-07-12', '2024-06-21 13:49:16', '2024-06-21 13:49:16'),
(13, 'Employee Management system ', 'Leaves Management', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-28', '2024-06-22', '2024-06-21 13:49:16', '2024-06-21 13:49:16'),
(14, 'Employee Management system ', 'Leaves Management', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-04', '2024-06-06', '2024-06-21 13:49:16', '2024-06-21 13:49:16'),
(15, 'Employee Management system ', 'Leaves Management', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-02', '2024-06-22', '2024-06-21 13:49:16', '2024-06-21 13:49:16'),
(16, 'Employee Management system ', 'Leaves Management', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-19', '2024-08-15', '2024-06-21 13:49:16', '2024-06-21 13:49:16'),
(17, 'Employee Management system ', 'Admin Panel ', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-06', '2024-06-22', '2024-06-21 13:49:16', '2024-06-21 13:49:16'),
(18, 'Employee Management system ', 'Employees Login', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-04', '2024-06-22', '2024-06-21 13:49:16', '2024-06-21 13:49:16'),
(19, 'Employee Management system ', 'Leaves Management', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-04', '2024-06-22', '2024-06-21 13:49:16', '2024-06-21 13:49:16'),
(20, 'Employee Management system ', 'Work details', 7, 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is availa', '2024-06-04', '2024-06-22', '2024-06-21 13:49:16', '2024-06-21 13:49:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `email_5` (`email`);

--
-- Indexes for table `call_count`
--
ALTER TABLE `call_count`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `company_details`
--
ALTER TABLE `company_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `companyMobile` (`companyMobile`),
  ADD UNIQUE KEY `whatsappNumber` (`whatsappNumber`),
  ADD KEY `employeeId` (`employeeId`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `company_email` (`company_email`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `company_email_2` (`company_email`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `company_email_3` (`company_email`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `company_email_4` (`company_email`),
  ADD UNIQUE KEY `email_5` (`email`),
  ADD UNIQUE KEY `company_email_5` (`company_email`),
  ADD UNIQUE KEY `email_6` (`email`),
  ADD UNIQUE KEY `company_email_6` (`company_email`),
  ADD UNIQUE KEY `email_7` (`email`),
  ADD UNIQUE KEY `company_email_7` (`company_email`),
  ADD UNIQUE KEY `email_8` (`email`),
  ADD UNIQUE KEY `company_email_8` (`company_email`),
  ADD UNIQUE KEY `email_9` (`email`),
  ADD UNIQUE KEY `company_email_9` (`company_email`),
  ADD UNIQUE KEY `email_10` (`email`),
  ADD UNIQUE KEY `company_email_10` (`company_email`),
  ADD UNIQUE KEY `company_email_11` (`company_email`),
  ADD KEY `managerid` (`managerid`);

--
-- Indexes for table `employee_task`
--
ALTER TABLE `employee_task`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events_gallery`
--
ALTER TABLE `events_gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `followup`
--
ALTER TABLE `followup`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_id` (`employee_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `i_lead`
--
ALTER TABLE `i_lead`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `companyMobile` (`companyMobile`),
  ADD UNIQUE KEY `whatsappNumber` (`whatsappNumber`),
  ADD KEY `employeeId` (`employeeId`);

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- Indexes for table `managers`
--
ALTER TABLE `managers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `occasion_gallery`
--
ALTER TABLE `occasion_gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `snapmessage`
--
ALTER TABLE `snapmessage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `EmployeeId` (`employee_id`);

--
-- Indexes for table `workdetail`
--
ALTER TABLE `workdetail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employeeId` (`employeeId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `call_count`
--
ALTER TABLE `call_count`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `company_details`
--
ALTER TABLE `company_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `employee_task`
--
ALTER TABLE `employee_task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `events_gallery`
--
ALTER TABLE `events_gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `followup`
--
ALTER TABLE `followup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `i_lead`
--
ALTER TABLE `i_lead`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `managers`
--
ALTER TABLE `managers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `occasion_gallery`
--
ALTER TABLE `occasion_gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `snapmessage`
--
ALTER TABLE `snapmessage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `workdetail`
--
ALTER TABLE `workdetail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`employeeId`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`managerid`) REFERENCES `managers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `followup`
--
ALTER TABLE `followup`
  ADD CONSTRAINT `followup_ibfk_1451` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `followup_ibfk_1452` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `i_lead`
--
ALTER TABLE `i_lead`
  ADD CONSTRAINT `i_lead_ibfk_1` FOREIGN KEY (`employeeId`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `leaves`
--
ALTER TABLE `leaves`
  ADD CONSTRAINT `leaves_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `service`
--
ALTER TABLE `service`
  ADD CONSTRAINT `service_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `snapmessage`
--
ALTER TABLE `snapmessage`
  ADD CONSTRAINT `snapmessage_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `workdetail`
--
ALTER TABLE `workdetail`
  ADD CONSTRAINT `workdetail_ibfk_1` FOREIGN KEY (`employeeId`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
