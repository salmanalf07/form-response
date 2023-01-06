/*
SQLyog Ultimate v12.5.1 (64 bit)
MySQL - 10.4.14-MariaDB : Database - form-response
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`form-response` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `form-response`;

/*Table structure for table `respondens` */

DROP TABLE IF EXISTS `respondens`;

CREATE TABLE `respondens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `work_unit` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

/*Data for the table `respondens` */

insert  into `respondens`(`id`,`email`,`name`,`work_unit`,`createdAt`,`updatedAt`,`deletedAt`) values 
(1,NULL,'SALMAN',NULL,'2022-08-10 15:57:44','2022-08-10 15:57:44',NULL),
(2,'m.farisi@binu.edu',NULL,NULL,'2022-08-10 16:19:28','2022-08-10 16:19:28',NULL),
(3,'m.farisi@binu.edu','Salman Al Farisi','Operations','2022-08-10 16:21:40','2022-08-10 16:21:40',NULL),
(4,'yogi.trianto@binus.edu','Yogi Trianto','Operations','2022-08-10 17:57:08','2022-08-10 17:57:08',NULL),
(5,'yogi.trianto@binus.edu','Yogi Trianto','BEKASI','2022-08-10 17:58:07','2022-08-10 17:58:07',NULL),
(6,'m.farisi@binu.edu','Salman Al Farisi','Operations','2022-08-10 17:59:27','2022-08-10 17:59:27',NULL),
(7,'m.farisi@binu.edu','Salman Al Farisi','Operations','2022-08-11 10:59:54','2022-08-11 10:59:54',NULL),
(8,'yogi.trianto@binus.edu','Yogi Trianto','Operations','2022-08-11 11:21:38','2022-08-11 11:21:38',NULL),
(9,'m.farisi@binu.edu','Salman Al Farisi','Operations','2022-08-11 11:23:29','2022-08-11 11:23:29',NULL),
(10,'yogi.trianto@binus.edu','Salman Al Farisi','Operations','2022-08-11 11:25:19','2022-08-11 11:25:19',NULL),
(11,'yogi.trianto@binus.edu','Salman Al Farisi','BEKASI','2022-08-11 11:27:33','2022-08-11 11:27:33',NULL);

/*Table structure for table `respons` */

DROP TABLE IF EXISTS `respons`;

CREATE TABLE `respons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_time` datetime DEFAULT NULL,
  `End_time` datetime DEFAULT NULL,
  `respondenId` int(11) DEFAULT NULL,
  `nama_kegiatan` varchar(255) DEFAULT NULL,
  `date_kegiatan` date DEFAULT NULL,
  `ruanganId` int(11) DEFAULT NULL,
  `ques_1` varchar(255) DEFAULT NULL,
  `ques_2` varchar(255) DEFAULT NULL,
  `ques_3` varchar(255) DEFAULT NULL,
  `ques_4` varchar(255) DEFAULT NULL,
  `ques_5` varchar(255) DEFAULT NULL,
  `ques_6` varchar(225) DEFAULT NULL,
  `ques_7` longtext DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `respondenId` (`respondenId`),
  KEY `ruanganId` (`ruanganId`),
  CONSTRAINT `respons_ibfk_1` FOREIGN KEY (`respondenId`) REFERENCES `respondens` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `respons_ibfk_2` FOREIGN KEY (`ruanganId`) REFERENCES `ruangans` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

/*Data for the table `respons` */

insert  into `respons`(`id`,`start_time`,`End_time`,`respondenId`,`nama_kegiatan`,`date_kegiatan`,`ruanganId`,`ques_1`,`ques_2`,`ques_3`,`ques_4`,`ques_5`,`ques_6`,`ques_7`,`createdAt`,`updatedAt`,`deletedAt`) values 
(1,NULL,NULL,1,'Jalan-Jalan','2022-08-17',1,'4','4','5','3','2',NULL,'4','2022-08-10 15:57:44','2022-08-10 15:57:44',NULL),
(2,NULL,NULL,2,'OTP B2026','2022-08-10',8,'4','5','3','4','4',NULL,'5','2022-08-10 16:19:28','2022-08-10 16:19:28',NULL),
(3,NULL,NULL,3,'OTP B2026','2022-08-09',15,'3','4','5','3','4',NULL,'4','2022-08-10 16:21:40','2022-08-10 16:21:40',NULL),
(4,NULL,NULL,4,'FYP 2022','2022-08-10',15,'4','4','5','5','5','5',NULL,'2022-08-10 17:57:08','2022-08-10 17:57:08',NULL),
(5,NULL,NULL,5,'Jalan-Jalan','2022-08-10',14,'4','4','4','5','5','5',NULL,'2022-08-10 17:58:07','2022-08-10 17:58:07',NULL),
(6,NULL,NULL,6,'OTP B2026','2022-08-10',10,'5','5','5','4','4','5','sasansbgdsgdsya','2022-08-10 17:59:27','2022-08-10 17:59:27',NULL),
(7,NULL,NULL,7,'Biz Tech 2022','2022-08-20',23,'5','5','5','5','4','','Terimakasih sudah membantu','2022-08-11 10:59:54','2022-08-11 10:59:54',NULL),
(8,NULL,NULL,8,'Biz Tech 2022','2022-08-20',23,'4','5','5','4','','4','terimakasih','2022-08-11 11:21:38','2022-08-11 11:21:38',NULL),
(9,NULL,NULL,9,'Biz Tech 2022','2022-08-20',18,'5','5','4','4','4','5','terimakasih','2022-08-11 11:23:29','2022-08-11 11:23:29',NULL),
(10,NULL,NULL,10,'OTP B2026','2022-08-20',10,'4','4','5','5','3','5','terimakasih','2022-08-11 11:25:19','2022-08-11 11:25:19',NULL),
(11,NULL,NULL,11,'OTP B2026','2022-08-20',12,'4','5','4','3','4','5','terimakasih','2022-08-11 11:27:33','2022-08-11 11:27:33',NULL);

/*Table structure for table `ruangans` */

DROP TABLE IF EXISTS `ruangans`;

CREATE TABLE `ruangans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_ruangan` varchar(255) DEFAULT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;

/*Data for the table `ruangans` */

insert  into `ruangans`(`id`,`nama_ruangan`,`keterangan`,`createdAt`,`updatedAt`,`deletedAt`) values 
(1,'A0118',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(2,'A0124',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(3,'A0407',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(4,'A0408',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(5,'A0409',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(6,'A0410',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(7,'A0411',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(8,'A0412',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(9,'A0413',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(10,'A0503',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(11,'A0504',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(12,'A0505',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(13,'A0506',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(14,'A0507',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(15,'A0508',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(16,'A0511',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(17,'A0512',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(18,'A0513',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(19,'A0514',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(20,'A0515',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(21,'A0516',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),
(23,'MMG Lobby','','2022-08-10 11:47:16','2022-08-10 11:47:16',NULL),
(24,'Mini Theater','','2022-08-10 15:18:34','2022-08-10 15:18:34',NULL);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`email`,`password`,`refresh_token`,`createdAt`,`updatedAt`,`deletedAt`) values 
(1,'M. SALMAN AL-FARISI','m.farisi@binus.edu','$2b$10$RcG2jbwxsXmGHfhswyC.benuMKOU6Yex9TPSaHFZ0.ckRYmC3imEy',NULL,'2022-08-10 03:42:28','2022-08-10 03:42:28',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
