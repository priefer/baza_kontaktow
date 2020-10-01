-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 01 Paź 2020, 19:09
-- Wersja serwera: 10.4.13-MariaDB
-- Wersja PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `kontakty`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `tbl_kontakty`
--

CREATE TABLE `tbl_kontakty` (
  `id_kontaktu` int(11) NOT NULL,
  `imie` varchar(50) DEFAULT NULL,
  `nazwisko` varchar(50) DEFAULT NULL,
  `nr_kierunkowy` varchar(5) DEFAULT NULL,
  `nr_telefonu_stacj` varchar(15) DEFAULT NULL,
  `nr_telefonu_kom` varchar(15) DEFAULT NULL,
  `miasto_adres` varchar(100) DEFAULT NULL,
  `zawod_kontaktu` varchar(50) DEFAULT NULL,
  `uwagi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `tbl_kontakty`
--

INSERT INTO `tbl_kontakty` (`id_kontaktu`, `imie`, `nazwisko`, `nr_kierunkowy`, `nr_telefonu_stacj`, `nr_telefonu_kom`, `miasto_adres`, `zawod_kontaktu`, `uwagi`) VALUES
(1, 'Marek', 'Pietruszka', '+48', '154785647', '145789653', 'Warszawa, Łąkowa 3', 'Majster', 'NIE ODBIERAĆ'),
(2, 'Marek', 'Gwiazda', '54', '514875948', '485795482', 'Łąkowa 3', 'Informatyk', NULL),
(3, '123', 'gfdgdfg', '654', '65645', '6456546', '7gdf', 'fd', '543'),
(4, 'Kamil', 'Nieznam', '48', '46789542', '45786452', 'Łączna 2', 'Malarz', 'Siema'),
(5, 'Patryk', 'Koper', '43', '48751634', '45645654', 'Frytkowa 4', 'Lekarz', ''),
(6, 'Paweł', 'Lek', '53', '34534534', '53213545', 'Poznań', 'Brak', '');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `tbl_kontakty`
--
ALTER TABLE `tbl_kontakty`
  ADD PRIMARY KEY (`id_kontaktu`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `tbl_kontakty`
--
ALTER TABLE `tbl_kontakty`
  MODIFY `id_kontaktu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
