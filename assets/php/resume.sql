-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 20 sep. 2023 à 12:33
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `resume`
--

-- --------------------------------------------------------

--
-- Structure de la table `hobbies`
--

CREATE TABLE `hobbies` (
  `id` int(255) NOT NULL,
  `loisirs` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `hobbies`
--

INSERT INTO `hobbies` (`id`, `loisirs`) VALUES
(1, 'VTT'),
(2, 'Roller'),
(3, 'Autotemponeuse'),
(4, 'Karting'),
(5, 'Serie'),
(6, 'Film'),
(7, 'Gaming'),
(9, 'Brocante');

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` text NOT NULL,
  `message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `date`, `nom`, `prenom`, `email`, `message`) VALUES
(5, '2023-08-25', 'waag', 'kevin', 'kevin@email.com', 'WHAT UP PEOPLE!?'),
(23, '0000-00-00', 'Alex', 'Le Chevalier', 'cammelot@stilllives.com', 'it works'),
(52, '2023-08-31', '', '', '', ''),
(53, '2023-08-31', '', '', '', 'fghjn,;hgfdxcvbn,jhgfzqsdfgqsdfghgfdeszrtyuhfdrsetyukjyrezfghjn,;hgfdxcvbn,jhgfzqsdfgqsdfghgfdeszrtyuhfdrsetyukjyrezfghjn,;hgfdxcvbn,jhgfzqsdfgqsdfghgfdeszrtyuhfdrsetyukjyrezfghjn,;hgfdxcvbn,jhgfzqsdfgqsdfghgfdeszrtyuhfdrsetyukjyrezfghjn,;hgfdxcvbn,jhgfzq');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `hobbies`
--
ALTER TABLE `hobbies`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `hobbies`
--
ALTER TABLE `hobbies`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
