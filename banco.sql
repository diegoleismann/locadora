-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 29-Dez-2016 às 00:25
-- Versão do servidor: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `locadora`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `movies`
--

CREATE TABLE `movies` (
  `title` varchar(300) NOT NULL,
  `director` varchar(300) NOT NULL,
  `id_movie` int(4) NOT NULL,
  `state` int(2) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `movies`
--

INSERT INTO `movies` (`title`, `director`, `id_movie`, `state`) VALUES
('A Grande Aposta', 'Adam McKay', 2, 1),
('Spotlight - Segredos Revelados', 'Tom McCarthy', 3, 1),
('Carol', 'Todd Haynes', 4, 1),
('Coração de Cachorro', 'Laurie Anderson', 5, 1),
('Cinco Graças', 'Deniz Gamze Ergüven', 6, 1),
('Deadpool', 'Tim Miller', 7, 1),
('Kung Fu Panda 3', 'Jennifer Yuh e Alessandro Carloni', 8, 1),
('Boi Neon', 'Gabriel Mascaro', 9, 1),
('O Iluminado', 'Stanley Kubrick', 10, 1),
('Laranja Mecânica', 'Stanley Kubrick', 11, 1),
('2001: Uma Odisseia no Espaço', 'Stanley Kubrick', 12, 1),
('Taxi Driver', 'Martin Scorsese', 13, 1),
('Goodfellas', 'Martin Scorsese', 14, 1),
('O Lobo de Wall Street', 'Martin Scorsese', 15, 1),
('A Origem', 'Christopher Nolan', 16, 1),
('Amnésia', 'Christopher Nolan', 17, 1),
('Interstelar', 'Christopher Nolan', 18, 1),
('Onde os Fracos Não tem Vez', 'Joel e Ethan Coen', 19, 1),
('O Grande Lebowski', 'Joel e Ethan Coen', 20, 1),
('Quero ser John Malkovich', 'Spike Jonze', 21, 1),
('Ela (Her)', 'Spike Jonze', 22, 1),
('Tubarão', 'Steven Speilberg', 23, 1),
('A Lista de Schindler', 'Steven Speilberg', 24, 1),
('O Resgate do Soldado Ryan', 'Steven Speilberg', 25, 1),
('Milk', 'Gus Van Sant', 26, 1),
('Gênio Indomável', 'Gus Van Sant', 27, 1),
('Elefante', 'Gus Van Sant', 28, 1),
('Pulp Fiction', 'Quentin Tarantino', 29, 1),
('Bastardos Inglórios', 'Quentin Tarantino', 30, 1),
('Django Livre', 'Quentin Tarantino', 31, 1),
('O Poderoso Chefão – Trilogia', 'Francis Ford Coppola', 32, 1),
('Apocalipse Now', 'Francis Ford Coppola', 33, 1),
('Drácula de Bram Stocker', 'Francis Ford Coppola', 34, 1),
('O Pianista', 'Roman Polanski', 35, 1),
('Oliver Twist', 'Roman Polanski', 36, 1),
('O Bebê de Rosemary', 'Roman Polanski', 37, 1),
('Edward Mãos de Tesoura', 'Tim Burton', 38, 1),
('Batman', 'Tim Burton', 39, 1),
('A Noiva Cadáver', 'Tim Burton', 40, 1),
('Psicose', 'Alfred Hitchcock', 41, 1),
('Os Pássaros', 'Alfred Hitchcock', 42, 1),
('Janela Indiscreta', 'Alfred Hitchcock', 43, 1),
('Malcolm X', 'Spike Lee', 44, 1),
('O Plano Perfeito', 'Spike Lee', 45, 1),
('A Última Noite', 'Spike Lee', 46, 1),
('O Exterminador do Futuro 2', 'James Cameron', 47, 1),
('Titanic', 'James Cameron', 48, 1),
('Garota Exemplar', 'David Fincher', 49, 1),
('Clube da Luta', 'David Fincher', 50, 1),
('Seven: Os Sete Crimes Capitais', 'David Fincher', 51, 1),
('Cisne Negro', 'Darren Aronofsky', 52, 1),
('Os Tempos Modernos', 'Charles Chaplin', 53, 1),
('O Grande Ditador', 'Charles Chaplin', 54, 1),
('Luzes da Cidade', 'Charles Chaplin', 55, 1),
('Beleza Americana', 'Sam Mendes', 56, 1),
('Estrada Para Perdição', 'Sam Mendes', 57, 1),
('Foi Apenas um Sonho', 'Sam Mendes', 58, 1),
('Laberinto do Fauno', 'Guilhermo Del Toro', 59, 1),
('Hellboy', 'Guilhermo Del Toro', 60, 1),
('A Grande Aposta', 'Adam McKay', 62, 1),
('Spotlight - Segredos Revelados', 'Tom McCarthy', 63, 1),
('Carol', 'Todd Haynes', 64, 1),
('Coração de Cachorro', 'Laurie Anderson', 65, 1),
('Cinco Graças', 'Deniz Gamze Ergüven', 66, 1),
('Deadpool', 'Tim Miller', 67, 1),
('Kung Fu Panda 3', 'Jennifer Yuh e Alessandro Carloni', 68, 1),
('Boi Neon', 'Gabriel Mascaro', 69, 1),
('O Iluminado', 'Stanley Kubrick', 70, 1),
('Laranja Mecânica', 'Stanley Kubrick', 71, 1),
('2001: Uma Odisseia no Espaço', 'Stanley Kubrick', 72, 1),
('Taxi Driver', 'Martin Scorsese', 73, 1),
('Goodfellas', 'Martin Scorsese', 74, 1),
('O Lobo de Wall Street', 'Martin Scorsese', 75, 1),
('A Origem', 'Christopher Nolan', 76, 1),
('Amnésia', 'Christopher Nolan', 77, 1),
('Interstelar', 'Christopher Nolan', 78, 1),
('Onde os Fracos Não tem Vez', 'Joel e Ethan Coen', 79, 1),
('O Grande Lebowski', 'Joel e Ethan Coen', 80, 1),
('Quero ser John Malkovich', 'Spike Jonze', 81, 1),
('Ela (Her)', 'Spike Jonze', 82, 1),
('Tubarão', 'Steven Speilberg', 83, 1),
('A Lista de Schindler', 'Steven Speilberg', 84, 1),
('O Resgate do Soldado Ryan', 'Steven Speilberg', 85, 1),
('Milk', 'Gus Van Sant', 86, 1),
('Gênio Indomável', 'Gus Van Sant', 87, 1),
('Elefante', 'Gus Van Sant', 88, 1),
('Pulp Fiction', 'Quentin Tarantino', 89, 1),
('Bastardos Inglórios', 'Quentin Tarantino', 90, 1),
('Django Livre', 'Quentin Tarantino', 91, 1),
('O Poderoso Chefão – Trilogia', 'Francis Ford Coppola', 92, 1),
('Apocalipse Now', 'Francis Ford Coppola', 93, 1),
('Drácula de Bram Stocker', 'Francis Ford Coppola', 94, 1),
('O Pianista', 'Roman Polanski', 95, 1),
('Oliver Twist', 'Roman Polanski', 96, 1),
('O Bebê de Rosemary', 'Roman Polanski', 97, 1),
('Edward Mãos de Tesoura', 'Tim Burton', 98, 1),
('Batman', 'Tim Burton', 99, 1),
('A Noiva Cadáver', 'Tim Burton', 100, 1),
('Psicose', 'Alfred Hitchcock', 101, 1),
('Os Pássaros', 'Alfred Hitchcock', 102, 1),
('Janela Indiscreta', 'Alfred Hitchcock', 103, 1),
('Malcolm X', 'Spike Lee', 104, 1),
('O Plano Perfeito', 'Spike Lee', 105, 1),
('A Última Noite', 'Spike Lee', 106, 1),
('O Exterminador do Futuro 2', 'James Cameron', 107, 1),
('Titanic', 'James Cameron', 108, 1),
('Garota Exemplar', 'David Fincher', 109, 1),
('Clube da Luta', 'David Fincher', 110, 1),
('Seven: Os Sete Crimes Capitais', 'David Fincher', 111, 1),
('Cisne Negro', 'Darren Aronofsky', 112, 1),
('Os Tempos Modernos', 'Charles Chaplin', 113, 1),
('O Grande Ditador', 'Charles Chaplin', 114, 1),
('Luzes da Cidade', 'Charles Chaplin', 115, 1),
('Beleza Americana', 'Sam Mendes', 116, 1),
('Estrada Para Perdição', 'Sam Mendes', 117, 1),
('Foi Apenas um Sonho', 'Sam Mendes', 118, 1),
('Laberinto do Fauno', 'Guilhermo Del Toro', 119, 2),
('Hellboy', 'Guilhermo Del Toro', 120, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `name` varchar(300) NOT NULL,
  `email` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL,
  `id_user` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`name`, `email`, `password`, `id_user`) VALUES
('diego', 'diegoleismann@gmail.com', '3c45c21684272e69812e45cba2c3680555e7fc35e86f1da17722c0132ba085a6', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id_movie`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id_movie` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
