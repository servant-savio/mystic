import React, { useState } from 'react';
import bibleHeader from './images/bible-header.png';
import bibleData from './data/new-testament.json';

const Prayers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const {errorMessage, verses} = getVerse(searchTerm);
  const filteredData = verses;

  function getVerse(request) {
    const result = {};
    // Define book aliases
    const bookAliases = {
        "gen": "Genesis",
        "ex": "Exodus",
        "lev": "Leviticus",
        "num": "Numbers",
        "eeut": "Deuteronomy",
        "josh": "Joshua",
        "judg": "Judges",
        "ruth": "Ruth",
        "1sam": "1 Samuel",
        "2sam": "2 Samuel",
        "1kgs": "1 Kings",
        "2kgs": "2 Kings",
        "1chr": "1 Chronicles",
        "2chr": "2 Chronicles",
        "ezra": "Ezra",
        "neh": "Nehemiah",
        "esth": "Esther",
        "job": "Job",
        "ps": "Psalms",
        "prov": "Proverbs",
        "eccl": "Ecclesiastes",
        "song": "Song of Solomon",
        "isa": "Isaiah",
        "jer": "Jeremiah",
        "lam": "Lamentations",
        "ezek": "Ezekiel",
        "dan": "Daniel",
        "hos": "Hosea",
        "joel": "Joel",
        "amos": "Amos",
        "obad": "Obadiah",
        "jonah": "Jonah",
        "mic": "Micah",
        "nah": "Nahum",
        "hab": "Habakkuk",
        "zeph": "Zephaniah",
        "hag": "Haggai",
        "zech": "Zechariah",
        "mal": "Malachi",
        "matt": "Matthew",
        "mark": "Mark",
        "luke": "Luke",
        "john": "John",
        "acts": "Acts",
        "rom": "Romans",
        "1cor": "1 Corinthians",
        "2cor": "2 Corinthians",
        "gal": "Galatians",
        "eph": "Ephesians",
        "phil": "Philippians",
        "col": "Colossians",
        "1thess": "1 Thessalonians",
        "2thess": "2 Thessalonians",
        "1tim": "1 Timothy",
        "2tim": "2 Timothy",
        "titus": "Titus",
        "philem": "Philemon",
        "heb": "Hebrews",
        "james": "James",
        "1pet": "1 Peter",
        "2pet": "2 Peter",
        "1john": "1 John",
        "2john": "2 John",
        "3john": "3 John",
        "jude": "Jude",
        "rev": "Revelation"
    };

    // Regular expression to parse input string
    const verseRegex = /^(\d?\s?[A-Za-z]+)\s(\d+):(\d+)(?:-(\d+))?$/;
    const match = request.match(verseRegex);

    if (!match) {
        result.errorMessage = "Invalid request format. Please use 'Book Chapter:Verse' or 'Book Chapter:Verse-Verse'.";
        result.verses = [];
        return result;
    }

    let [_, book, chapter, startVerse, endVerse] = match;
    book = book.trim();

    // Resolve book name using aliases
    if (bookAliases[book.toLowerCase()]) {
        book = bookAliases[book.toLowerCase()];
    }

    // Find the book in the Bible data
    const bookData = bibleData.find(b => b.title.toLowerCase() === book.toLowerCase());

    if (!bookData) {
        result.errorMessage = `Book '${book}' not found.`;
        result.verses = [];
        return result;
    }

    const chapterNumber = parseInt(chapter);
    const startVerseNumber = parseInt(startVerse);
    endVerse = endVerse ? parseInt(endVerse) : startVerseNumber;

    // Validate chapter number
    const chapterData = bookData.chapters.find(c => c.chapterNumber === chapterNumber);
    if (!chapterData) {
        result.errorMessage = `Chapter ${chapter} not found in book '${book}'.`;
        result.verses = [];
        return result;
    }

    // Validate verse numbers
    if (startVerseNumber < 1 || startVerseNumber > chapterData.verses.length ||
        endVerse < 1 || endVerse > chapterData.verses.length) {
        result.errorMessage = `Verse(s) ${startVerse}-${endVerse} not found in chapter ${chapter} of book '${book}'.`;
        result.verses = [];
  
        return result;
    }

    // Extract and return the verses
    const verses = chapterData.verses.slice(startVerseNumber - 1, endVerse).map(v => v.text);
    console.log(JSON.stringify(verses, null, 2));
    return {verses};
  }

  return (
    <div>
      <img src={bibleHeader} alt="Bible Search"/>
      <div>
        <input className='searchBox'
          type="text" 
          placeholder="e.g. Matt 6:33-34" 
          value={searchTerm} 
          onChange={handleSearchChange}
        />
      </div>
      <div className='outerPrayer'>
        <div className='prayerContainer'>
        { errorMessage ? errorMessage :
        filteredData.map((item, index) => (
          <div>
            <p>{item}</p>
          </div>
        ))
        }
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        </div>
      </div>
    </div>
  );
};

export default Prayers;
