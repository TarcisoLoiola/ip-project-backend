# Create structure for table estados
CREATE TABLE IF NOT EXISTS `cidades` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `descricao` varchar(50) NOT NULL,
  `id_estado` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_cidades_estados` (`id_estado`),
  CONSTRAINT `FK_cidades_estados` FOREIGN KEY (`id_estado`) REFERENCES `estados` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;