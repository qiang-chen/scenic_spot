-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.20 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win32
-- HeidiSQL 版本:                  8.2.0.4675
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 scenic 的数据库结构
CREATE DATABASE IF NOT EXISTS `scenic` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `scenic`;


-- 导出  表 scenic.carousel 结构
CREATE TABLE IF NOT EXISTS `carousel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgpath` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- 正在导出表  scenic.carousel 的数据：~4 rows (大约)
DELETE FROM `carousel`;
/*!40000 ALTER TABLE `carousel` DISABLE KEYS */;
INSERT INTO `carousel` (`id`, `imgpath`) VALUES
	(1, '/public/img/jinse1.jpg'),
	(2, '/public/img/jinse2.jpg'),
	(3, '/public/img/jinse3.jpg'),
	(4, '/public/img/jinse4.jpg');
/*!40000 ALTER TABLE `carousel` ENABLE KEYS */;


-- 导出  表 scenic.city 结构
CREATE TABLE IF NOT EXISTS `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  scenic.city 的数据：~5 rows (大约)
DELETE FROM `city`;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` (`id`, `title`) VALUES
	(1, '银川'),
	(2, '中卫'),
	(3, '固原'),
	(4, '吴忠'),
	(5, '石嘴山');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;


-- 导出  表 scenic.detailtypelist 结构
CREATE TABLE IF NOT EXISTS `detailtypelist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `d_id` int(11) NOT NULL DEFAULT '0',
  `title` varchar(50) NOT NULL DEFAULT '0',
  `reserve` varchar(50) NOT NULL DEFAULT '0',
  `money` int(11) NOT NULL DEFAULT '0',
  `tab1` varchar(50) NOT NULL DEFAULT '0',
  `tab2` varchar(50) NOT NULL DEFAULT '0',
  `num` int(11) NOT NULL DEFAULT '0',
  `price` int(11) NOT NULL DEFAULT '0',
  `predetermine` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- 正在导出表  scenic.detailtypelist 的数据：~21 rows (大约)
DELETE FROM `detailtypelist`;
/*!40000 ALTER TABLE `detailtypelist` DISABLE KEYS */;
INSERT INTO `detailtypelist` (`id`, `d_id`, `title`, `reserve`, `money`, `tab1`, `tab2`, `num`, `price`, `predetermine`) VALUES
	(1, 1, '镇北堡西部影城成人票', '10点前预定,游玩当天有效', 86, '无需取票', '随时退', 1238, 120, '预订'),
	(2, 1, '镇北堡西部影城儿童票', '8点前预定,游玩当天有效', 43, '无需取票', '随时退', 2345, 120, '预订'),
	(3, 1, '镇北堡西部影城', '9点前预定,游玩当天有效', 129, '无需取票', '随时退', 4567, 120, '预订'),
	(4, 2, '黄河古渡成人票', '10点前预定,游玩当天有效', 99, '无需取票', '随时退', 1238, 150, '预订'),
	(5, 2, '黄河古渡儿童票', '8点前预定,游玩当天有效', 45, '无需取票', '随时退', 2345, 150, '预订'),
	(6, 2, '黄河古渡', '9点前预定,游玩当天有效', 159, '无需取票', '随时退', 4567, 150, '预订'),
	(7, 3, '大明湖成人票', '10点前预定,游玩当天有效', 66, '无需取票', '随时退', 1238, 180, '预订'),
	(8, 3, '大明湖儿童票', '8点前预定,游玩当天有效', 33, '无需取票', '随时退', 2345, 180, '预订'),
	(9, 3, '大明湖', '9点前预定,游玩当天有效', 99, '无需取票', '随时退', 4567, 180, '预订'),
	(10, 4, '欢乐谷成人票', '10点前预定,游玩当天有效', 44, '无需取票', '随时退', 1238, 160, '预订'),
	(11, 4, '欢乐谷儿童票', '8点前预定,游玩当天有效', 22, '无需取票', '随时退', 2345, 160, '预订'),
	(12, 4, '欢乐谷', '9点前预定,游玩当天有效', 88, '无需取票', '随时退', 4567, 160, '预订'),
	(13, 5, '趵突泉成人票', '10点前预定,游玩当天有效', 50, '无需取票', '随时退', 1238, 88, '预订'),
	(14, 5, '趵突泉儿童票', '8点前预定,游玩当天有效', 25, '无需取票', '随时退', 2345, 88, '预订'),
	(15, 5, '趵突泉', '9点前预定,游玩当天有效', 75, '无需取票', '随时退', 4567, 88, '预订'),
	(16, 6, '方特成人票', '10点前预定,游玩当天有效', 60, '无需取票', '随时退', 1238, 99, '预订'),
	(17, 6, '方特儿童票', '8点前预定,游玩当天有效', 30, '无需取票', '随时退', 2345, 99, '预订'),
	(18, 6, '方特', '9点前预定,游玩当天有效', 90, '无需取票', '随时退', 4567, 99, '预订'),
	(19, 7, '栈桥成人票', '10点前预定,游玩当天有效', 50, '无需取票', '随时退', 1238, 129, '预订'),
	(20, 7, '栈桥儿童票', '8点前预定,游玩当天有效', 25, '无需取票', '随时退', 2345, 129, '预订'),
	(21, 7, '栈桥', '9点前预定,游玩当天有效', 75, '无需取票', '随时退', 4567, 129, '预订');
/*!40000 ALTER TABLE `detailtypelist` ENABLE KEYS */;


-- 导出  表 scenic.eval 结构
CREATE TABLE IF NOT EXISTS `eval` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `portrait` varchar(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `star` double NOT NULL,
  `time` varchar(200) NOT NULL,
  `cont` varchar(200) NOT NULL,
  `imgs` varchar(200) NOT NULL,
  `base` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='评价';

-- 正在导出表  scenic.eval 的数据：~5 rows (大约)
DELETE FROM `eval`;
/*!40000 ALTER TABLE `eval` DISABLE KEYS */;
INSERT INTO `eval` (`id`, `portrait`, `username`, `star`, `time`, `cont`, `imgs`, `base`) VALUES
	(1, '/public/img/jinse4.jpg', '嘎嘣脆', 5, '2018-10-01', 'QWERTYUI欧帕斯对方过后就开了自行车VB你们', '1', 1),
	(2, '/public/img/jinse4.jpg', '娃哈哈', 4.5, '2018-10-02', 'QWERTYUI欧普拉科技和规范的撒自行车VB你们', '0', 2),
	(3, '/public/img/jinse4.jpg', '爽歪歪', 4.8, '2018-10-03', 'QWERTYUI欧普拉科技和规范的撒自行车VB你们', '1', 3),
	(4, '/public/img/jinse4.jpg', '小洋人', 4.3, '2018-10-04', '破IUY太热我去啊是电饭锅回家考虑美女吧报仇血战', '0', 2),
	(5, '/public/img/jinse4.jpg', 'peace', 5, '2017-12-2', '破IUY天热武器李凯建华高佛第三部报仇血战', '0', 2);
/*!40000 ALTER TABLE `eval` ENABLE KEYS */;


-- 导出  表 scenic.homelist 结构
CREATE TABLE IF NOT EXISTS `homelist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `sum` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `scenic` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `scheduledId` int(11) DEFAULT NULL,
  `scenictype` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '景区类别',
  `cityId` int(11) DEFAULT NULL,
  `distance` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '距离',
  `img` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `grade` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `site` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `dan` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `wang` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `desc` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `jtmsg` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `lng` char(50) COLLATE utf8_bin DEFAULT NULL,
  `lat` char(50) COLLATE utf8_bin DEFAULT NULL,
  `zoom` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  scenic.homelist 的数据：~7 rows (大约)
DELETE FROM `homelist`;
/*!40000 ALTER TABLE `homelist` DISABLE KEYS */;
INSERT INTO `homelist` (`id`, `title`, `price`, `sum`, `scenic`, `scheduledId`, `scenictype`, `cityId`, `distance`, `img`, `grade`, `site`, `dan`, `wang`, `desc`, `jtmsg`, `lng`, `lat`, `zoom`) VALUES
	(1, '镇北堡西部影城', 86, '1234', '5A景区', 1, '自然风光', 1, '4.4公里', '/public/img/zhengbei.jpg', '4.5分', '宁夏银川市西夏区镇北堡西部影城', '旺季 4月1日-10月31日 8:00-18:00', '淡季 11月1日-次年3月31日 8:00-18:00', '镇北堡西部影城，位于宁夏回族自治区银川市，是集观光、娱乐、休闲、餐饮、购物于一体的国家AAAAA级旅游景区 。 由作家张贤亮于1993年9月21日创办。', '银川交通——航空\r\n银川交通——铁路\r\n银川交通——长途客运\r\n银川交通——市内公交', '106.077995', '38.62169', 15),
	(2, '黄河古渡', 23, '3242', '4A景区', 2, '自然风光', 3, '3.5公里', '/public/img/huanghe.jpg', '4.8分', '宁夏银川市东30余里的黄河东岸', '旺季 5月1日-11月31日 8:00-18:00', '淡季 12月1日-次年4月31日 8:00-18:00', '黄河古渡位于银川市东三十余里的黄河东岸，这里有奔腾的黄河，古老的长城古渡雄风，苍茫的沙丘、美丽的田园，还有驰名中外的水洞沟旧石器文化遗址及开发的金水旅游度假村和西夏影视城，令人神往不已。', '盐池、宁东——103省道向西——水洞沟隧道——黄沙古渡景区（月牙湖）\r\n\r\n石嘴山——平罗黄河大桥——陶乐——黄沙古渡景区（月牙湖）\r\n\r\n贺兰、石嘴山——滨河大道西线向南——黄沙古渡景区（月牙湖）', '106.558246', '38.589292', 15),
	(3, '大明湖', 36, '1483', '5A景区', 1, '自然风光', 2, '2.4公里', '/public/img/daming.jpg', '3.4分', '山东省济南市市中心大明湖', '旺季 6月1日-12月31日 8:00-18:00', '淡季 1月1日-次年5月31日 8:00-18:00', '大明湖（Daming Lake），位于济南市历下区，旧城区北部，是由济南众多泉水汇流而成，大明湖面面积58公顷，大明湖公园面积103.4公顷，平均水深2米左右，最深处达4.5米，与趵突泉、千佛山并称为济南三大名胜，也是泉城济南重要的风景名胜、开放窗口和闻名中外的旅游胜地，素有“泉城明珠”的美誉。', '济南----大明湖', '117.03246', '36.680728', 15),
	(4, '欢乐谷', 215, '3892', '5A景区', 1, '游乐场', 4, '7.8公里', '/public/img/huanle.jpg', '4.9分', '深圳欢乐谷在深圳南山区欢乐谷', '旺季 7月1日-1月31日 8:00-18:00', '淡季 2月1日-次年6月31日 8:00-18:00', '作为中国主题公园的开拓者和领军企业，欢乐谷集团始终以“创造、传递、分享欢乐”为使命，以“繁华都市开心地”为定位，在不同的城市，奉献同样的欢乐，让每一位游客都能与所爱尽享欢乐时光！', '深圳----欢乐谷', '113.987186', '22.547899', 15),
	(5, '趵突泉', 56, '3892', '5A景区', 2, '自然风光', 1, '4.4公里', '/public/img/baotu.jpg', '4.7分', '山东省济南市历下区趵突泉', '旺季 8月1日-2月31日 8:00-18:00', '淡季 3月1日-次年7月31日 8:00-18:00', '趵突泉（Baotu Spring），位于山东省济南市历下区，东临泉城广场，北望五龙潭，面积达158亩，位居济南七十二名泉之冠。乾隆皇帝南巡时因趵突泉水泡茶味醇甘美，曾册封趵突泉为“天下第一泉”。', '济南----趵突泉', '117.022388', '36.667454', 15),
	(6, '方特', 129, '3213', '5A景区', 1, '游乐场', 2, '5.3公里', '/public/img/fangte.jpg', '4.1分', '郑州方特欢乐世界', '旺季 9月1日-3月31日 8:00-18:00', '淡季 4月1日-次年8月31日 8:00-18:00', '郑州方特欢乐世界是一个以高科技为主要表现形式的文化科技主题乐园。公园建在郑开大道与人文路交叉口向南，绿博园正对面。由华强文化科技集团投资建设。', '郑州----方特', '113.93658', '34.771598', 16),
	(7, '栈桥', 5, '2312', '4A景区', 2, '自然风光', 1, '3.9公里', '/public/img/zhanqiao.jpg', '4.2分', '青岛美丽的栈桥 ', '旺季 10月1日-4月31日 8:00-18:00', '淡季 5月1日-次年9月31日 8:00-18:00', '青岛栈桥位于游人如织的青岛中山路南端，桥身从海岸探入如弯月般的青岛湾深处。桥身供游人参观并在此停靠旅游船，由此乘船可看海上青岛。', '青岛----栈桥', '120.32659', '36.065436', 16);
/*!40000 ALTER TABLE `homelist` ENABLE KEYS */;


-- 导出  表 scenic.iconlist 结构
CREATE TABLE IF NOT EXISTS `iconlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  scenic.iconlist 的数据：~10 rows (大约)
DELETE FROM `iconlist`;
/*!40000 ALTER TABLE `iconlist` DISABLE KEYS */;
INSERT INTO `iconlist` (`id`, `title`, `icon`) VALUES
	(1, '自然风光', '/public/img/自然风光@2x.png'),
	(2, '人文古迹', '/public/img/人文古迹@2x.png'),
	(3, '影视基地', '/public/img/影视基地@2x.png'),
	(4, '水上乐园', '/public/img/水上乐园@2x.png'),
	(5, '主题乐园', '/public/img/主题乐园@2x.png'),
	(6, '亲子娱乐', '/public/img/亲子娱乐@2x.png'),
	(7, '避暑休闲', '/public/img/避暑休闲@2x.png'),
	(8, '温泉滑雪', '/public/img/温泉滑雪@2x.png'),
	(9, '博物馆', '/public/img/博物馆@2x.png'),
	(10, '全部景点', '/public/img/影视基地@2x.png');
/*!40000 ALTER TABLE `iconlist` ENABLE KEYS */;


-- 导出  表 scenic.imgs 结构
CREATE TABLE IF NOT EXISTS `imgs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_id` int(11) NOT NULL DEFAULT '0',
  `picurl` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

-- 正在导出表  scenic.imgs 的数据：~28 rows (大约)
DELETE FROM `imgs`;
/*!40000 ALTER TABLE `imgs` DISABLE KEYS */;
INSERT INTO `imgs` (`id`, `img_id`, `picurl`) VALUES
	(1, 1, 'zhengbei'),
	(2, 1, 'zhengbei1'),
	(3, 1, 'zhengbei2'),
	(23, 1, 'zhengbei3'),
	(24, 2, 'huanghe'),
	(25, 2, 'huanghe1'),
	(26, 2, 'huanghe2'),
	(27, 2, 'huanghe3'),
	(28, 3, 'daming'),
	(29, 3, 'daming1'),
	(30, 3, 'daming2'),
	(31, 3, 'daming3'),
	(32, 4, 'huanle'),
	(33, 4, 'huanle1'),
	(34, 4, 'huanle2'),
	(35, 4, 'huanle3'),
	(36, 5, 'baotu'),
	(37, 5, 'baotu1'),
	(38, 5, 'baotu2'),
	(39, 5, 'baotu3'),
	(40, 6, 'fangte'),
	(41, 6, 'fangte1'),
	(42, 6, 'fangte2'),
	(43, 6, 'fangte3'),
	(44, 7, 'zhanqiao'),
	(45, 7, 'zhanqiao1'),
	(46, 7, 'zhanqiao2'),
	(47, 7, 'zhanqiao3');
/*!40000 ALTER TABLE `imgs` ENABLE KEYS */;


-- 导出  表 scenic.sceniclist 结构
CREATE TABLE IF NOT EXISTS `sceniclist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) NOT NULL DEFAULT '0',
  `name` char(50) NOT NULL DEFAULT '0',
  `is5A` char(50) NOT NULL DEFAULT '0',
  `tab1` char(50) NOT NULL DEFAULT '0',
  `tab2` char(50) NOT NULL DEFAULT '0',
  `grade` char(50) NOT NULL DEFAULT '0',
  `appraise` int(11) NOT NULL DEFAULT '0',
  `money` int(11) NOT NULL DEFAULT '0',
  `distance` char(50) NOT NULL DEFAULT '0',
  `work_off` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- 正在导出表  scenic.sceniclist 的数据：~4 rows (大约)
DELETE FROM `sceniclist`;
/*!40000 ALTER TABLE `sceniclist` DISABLE KEYS */;
INSERT INTO `sceniclist` (`id`, `imgurl`, `name`, `is5A`, `tab1`, `tab2`, `grade`, `appraise`, `money`, `distance`, `work_off`) VALUES
	(1, '/public/img/img1.PNG', '镇北堡西部影城', '5A景区', '可定明日', '自然风光', '4', 8976, 86, '距市中心4.4公里', 1238),
	(2, '/public/img/img4.PNG', '黄沙古渡', '4A景区', '可定明日', '自然风光', '3', 8888, 128, '>2千米', 2233),
	(3, '/public/img/img2.PNG', '镇北堡西部影城', '5A景区', '可定明日', '自然风光', '4', 8976, 86, '距市中心308公里', 1238),
	(4, '/public/img/img3.PNG', '黄沙古渡', '4A景区', '可定明日', '自然风光', '6', 8888, 109, '>5千米', 3456);
/*!40000 ALTER TABLE `sceniclist` ENABLE KEYS */;


-- 导出  表 scenic.scheduled 结构
CREATE TABLE IF NOT EXISTS `scheduled` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  scenic.scheduled 的数据：~2 rows (大约)
DELETE FROM `scheduled`;
/*!40000 ALTER TABLE `scheduled` DISABLE KEYS */;
INSERT INTO `scheduled` (`id`, `title`) VALUES
	(1, '可定今日'),
	(2, '可定明日');
/*!40000 ALTER TABLE `scheduled` ENABLE KEYS */;


-- 导出  表 scenic.showbanner 结构
CREATE TABLE IF NOT EXISTS `showbanner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  scenic.showbanner 的数据：~3 rows (大约)
DELETE FROM `showbanner`;
/*!40000 ALTER TABLE `showbanner` DISABLE KEYS */;
INSERT INTO `showbanner` (`id`, `imgurl`) VALUES
	(1, '/public/img/1.jpg'),
	(2, '/public/img/2.jpg'),
	(3, '/public/img/3.jpg');
/*!40000 ALTER TABLE `showbanner` ENABLE KEYS */;


-- 导出  表 scenic.sort 结构
CREATE TABLE IF NOT EXISTS `sort` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  scenic.sort 的数据：~4 rows (大约)
DELETE FROM `sort`;
/*!40000 ALTER TABLE `sort` DISABLE KEYS */;
INSERT INTO `sort` (`id`, `title`) VALUES
	(1, '综合排序'),
	(2, '距离最近'),
	(3, '评价最高'),
	(4, '销量最高');
/*!40000 ALTER TABLE `sort` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
