-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: localhost
-- Létrehozás ideje: 2023. Ápr 20. 19:50
-- Kiszolgáló verziója: 10.4.25-MariaDB
-- PHP verzió: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `bgs`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `Saves`
--

CREATE TABLE `Saves` (
  `id` int(10) UNSIGNED NOT NULL,
  `userId` int(11) UNSIGNED NOT NULL,
  `data` longtext CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `Saves`
--

INSERT INTO `Saves` (`id`, `userId`, `data`) VALUES
(10, 17, '{\r\n    \"Save\":\r\n    {\r\n        \"name\": \"legelso\",\r\n        \"utc\": \"+1\",\r\n        \"date\": \"2023-02-02\",\r\n        \"time\": \"20:34:35\"\r\n    },\r\n    \"Position\": \r\n    {\r\n        \"map\": \"2\",\r\n        \"player\":\r\n        {\r\n            \"x\": \"100\",  \r\n            \"y\": \"50\",\r\n            \"z\": \"-50\"\r\n        },\r\n        \"entity\":\r\n        {\r\n            \"x\": \"70\",\r\n            \"y\": \"50\",\r\n            \"z\": \"-50\"\r\n        }\r\n    },\r\n    \"Items\": \r\n    {\r\n        \"flashlight\":\r\n        {\r\n            \"power\": \"on\",\r\n            \"batterylevel\": \"3\"\r\n        }\r\n    }\r\n}'),
(11, 17, '{\r\n    \"Save\":\r\n    {\r\n        \"name\": \"masodik\",\r\n        \"utc\": \"-2\",\r\n        \"date\": \"2023-01-02\",\r\n        \"time\": \"18:56:41\"\r\n    },\r\n    \"Position\": \r\n    {\r\n        \"map\": \"1\",\r\n        \"player\":\r\n        {\r\n            \"x\": \"100\",  \r\n            \"y\": \"50\",\r\n            \"z\": \"-50\"\r\n        },\r\n        \"entity\":\r\n        {\r\n            \"x\": \"70\",\r\n            \"y\": \"50\",\r\n            \"z\": \"-50\"\r\n        }\r\n    },\r\n    \"Items\": \r\n    {\r\n        \"flashlight\":\r\n        {\r\n            \"power\": \"on\",\r\n            \"batterylevel\": \"3\"\r\n        }\r\n    }\r\n}'),
(12, 17, '{\r\n    \"Save\":\r\n    {\r\n        \"name\": \"harmadik\",\r\n        \"utc\": \"+1\",\r\n        \"date\": \"2023-02-03\",\r\n        \"time\": \"20:34:35\"\r\n    },\r\n    \"Position\": \r\n    {\r\n        \"map\": \"1\",\r\n        \"player\":\r\n        {\r\n            \"x\": \"60\",  \r\n            \"y\": \"50\",\r\n            \"z\": \"45\"\r\n        },\r\n        \"entity\":\r\n        {\r\n            \"x\": \"0\",\r\n            \"y\": \"0\",\r\n            \"z\": \"0\"\r\n        }\r\n    },\r\n    \"Items\": \r\n    {\r\n        \"flashlight\":\r\n        {\r\n            \"power\": \"off\",\r\n            \"batterylevel\": \"4\"\r\n        }\r\n    }\r\n}'),
(13, 18, '{\r\n    \"Save\":\r\n    {\r\n        \"name\": \"harm\",\r\n        \"utc\": \"+1\",\r\n        \"date\": \"2023-02-02\",\r\n        \"time\": \"20:34:35\"\r\n    },\r\n    \"Position\": \r\n    {\r\n        \"map\": \"2\",\r\n        \"player\":\r\n        {\r\n            \"x\": \"100\",  \r\n            \"y\": \"50\",\r\n            \"z\": \"-50\"\r\n        },\r\n        \"entity\":\r\n        {\r\n            \"x\": \"70\",\r\n            \"y\": \"50\",\r\n            \"z\": \"-50\"\r\n        }\r\n    },\r\n    \"Items\": \r\n    {\r\n        \"flashlight\":\r\n        {\r\n            \"power\": \"on\",\r\n            \"batterylevel\": \"3\"\r\n        }\r\n    }\r\n}'),
(14, 18, '{\r\n    \"Save\":\r\n    {\r\n        \"name\": \"negy\",\r\n        \"utc\": \"+1\",\r\n        \"date\": \"2023-02-02\",\r\n        \"time\": \"20:34:35\"\r\n    },\r\n    \"Position\": \r\n    {\r\n        \"map\": \"2\",\r\n        \"player\":\r\n        {\r\n            \"x\": \"100\",  \r\n            \"y\": \"50\",\r\n            \"z\": \"-50\"\r\n        },\r\n        \"entity\":\r\n        {\r\n            \"x\": \"70\",\r\n            \"y\": \"50\",\r\n            \"z\": \"-50\"\r\n        }\r\n    },\r\n    \"Items\": \r\n    {\r\n        \"flashlight\":\r\n        {\r\n            \"power\": \"on\",\r\n            \"batterylevel\": \"3\"\r\n        }\r\n    }\r\n}'),
(15, 18, '{\r\n    \"Save\":\r\n    {\r\n        \"name\": \"five\",\r\n        \"utc\": \"+1\",\r\n        \"date\": \"2023-02-02\",\r\n        \"time\": \"20:34:35\"\r\n    },\r\n    \"Position\": \r\n    {\r\n        \"map\": \"2\",\r\n        \"player\":\r\n        {\r\n            \"x\": \"100\",  \r\n            \"y\": \"50\",\r\n            \"z\": \"-50\"\r\n        },\r\n        \"entity\":\r\n        {\r\n            \"x\": \"70\",\r\n            \"y\": \"50\",\r\n            \"z\": \"-50\"\r\n        }\r\n    },\r\n    \"Items\": \r\n    {\r\n        \"flashlight\":\r\n        {\r\n            \"power\": \"on\",\r\n            \"batterylevel\": \"3\"\r\n        }\r\n    }\r\n}'),
(16, 18, '{\r\n    \"Save\":\r\n    {\r\n        \"name\": \"firstgp\",\r\n        \"utc\": \"+1\",\r\n        \"date\": \"2023-02-02\",\r\n        \"time\": \"20:34:35\"\r\n    },\r\n    \"Position\": \r\n    {\r\n        \"map\": \"3\",\r\n        \"player\":\r\n        {\r\n            \"x\": \"100\",  \r\n            \"y\": \"50\",\r\n            \"z\": \"-50\"\r\n        },\r\n        \"entity\":\r\n        {\r\n            \"x\": \"70\",\r\n            \"y\": \"50\",\r\n            \"z\": \"-50\"\r\n        }\r\n    },\r\n    \"Items\": \r\n    {\r\n        \"flashlight\":\r\n        {\r\n            \"power\": \"on\",\r\n            \"batterylevel\": \"3\"\r\n        },\r\n        \"key\":\r\n        {\r\n            \"use\": \"1\"\r\n        },\r\n        \"coin\":\r\n        {\r\n            \"use\": \"3\"\r\n        }\r\n    }\r\n}'),
(17, 18, '{\r\n    \"Save\":\r\n    {\r\n        \"name\": \"lol\",\r\n        \"utc\": \"+1\",\r\n        \"date\": \"2023-02-02\",\r\n        \"time\": \"20:34:35\"\r\n    },\r\n    \"Position\": \r\n    {\r\n        \"map\": \"2\",\r\n        \"player\":\r\n        {\r\n            \"x\": \"100\",  \r\n            \"y\": \"50\",\r\n            \"z\": \"-50\"\r\n        },\r\n        \"entity\":\r\n        {\r\n            \"x\": \"70\",\r\n            \"y\": \"50\",\r\n            \"z\": \"-50\"\r\n        }\r\n    },\r\n    \"Items\": \r\n    {\r\n    }\r\n}');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `Users`
--

CREATE TABLE `Users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(16) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `Users`
--

INSERT INTO `Users` (`id`, `username`, `email`, `password`) VALUES
(17, 'Takonium', 'takonium@email.hu', '$2b$10$ZESMMcJoukac73ibCMBrI.ooT9EIPcj6P8VAYCN1jO.LYYrMpRPqm'),
(18, 'Kende01', 'kende@email.hu', '$2b$10$/m38U.NI3NjWpu/M.4kXXOicq7.1XuOj.j4pSvUat8oofFGcg.R5C'),
(19, 'Tamas01', 'tamas@email.hu', '$2b$10$hBYPIUNAB1G.A8VsGJvdju7yzEynrVsnVxMmFbv5ZTfGyLseCFbhO'),
(20, 'testaccount1', 'test1@email.hu', '$2b$10$K67nCLcBn.0qMwnMOqnD3.uHDPep0ISUMcNQI37FWCd65PmIPbnSa'),
(21, 'testaccount2', 'test2@email.hu', '$2b$10$5dCDAfNgWosIhHaJobbMd.F6QAjb24zrLJGZMbp0R3R3xgSvfgpgG'),
(22, 'testaccount3', 'test3@email.hu', '$2b$10$wTwSbvopWTr0EG1p2SVEruCxoH52IdY3sEtdjmfvzNKs.Dvnt8CHm');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `Saves`
--
ALTER TABLE `Saves`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`) USING BTREE;

--
-- A tábla indexei `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `Saves`
--
ALTER TABLE `Saves`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT a táblához `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `Saves`
--
ALTER TABLE `Saves`
  ADD CONSTRAINT `Saves_join_Users` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
