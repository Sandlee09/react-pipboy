import WonderfulGuy from "../assets/playlist/A Wonderful Guy.mp3";
import America from "../assets/playlist/America.mp3";
import AnythingGoes from "../assets/playlist/Anything Goes.mp3";
import BattleHymn from "../assets/playlist/Battle Hymn of the Republic.mp3";
import BoogieMan from "../assets/playlist/Boogie Man.mp3";
import ButcherPete from "../assets/playlist/Butcher Pete.mp3";
import DearHearts from "../assets/playlist/Dear Hearts and Gentle People.mp3";
import Dixie from "../assets/playlist/Dixie.mp3";
import EasyLiving from "../assets/playlist/Easy Living.mp3";
import FoxBoggie from "../assets/playlist/Fox Boggie.mp3";
import Halls from "../assets/playlist/Halls of Montezuma.mp3";
import HappyTimes from "../assets/playlist/Happy Times.mp3";
import IDontWantToSetTheWorld from "../assets/playlist/I dont want to set the World on Fire.mp3";
import InTrickedPig from "../assets/playlist/Im Tickled Pink.mp3";
import IntoEachLife from "../assets/playlist/Into Each Life Some Rain Must Fall.mp3";
import IntoTheWasteland from "../assets/playlist/Into The Wasteland.mp3";
import JazzyInterlude from "../assets/playlist/Jazzy Interlude.mp3";
import JollyDays from "../assets/playlist/Jolly Days.mp3";
import MainTitle from "../assets/playlist/Main Title.mp3";
import Maybe from "../assets/playlist/Maybe.mp3";
import Megaton from "../assets/playlist/Megaton.mp3";
import MightyMightyMan from "../assets/playlist/Mighty Mighty Man.mp3";
import RhythmForYou from "../assets/playlist/Rhythm for You.mp3";
import StarsAndStripes from "../assets/playlist/Stars and Stripes Forever.mp3";
import SwingDoors from "../assets/playlist/Swing Doors.mp3";
import TheWashingtonPost from "../assets/playlist/The Washington Post.mp3";
import WayBackHome from "../assets/playlist/Way Back Home.mp3";

export function getFileName(filePath) {
    return filePath.split('/').pop().split('%20').join(' ').split('.')[0];
  }

export const blackMountainSongs = [
  WonderfulGuy,
  America,
  AnythingGoes,
  BattleHymn,
  BoogieMan,
];

export const newVegasSongs = [
  ButcherPete,
  DearHearts,
  Dixie,
  EasyLiving,
  FoxBoggie,
];

export const mojaveSongs = [
FoxBoggie,
  Halls,
  HappyTimes,
  IDontWantToSetTheWorld,
  InTrickedPig,
];

export const sierraMadreSongs = [
  IntoEachLife,
  IntoTheWasteland,
  JazzyInterlude,
  JollyDays,
  HappyTimes,
];

export const ulfSongs = [
  MainTitle,
  Maybe,
  Megaton,
  MightyMightyMan,
  RhythmForYou,
];

export const mysteriousBroadcastSongs = [
  StarsAndStripes,
  SwingDoors,
  TheWashingtonPost,
  WayBackHome,
  Megaton
];