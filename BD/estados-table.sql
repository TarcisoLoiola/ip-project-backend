# Create structure for table estados
CREATE TABLE IF NOT EXISTS `estados` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `descricao` varchar(50) NOT NULL,
  `sigla` varchar(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;